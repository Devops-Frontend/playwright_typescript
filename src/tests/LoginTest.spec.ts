import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("Login Test", async ({ page }) => {
  const lp = new LoginPage(page);
  await lp.navigateToLoginPage();
  await page.locator("//a[@class='ico-login']").click();
  await lp.fillUserName("playwrighttest@qa.com");
  await lp.fillPassword("PlaywrightTest");
  const hp = await lp.clkLoginBtn();
  await hp.accountToBeVisible();
});
