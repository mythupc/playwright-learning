import { test, expect } from '@playwright/test';
//single file upload
test.skip("upload file", async( {page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page.getByRole("heading",{name :"Automation Testing Practice"})).toBeVisible();
    await page.locator("#singleFileInput").setInputFiles("/home/hb/Downloads/new_quick_pay.pdf");
});

//multiple file upload
test.skip("upload multiple files", async( {page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page.getByRole("heading",{name :"Automation Testing Practice"})).toBeVisible();
    await page.locator("#multipleFilesInput").setInputFiles(["test-data/new_quick_pay.pdf","test-data/17536.jpeg"]);
});

test.skip("download file", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button",{name:"Download PDF File"}).click();
    const download = await downloadPromise;
    await download.saveAs("test-results/invoice.pdf");
});

test("date picker", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page.getByRole("heading",{name :"Automation Testing Practice"})).toBeVisible();
    await page.locator("#datepicker").click();
    await page.getByRole("link",{name:"13",exact:true}).click(); 
});
