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

test.skip("dropdown", async ({ page }) => {
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
 await page.getByTestId("custom-dropdown-trigger").click();
 await page.getByTestId("custom-opt-high").click();
});

test.skip("Hover test", async ({ page }) => {
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
  //
  await expect(page.getByTestId("tooltip-btn")).toBeVisible();
  //hover that button
  await page.getByTestId("tooltip-btn").hover();
  await expect(page.getByTestId("custom-tooltip")).toBeVisible();
});


test.skip("focuses full name input", async ({ page }) => {
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
  //storing in a var
  const fullName = page.getByTestId("input-fullname");
  //focus
  await fullName.focus();
  //assertion
  await expect(fullName).toBeFocused();
  //blur
  await fullName.blur();
  //assertion for blur
  await expect(fullName).not.toBeFocused();

});

test.skip("modifiers practice using ctrl", async ({ page }) => {
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
  //verify resource heading
  await expect(page.getByRole("heading",{name:"Resources"})).toBeVisible();
  await page.getByRole("link",{name : "Playwright Docs"}).click({modifiers:["Control"]});
});

test("force close check", async ({ page }) => {
  await page.goto("https://playwrightlab.github.io/index.html");
  // Login
  await page.getByRole("link", { name: "Login", exact: true }).click();
  await page.getByPlaceholder("you@example.com").fill("test@playlab.com");
  await page.getByPlaceholder("Enter your password").fill("Password123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page.getByText("Signed in as test@playlab.com")).toBeVisible();
  await page.getByTestId("go-to-dashboard").click();
  await page.getByTestId("nav-menu").hover();
  await page.getByRole("link",{name:"Dynamic Content"}).click();
  await expect(page.getByRole("heading",{name:"Dynamic Content"})).toBeVisible();
  //finding input element & stores in a var
  const input = page.getByTestId("toggle-input");
  //checked it is enabled
  await expect(input).toBeEnabled();
  //find button & click
  await page.getByRole("button",{name : "Disable Input"}).click();
  //checked it is disabled
  await expect(input).toBeDisabled();
  await input.click({force:true});

});

test("focuses full name input", async ({ page }) => {
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
  //storing in a var
  const fullName = page.getByTestId("input-fullname");
  //focus
  await fullName.focus();
  //assertion
  await expect(fullName).toBeFocused();
  await page.keyboard.type("john");

});