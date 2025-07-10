import { Locator, Page, expect } from "@playwright/test";

interface Locators {
  dashboard: Locator;
}

export class DashboardPage {
  constructor(readonly page: Page) {}

  public locators() {
    return {
      dashboard: this.page.getByRole("heading", { name: "Dashboard" }),
    };
  }

  public async validateNavigatedToDashboard() {
    await expect(this.locators().dashboard).toBeVisible();
  }
}
