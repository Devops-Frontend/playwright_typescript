import { Page, expect } from "@playwright/test";
import logger from "../utils/loggerUtil";

export default class HomePage {
  private readonly accountLocator = "(//a[@class='account'])[1]";
  private readonly lnkLogut = "Log out";
  constructor(private page: Page) {}

  async accountToBeVisible() {
    await expect(this.page.locator(this.accountLocator)).toHaveText(
      /playwrighttest@qa.com/
    );
    logger.info("Test is completed");
  }

  async clkOnLogout() {
    await this.page.getByRole("link", { name: this.lnkLogut() }).click();
    logger.info("Clicked on Log out");
  }
}
