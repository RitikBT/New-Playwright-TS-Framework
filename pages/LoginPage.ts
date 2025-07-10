import { Locator, Page } from "@playwright/test";
import { promises } from "dns";

interface Locators {
  username: Locator;
  password: Locator;
  loginBtn: Locator;
  // parameterised locator for multiple button
  button: (buttonText: string) => Locator;
}

export class LoginPage {
  constructor(readonly page: Page) {}

  public locators() {
    return {
      username: this.page.getByPlaceholder("Username"),
      password: this.page.getByPlaceholder("Password"),
      loginBtn: this.page.getByRole("button", { name: "Login" }),

      // parameterised locator for multiple button
      button: (buttonText: string) => {
        return this.page.getByRole("button", { name: `${buttonText}` });
      },
    };
  }

  private async openUrl(): Promise<void> {
    await this.page.goto(process.env.testUrl as string, {
      waitUntil: "domcontentloaded",
    });
  }

  public async validLogin(): Promise<void> {
    await this.openUrl();
    await this.locators().username.fill("Admin");
    await this.locators().password.fill("admin123");
    await this.locators().loginBtn.click();
  }
}
