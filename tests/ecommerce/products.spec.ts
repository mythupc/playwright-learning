import { test, expect } from "@playwright/test";
test("successful login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator(".submit-button.btn_action").click();
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.getByText(/products/i)).toBeVisible();
  await expect(page.locator(".inventory_item")).toHaveCount(6);
  await expect(page.getByRole("button",{name:"Add to cart"})).toHaveCount(6);
  await expect(page.locator(".inventory_item_name")).toHaveCount(6);
  
});

test("verify Sauce Labs Backpack details", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator(".submit-button.btn_action").click();
  const backpack = page.locator(".inventory_item").filter({hasText:"Sauce Labs Backpack"});
  await expect(backpack.getByText("carry.allTheThings()")).toBeVisible();
  await expect(backpack.getByText("$29.99")).toBeVisible();
});

test("add Sauce Labs Backpack to cart", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator(".submit-button.btn_action").click();
  const backpack = page.locator(".inventory_item").filter({hasText:"Sauce Labs Backpack"});
  await backpack.getByRole("button",  {name:"Add to cart"}).click();
  await expect(page.locator(".shopping_cart_badge")).toHaveText("1");
  await page.locator(".shopping_cart_link").click();
  await expect (page.getByText("Sauce Labs Backpack")).toBeVisible();


});

