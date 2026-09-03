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
  
});

test("invalid login", async ({ page }) => {

  await page.goto("https://www.saucedemo.com");

  await page.getByPlaceholder("Username").fill("wrong_user");

  await page.getByPlaceholder("Password").fill("wrong_password");

  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.locator(".error-message-container.error")).toBeVisible();

});
