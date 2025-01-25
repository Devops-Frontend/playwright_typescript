import { Page } from "@playwright/test";
import HomePage from "./HomePage";
import logger from "../utils/loggerUtil";

export default class LoginPage {
  private readonly userNameInputSelector = "#Email";
  private readonly usePasswordInputSelector = "#Password";
  //private readonly chkRememberMe = "#RememberMe";
  private readonly btnLogin = "//input[@value='Log in']";

  constructor(private page: Page) {}

  async navigateToLoginPage() {
    await this.page.goto("/");
    logger.info("Navigated to Demo Webshop Application");
  }
  async fillUserName(userName: string) {
    await this.page.locator(this.userNameInputSelector).fill(userName);
    logger.info("Entering UserName");
  }
  async fillPassword(password: string) {
    await this.page.locator(this.usePasswordInputSelector).fill(password);
    logger.info("Entering Password");
  }
  async clkLoginBtn() {
    await this.page
      .locator(this.btnLogin)
      .click()
      .catch((error) => {
        console.error(`Error clicking login button: ${error}`);
        throw error;
      });
    logger.info("Click on submit");
    const hp = new HomePage(this.page);
    return hp;
  }
}
