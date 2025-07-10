# New-Playwright-TS-Framework
Here’s a well-structured `README.md` file for your Playwright + TypeScript automation framework. It covers project setup, execution, structure, environment configuration, and contribution guidance.

---

```markdown
# 🧪 New Playwright TS Framework

This is a robust end-to-end automation framework built using [Playwright](https://playwright.dev/) with TypeScript. It follows the **Page Object Model (POM)** design pattern and supports multi-environment execution (QA, Dev, UAT, Prod) using environment-specific `.env` files.

---

## 📁 Project Structure

```

.
ps-playwright-test/
├── baseConfig/                  # Playwright fixture and setup utilities
│   └── base-config.ts           # Custom test and worker fixtures
│
├── environment/                 # Environment-specific config files
│   └── .env.qa                  # QA environment variables
│
├── pages/                       # Page Object Models (POM)
│   ├── LoginPage.ts             # Page object for Login Page
│   └── DashboardPage.ts         # Page object for Dashboard Page
│
├── tests/                       # Test specs
│   └── validateOrgHRMLogin.spec.ts  # Sample login validation test
│
├── Utils/                       # Utility helpers
│   └── env-utils.ts             # Loads env vars dynamically
│
├── playwright.config.ts         # Global Playwright test configuration
├── package.json                 # Project metadata and dependencies
└── README.md                    # Project documentation


````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
https://github.com/RitikBT/New-Playwright-TS-Framework.git
cd New-Playwright-TS-Framework
````

### 2. Install Dependencies

```bash
npm install
```

---

## 🌐 Environment Setup

This framework uses the `dotenv` and `cross-env` packages to support multiple environments.

### 🔧 Add or Modify Environment Files

Environment files are stored in the `environment/` directory.

#### Example: `.env.qa`

```env
testprop="this is qa file"
testUrl="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
```

### 🔁 Switch Environments

Update the test script with desired environment:

```json
"scripts": {
  "test": "cross-env TESTENV=qa npx playwright test"
}
```

---

## 🧪 Running Tests

### Run All Tests

```bash
npm test
```

### Run Specific Test File

```bash
npm run test -- tests/validateOrgHRMLogin.spec.ts
```

---

## ⚙️ Features

* ✅ **Playwright v1.53+ with TypeScript**
* ✅ Page Object Model (POM) pattern
* ✅ Custom fixtures with `test.extend`
* ✅ Auto login for all tests (`validLogin`)
* ✅ Proxy and environment setup handled via `worker`-scoped fixtures
* ✅ `.env`-based multi-environment support
* ✅ Supports annotations like JIRA stories, tags, etc.
* ✅ HTML reporter

---

## 🧱 Fixtures

Defined in `baseConfig/base-config.ts`:

| Fixture      | Scope  | Description                             |
| ------------ | ------ | --------------------------------------- |
| `loginPage`  | test   | Returns instance of `LoginPage`         |
| `dashpage`   | test   | Returns instance of `DashboardPage`     |
| `validLogin` | test   | Auto-login before each test             |
| `applyProxy` | worker | Set up and tear down proxy before tests |
| `loadEnv`    | worker | Loads environment from `.env` file      |

---

## 📄 Sample Test

```ts
test("Validate Login Successfully", async ({ dashpage }) => {
  await dashpage.validateNavigatedToDashboard();
});
```

---

## 🧪 Test Report

After test execution, an HTML report will be generated:

```bash
npx playwright show-report
```

---

## 👥 Contributing

1. Fork the repo
2. Create your branch (`git checkout -b feature-xyz`)
3. Commit changes (`git commit -am 'Add feature'`)
4. Push to branch (`git push origin feature-xyz`)
5. Create a Pull Request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Questions?

Feel free to raise an issue or reach out via GitHub!

```

---

### 📌 Tips for Customization
- Replace `your-org` in the Git clone link with your actual GitHub repo.
- If you add more environments (`.env.dev`, `.env.uat`), mention them explicitly in the README.
- Add more badges or CI/CD instructions as your project evolves.

Would you like me to include CI setup instructions (like GitHub Actions) as well?
```
