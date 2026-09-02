import { test, expect } from "@playwright/test";

const routes = [
  { name: "homepage", path: "", marker: "main" },
  { name: "login", path: "/login", marker: "main" },
  { name: "pricing", path: "/pricing", marker: "main" },
  { name: "features", path: "/features", marker: "main" },
];

for (const locale of ["fa", "en"]) {
  for (const route of routes) {
    test(`${locale} ${route.name} loads without layout regressions`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
      page.on("pageerror", (error) => errors.push(error.message));
      await page.goto(`/${locale}${route.path}`, { waitUntil: "domcontentloaded" });
      await expect(page.locator(route.marker)).toBeVisible();
      await expect(page).toHaveScreenshot(`${locale}-${route.name}.png`, { fullPage: true, maxDiffPixelRatio: 0.015 });
      expect(errors, `unexpected browser errors on /${locale}${route.path}`).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
      if (route.name === "homepage") {
        await expect(page.locator("h1")).toContainText(locale === "fa" ? "هر پرسش = یک فرصت" : "Every question is an opportunity");
        await expect(page.getByLabel(locale === "fa" ? "پیش‌نمایش داشبورد اصلی سئورچبل" : "Seorchable main dashboard preview")).toBeVisible();
        await expect(page.getByRole("button", { name: locale === "fa" ? /آنالیز رایگان|منوی ناوبری/ : /Free Audit|Open navigation menu/ }).first()).toBeVisible();
      }
    });
  }
}
