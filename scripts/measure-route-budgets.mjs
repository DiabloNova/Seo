import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const nextDir = join(root, ".next");
const budgetPath = join(root, "performance", "route-budgets.json");
const readJson = (file) => JSON.parse(readFileSync(join(nextDir, file), "utf8"));
const size = (file) => readFileSync(join(nextDir, file)).length;

if (!existsSync(nextDir)) {
  console.error("No .next production build found. Run the repository build first.");
  process.exit(2);
}
const manifestPath = join(nextDir, "app-build-manifest.json");
if (!existsSync(manifestPath)) {
  console.error("Could not find .next/app-build-manifest.json.");
  process.exit(2);
}
const pages = readJson("app-build-manifest.json").pages || {};
const entries = Object.entries(pages)
  .filter(([route]) => !route.startsWith("/_") && !route.includes("/api/"))
  .map(([route, files]) => [route, [...new Set(files)].filter((file) => file.endsWith(".js"))]);
if (!entries.length) {
  console.error("No route JavaScript entries found in the production manifest.");
  process.exit(2);
}
const usage = new Map();
for (const [, files] of entries) for (const file of files) usage.set(file, (usage.get(file) || 0) + 1);
const measured = {};
for (const [route, files] of entries) {
  const present = files.filter((file) => existsSync(join(nextDir, file)));
  const shared = present.filter((file) => usage.get(file) > 1);
  const routeOnly = present.filter((file) => usage.get(file) === 1);
  measured[route] = {
    initialJsBytes: present.reduce((total, file) => total + size(file), 0),
    routeJsBytes: routeOnly.reduce((total, file) => total + size(file), 0),
    sharedJsBytes: shared.reduce((total, file) => total + size(file), 0),
    chunks: present,
  };
}
const config = existsSync(budgetPath) ? JSON.parse(readFileSync(budgetPath, "utf8")) : { version: 1, tolerancePercent: 5, routes: {} };
const kib = (n) => `${(n / 1024).toFixed(1)} KiB`;
if (process.argv.includes("--write-baseline")) {
  const factor = 1 + (config.tolerancePercent || 0) / 100;
  config.routes = Object.fromEntries(Object.entries(measured).map(([route, value]) => [route, {
    initialJsBytes: Math.ceil(value.initialJsBytes * factor),
    routeJsBytes: Math.ceil(value.routeJsBytes * factor),
  }]));
  writeFileSync(budgetPath, `${JSON.stringify(config, null, 2)}\n`);
  console.log(`Wrote measured route budgets for ${Object.keys(config.routes).length} routes.`);
  process.exit(0);
}
const missing = Object.keys(measured).filter((route) => !config.routes?.[route]);
if (missing.length) {
  console.error(`Missing budgets for ${missing.length} built routes. Run: npm run perf:baseline`);
  console.error(missing.join("\n"));
  process.exit(1);
}
let failed = false;
for (const [route, value] of Object.entries(measured)) {
  const budget = config.routes[route];
  const initialOk = value.initialJsBytes <= budget.initialJsBytes;
  const routeOk = value.routeJsBytes <= budget.routeJsBytes;
  if (!initialOk || !routeOk) failed = true;
  console.log(`${route}\tinitial ${kib(value.initialJsBytes)} / ${kib(budget.initialJsBytes)}\troute ${kib(value.routeJsBytes)} / ${kib(budget.routeJsBytes)}\t${initialOk && routeOk ? "OK" : "OVER BUDGET"}`);
}
if (failed) process.exit(1);
