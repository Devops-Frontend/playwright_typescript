import { Page } from "@playwright/test";
import HomePage from "./HomePage";

export default class LoginPage {
  private readonly userNameInputSelector = "#Email";
  private readonly usePasswordInputSelector = "#Password";
  //private readonly chkRememberMe = "#RememberMe";
  private readonly btnLogin = "//input[@value='Log in']";

  constructor(private page: Page) {}

  async navigateToLoginPage() {
    await this.page.goto("/");
  }
  async fillUserName(userName: string) {
    await this.page.locator(this.userNameInputSelector).fill(userName);
  }
  async fillPassword(password: string) {
    await this.page.locator(this.usePasswordInputSelector).fill(password);
  }
  async clkLoginBtn() {
    await this.page
      .locator(this.btnLogin)
      .click()
      .catch((error) => {
        console.error(`Error clicking login button: ${error}`);
        throw error;
      });
    const hp = new HomePage(this.page);
    return hp;
  }
}
