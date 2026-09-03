import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  timeout: 30_000,
  expect: { timeout: 5_000, toHaveScreenshot: { animations: "disabled", caret: "hide" } },
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
    locale: "en-US",
    colorScheme: "dark",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "mobile-375", use: { ...devices["iPhone 13"], viewport: { width: 375, height: 812 } } },
    { name: "mobile-430", use: { ...devices["Pixel 5"], viewport: { width: 430, height: 932 } } },
    { name: "tablet-768", use: { ...devices["iPad Mini"], viewport: { width: 768, height: 1024 } } },
    { name: "desktop-1440", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
  ],
  webServer: process.env.PLAYWRIGHT_BASE_URL ? undefined : { command: "pnpm dev", url: "http://127.0.0.1:3000", reuseExistingServer: true, timeout: 120_000 },
});
