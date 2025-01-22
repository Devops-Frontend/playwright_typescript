import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { decrypt, encrypt } from "../utils/CryptoUtil";
import { encryptEnvFile } from "../utils/EncryptEnvFile";
test("Login Test", async ({ page }) => {
  const lp = new LoginPage(page);
  await lp.navigateToLoginPage();
  await page.locator("//a[@class='ico-login']").click();
  //await lp.fillUserName(decrypt(process.env.userId!));
  //await lp.fillPassword(decrypt(process.env.password!));
  await lp.fillUserName(process.env.userId!);
  await lp.fillPassword(process.env.password!);
  const hp = await lp.clkLoginBtn();
  await hp.accountToBeVisible();
  await page.close();
});

test("Sample env test", async ({ page }) => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.userId);
  console.log(process.env.password);
});

test("Sample Encrypt Test", async ({ page }) => {
  //const plainText = "Hello World!!";
  //const encryptedText = encrypt(plainText);
  //console.log("SALT:", process.env.SALT);
  //console.log("Encrypted", encryptedText);
  //const decryptText = decrypt(encryptedText);
  //console.log("Decrypted", decryptText);
  //encryptEnvFile();
  console.log(process.env.userId!);
  console.log(process.env.password!);
  console.log("Decryption Starts");
  console.log(decrypt(process.env.userId!));
  console.log(decrypt(process.env.password!));
});
