import { Page, expect } from "@playwright/test";

export default class HomePage {
  private readonly accountLocator = "(//a[@class='account'])[1]";
  constructor(private page: Page) {}

  async accountToBeVisible() {
    await expect(this.page.locator(this.accountLocator)).toHaveText(
      /playwrighttest@qa.com/
    );
  }
}
