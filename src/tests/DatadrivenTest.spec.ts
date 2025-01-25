import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { decrypt, encrypt } from "../utils/CryptoUtil";
import { encryptEnvFile } from "../utils/EncryptEnvFile";
import cdata from "../data/loginData.json";
import { convertCSVFileTOJSONFile } from "../utils/csvToJsonUtil";

for (const loginData of cdata) {
  test(`Logout_Demo_${loginData.testName}`, async ({ page }) => {
    const lp = new LoginPage(page);
    await lp.navigateToLoginPage();
    await page.locator("//a[@class='ico-login']").click();
    //await lp.fillUserName(decrypt(process.env.userId!));
    //await lp.fillPassword(decrypt(process.env.password!));
    await lp.fillUserName(loginData.userName);
    await lp.fillPassword(loginData.password);
    const hp = await lp.clkLoginBtn();
    await hp.accountToBeVisible();
    await page.close();
  });
}

test.skip("csv to json", async () => {
  convertCSVFileTOJSONFile("data.csv", "datademo.json");
});
