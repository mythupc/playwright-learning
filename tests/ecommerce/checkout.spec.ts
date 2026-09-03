import { test, expect } from "@playwright/test";

test("complete checkout successfully", async ({ page }) => {

 // Login
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator(".submit-button.btn_action").click();
  //backpack add to cart 
  const backpack = page.locator(".inventory_item").filter({hasText:"Sauce Labs Backpack"});
  await backpack.getByRole("button",  {name:"Add to cart"}).click();
  //checked qty count open cart checked backpack 
  await expect(page.locator(".shopping_cart_badge")).toHaveText("1");
  await page.locator(".shopping_cart_link").click();
  await expect (page.getByText("Sauce Labs Backpack")).toBeVisible();
  //click checkout
  await page.locator(".btn.btn_action.btn_medium.checkout_button ").filter({hasText:"Checkout"}).click();
  //check url for checkout
  await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
  await page.getByPlaceholder("First Name").fill("samara");
  await page.getByPlaceholder("Last Name").fill("simhareddy");
  await page.getByPlaceholder("Zip/Postal Code").fill("524201");
  await page.getByRole("button",{name:"continue"}).click();
  //verify order
  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  //click finish
  await page.getByRole("button",{name:"Finish"}).click();
  // Verify confirmation
  await expect(
    page.getByText("Thank you for your order!")
  ).toBeVisible();
  //click back home
  await page.getByRole("button",{name:"Back Home"}).click();
  //verify home url
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

  

