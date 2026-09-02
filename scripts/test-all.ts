import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Deterministic CI test orchestrator.
 *
 * The repository uses focused TypeScript runners instead of a single test framework.
 * This script makes that implicit convention explicit: suites run in a stable order,
 * fail fast, and return the failing child's exit code. Database-backed integration tests
 * are opt-in and are never silently replaced with mocks.
 */

interface Suite {
  name: string;
  path: string;
  integration?: boolean;
}

const suites: Suite[] = [
  { name: "Acquisition", path: "tests/features/acquisition/run-all.ts" },
  { name: "AI intelligence", path: "tests/features/ai-intelligence/run-all.ts" },
  { name: "Monitoring", path: "tests/features/monitoring/run-all.ts" },
  { name: "Service monitoring isolation", path: "tests/services/monitoring/run-all.ts" },
  { name: "Admin", path: "tests/features/admin/run-all.ts", integration: true },
  { name: "Acquisition integration", path: "tests/features/acquisition/integration/run-all.ts", integration: true },
];

function shouldRunIntegrationSuites(): boolean {
  return process.env.RUN_INTEGRATION_TESTS === "1";
}

function runSuite(suite: Suite): void {
  const absolutePath = resolve(process.cwd(), suite.path);
  if (!existsSync(absolutePath)) {
    throw new Error(`Test suite is missing: ${suite.path}`);
  }

  console.log(`\n▶ ${suite.name}: ${suite.path}`);
  const result = spawnSync("tsx", [absolutePath], {
    stdio: "inherit",
    env: process.env,
  });

  if (result.error) {
    throw new Error(`Could not start ${suite.name} test runner: ${result.error.message}`);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const runIntegrations = shouldRunIntegrationSuites();
const selectedSuites = suites.filter((suite) => runIntegrations || !suite.integration);

if (runIntegrations && (!process.env.DATABASE_URL || !process.env.MIGRATION_DATABASE_URL)) {
  console.error("RUN_INTEGRATION_TESTS=1 requires DATABASE_URL and MIGRATION_DATABASE_URL.");
  process.exit(2);
}

console.log(`Running ${selectedSuites.length} test suite(s). Integration suites: ${runIntegrations ? "enabled" : "skipped"}.`);
for (const suite of selectedSuites) {
  runSuite(suite);
}
console.log("\n✅ All selected test suites passed.");
