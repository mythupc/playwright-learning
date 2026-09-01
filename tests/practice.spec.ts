import { test, expect } from "@playwright/test";
test("test login", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.getByLabel("Username").fill("student");
  await page.getByLabel("Password").fill("Password123");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page).toHaveURL(
    "https://practicetestautomation.com/logged-in-successfully/",
  );
  await expect(
    page.getByText("Congratulations student. You successfully logged in!"),
  ).toBeVisible();

  await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
  await page.getByRole("link", { name: "Log out" }).click();
  await expect(page).toHaveURL(
    "https://practicetestautomation.com/practice-test-login/",
  );
});
