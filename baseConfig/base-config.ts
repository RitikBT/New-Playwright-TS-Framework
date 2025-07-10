import { test as baseTest, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { initializeEnv } from "../Utils/env-utils";

type testFixture = {
  loginPage: LoginPage;
  dashpage: DashboardPage;
  validLogin: void;
  // driver: Page;
};

type workerFixture = {
  applyProxy: void;
  loadEnv: void;
};

export const test = baseTest.extend<testFixture, workerFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashpage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  validLogin: [
    async ({ loginPage }, use) => {
      await loginPage.validLogin();
      await use();
    },
    // It's will for all test case either I pass the name or not
    { auto: true },
  ],

  applyProxy: [
    async ({}, use) => {
      //code for proxy
      console.log("Proxy setup is done !!!");
      await use();

      console.log("Proxy is removed !!!");
    },
    { scope: "worker", auto: true },
  ],
  loadEnv: [
    async ({}, use) => {
      initializeEnv();
      await use();
    },
    { scope: "worker", auto: true },
  ],
});

export { expect } from "@playwright/test";
