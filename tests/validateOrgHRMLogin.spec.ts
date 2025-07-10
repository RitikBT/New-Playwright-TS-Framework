import { test } from "../baseConfig/base-config";

test(
  "Validate Login Successfully",
  { tag: ["@sainty"] },

  async ({ page, dashpage, validLogin }) => {
    console.log("Test case Started !!!");
    await dashpage.validateNavigatedToDashboard();
    console.log("Test case Completed !!!");
  }
);

test(
  "Validate navigated to dashboard page",
  { annotation: { type: "JIRA_STORY", description: "WCUST-9878" } },
  async ({ page, dashpage, validLogin }) => {
    console.log("Test case Started !!!");
    await dashpage.validateNavigatedToDashboard();
    console.log("Test case Completed !!!");
  }
);
