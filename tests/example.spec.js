//@ts-check
import { test, expect } from "@playwright/test";

test("Check_url_Title", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
  await page.waitForTimeout(3000);
});

test("check_url_Correct", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveURL("jkjfhsdjhfs");
});

test("check_url_contains", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveURL(/.*demo/);
});

test("login swag lab", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="username"]').press("Tab");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(3000);
});

test("Add items", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="username"]').press("Tab");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  // To add one item
  // await page.click ('#add-to-cart-sauce-labs-backpack')

  // To Add All items togather
  const buttons = await page.$$(".btn");
  for (const button1 of buttons) {
    await button1.click();
  }

  await page.waitForTimeout(10000);
});
