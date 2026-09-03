import { test, expect } from "@playwright/test";

test("remove product from cart", async ({ page }) => {

  // Login
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator(".submit-button.btn_action").click();
  //backpack add to cart 
  const backpack = page.locator(".inventory_item").filter({hasText:"Sauce Labs Backpack"});
  await backpack.getByRole("button",  {name:"Add to cart"}).click();
  //checked qty count clicked cart icon checked backpack 
  await expect(page.locator(".shopping_cart_badge")).toHaveText("1");
  await page.locator(".shopping_cart_link").click();
  await expect (page.getByText("Sauce Labs Backpack")).toBeVisible();
  //clicked removed option verified count becomes 0
  await page.locator(".btn.btn_secondary.btn_small.cart_button").filter({hasText:"Remove"}).click();
  await expect(backpack).not.toBeVisible();
  await expect(page.locator(".shopping_cart_badge")).not.toBeVisible();
  //await expect(page.locator(".shopping_cart_badge")).toHavecount(0); other way to check cart badge count
});