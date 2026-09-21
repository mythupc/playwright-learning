import {test,expect} from "@playwright/test";
test.skip("checking drop down",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com");
    await expect(page).toHaveTitle("Automation Testing Practice");
    const country = page.getByLabel("Country:");
    await country.selectOption({label:"India"});
    await expect(country).toHaveValue("india");
});
test("custom drop down",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com");
    await expect(page).toHaveTitle("Automation Testing Practice");
    await page.getByRole("link",{name:"PlaywrightPractice"}).click();
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.waitForTimeout(9000);
    await page.getByPlaceholder("Select an item").click();
    await page.getByText("Item 5",{exact : true}).click();

});