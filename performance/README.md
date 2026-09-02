# Route JavaScript budgets

`measure-route-budgets.mjs` reads the production `.next` artifacts, not source files. It treats the JavaScript listed for an app route in `.next/app-build-manifest.json` as that route's initial JavaScript. A chunk used by more than one route is reported as shared; chunks used by one route are reported as route-specific.

After a successful production build, establish the baseline once with `npm run perf:baseline`. This writes the measured route values plus the single documented 5% tolerance to `route-budgets.json`. CI should run `npm run perf:check` after the production build. The check fails for missing route budgets or any measured value above its canonical budget.
