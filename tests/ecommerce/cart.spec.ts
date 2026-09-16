import { test, expect } from "@playwright/test";

test.describe("Cart Tests", () => {
test.beforeAll(async ()=>{
  console.log("Starting Cart Test Suite");
});
test.beforeEach(async ({page})=>{
  // Login
  await page.goto("https://www.saucedemo.com"); 
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator(".submit-button.btn_action").click();
  await expect(page).toHaveURL(/inventory.html/);
});
test.afterEach(async ({page})=>{

  console.log("after test afterEach hook executed");

});
test("remove product from cart", async ({ page }) => {

  /*// Login
  await page.goto("https://www.saucedemo.com"); 
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator(".submit-button.btn_action").click();*/
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
// testing add multiple products and verify cart
test("add multiple products and verify cart",async({page})=>{

 /* //login
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator(".submit-button.btn_action").click();*/
  //verify backpack & click add to cart
  const backpack = page.locator(".inventory_item").filter({hasText:/Sauce Labs Backpack/i});
  await backpack.getByRole("button",{name:"Add to cart"}).click();
  //verify bikelight & click add to cart
  const bikelight = page.locator(".inventory_item").filter({hasText:/Sauce Labs Bike Light/i});
  await bikelight.getByRole("button",{name:/add to cart/i}).click();
  //verify icon badge has count 2
  await expect(page.locator(".shopping_cart_badge")).toHaveText("2");
  //open cart
  await page.locator(".shopping_cart_link").click();
  //verify num of cart items
  await expect(page.locator(".cart_item")).toHaveCount(2);
  //verify backpack & its price visible
  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  await expect(page.getByText("$29.99")).toBeVisible();
  //verify bike light & its price visible
  await expect(page.getByText("Sauce Labs Bike Light")).toBeVisible();
  await expect(page.getByText("$9.99")).toBeVisible();
  });
  
//remove one product from multiple products
test("remove one product from multiple products", async ({ page }) => {
  /*//login
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator(".submit-button.btn_action").click();*/
  //verify backpack & click add to cart
  const backpack = page.locator(".inventory_item").filter({hasText:/Sauce Labs Backpack/i});
  await backpack.getByRole("button",{name:"Add to cart"}).click();
  //verify bikelight & click add to cart
  const bikelight = page.locator(".inventory_item").filter({hasText:/Sauce Labs Bike Light/i});
  await bikelight.getByRole("button",{name:/add to cart/i}).click();
  //verify icon badge has count 2
  await expect(page.locator(".shopping_cart_badge")).toHaveText("2");
  //open cart
  await page.locator(".shopping_cart_link").click();
  //verify backpack & remove
const backpackInCart = page.locator(".cart_item").filter({ hasText: "Sauce Labs Backpack" });
await backpackInCart.getByRole("button", { name: "Remove" }).click();
//Verify Backpack is gone
await expect(backpackInCart).toHaveCount(0);
//verify bike light still exists
const bikelightincart = page.locator(".cart_item").filter({hasText:"Sauce Labs Bike Light"});
await expect(bikelightincart).toBeVisible();
//verify cart count
await expect(page.locator(".shopping_cart_badge")).toHaveCount(1) ;
});

});