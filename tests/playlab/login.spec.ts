import {test,expect} from "@playwright/test";
/*test("login test",async({page}) =>{
    await page.goto("https://playwrightlab.github.io/index.html?utm_source=chatgpt.com");
    await page.getByRole("link", { name: "Login" , exact : true}).click();
    await expect(page).toHaveURL("https://playwrightlab.github.io/login.html");
    await page.getByPlaceholder("you@example.com").fill("test@playlab.com");
    await page.getByPlaceholder("Enter your password").fill("Password123");
    await page.getByRole("button",{name:"Sign In"}).click();
    await expect(page.getByText("Signed in as test@playlab.com"))
    .toBeVisible();
})*/

test.skip("double click test", async ({ page }) => {
  await page.goto("https://playwrightlab.github.io/index.html");
  // Login
  await page.getByRole("link", { name: "Login", exact: true }).click();
  await page.getByPlaceholder("you@example.com").fill("test@playlab.com");
  await page.getByPlaceholder("Enter your password").fill("Password123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page.getByText("Signed in as test@playlab.com")).toBeVisible();
  await page.getByTestId("go-to-dashboard").click();
  await page.getByTestId("nav-menu").click();
  await page.getByTestId("nav-interactions").click();
  // Verify Interactions heading
  await expect(page.getByRole("heading", { name: "Interactions" })).toBeVisible();
  // Verify Double Click button
  await expect(page.getByRole("button", { name: "Double Click Me" })).toBeVisible();
  // Double click
  await page.getByRole("button", {name: "Double Click Me"}).dblclick();

  //verify right click button
  await expect(page.getByRole("button", { name: "Right Click Me" })).toBeVisible();
  // right click
  await page.getByRole("button", {name: "Right Click Me"}).click({button :"right"});
 

});

test.skip("press action", async ({ page }) => {
  await page.goto("https://playwrightlab.github.io/index.html");
  // Login
  await page.getByRole("link", { name: "Login", exact: true }).click();
  await page.getByPlaceholder("you@example.com").fill("test@playlab.com");
  await page.getByPlaceholder("Enter your password").fill("Password123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page.getByText("Signed in as test@playlab.com")).toBeVisible();
  await page.getByTestId("go-to-dashboard").click();
  await page.getByTestId("nav-menu").click();
  await page.getByTestId("nav-a11y").click();
  //verify accessibility heading
  await expect(page.getByRole("heading",{name: "Accessibility (a11y)"})).toBeVisible();
  //verify button is visible 
  await expect(page.getByTestId("a11y-btn-1")).toBeVisible();
  //press
  await page.getByTestId("a11y-btn-1").press("Enter");
});

test.skip("check actions", async ({ page }) => {
  await page.goto("https://playwrightlab.github.io/index.html");
  // Login
  await page.getByRole("link", { name: "Login", exact: true }).click();
  await page.getByPlaceholder("you@example.com").fill("test@playlab.com");
  await page.getByPlaceholder("Enter your password").fill("Password123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page.getByText("Signed in as test@playlab.com")).toBeVisible();
  await page.getByTestId("go-to-dashboard").click();
  await page.getByTestId("nav-menu").click();
  await page.getByTestId("nav-forms").click();
  //verify Form Elements heading
 await expect(page.getByRole("heading",{name: "Form Elements"})).toBeVisible();
 //expect label to visible
 await expect(page.getByText("Skills")).toBeVisible();
 //check java option
 await page.getByTestId("check-java").check();
 //check option is checked or not
 await expect(page.getByTestId("check-java")).toBeChecked();
 //uncheck java option
 await page.getByTestId("check-java").uncheck();
 //check option is checked or not
 await expect(page.getByTestId("check-java")).not.toBeChecked();


});

test("dropdown", async ({ page }) => {
  await page.goto("https://playwrightlab.github.io/index.html");
  // Login
  await page.getByRole("link", { name: "Login", exact: true }).click();
  await page.getByPlaceholder("you@example.com").fill("test@playlab.com");
  await page.getByPlaceholder("Enter your password").fill("Password123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page.getByText("Signed in as test@playlab.com")).toBeVisible();
  await page.getByTestId("go-to-dashboard").click();
  await page.getByTestId("nav-menu").click();
  await page.getByTestId("nav-forms").click();
  //verify Form Elements heading
 await expect(page.getByRole("heading",{name: "Form Elements"})).toBeVisible();
 await expect(page.locator("field-label")).toBeVisible();
 await page.getByText("Select Priority").selectOption({label:" High"});
});

