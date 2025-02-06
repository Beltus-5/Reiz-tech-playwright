// tests/login.test.js
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const credentials = require("../data/credentials.json");

test.describe("Login Tests - OrangeHRM", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });
    //  This is a test case to Successfully login with valid credentials
  test("TC_001: Successful login with valid credentials", async () => {
    await loginPage.login(
      credentials.valid.username,
      credentials.valid.password
    );
    await loginPage.isLoginSuccessful();
    expect(loginPage.page.url()).toContain("/dashboard/index");
  });
     //  This is a test case to login with invalid password
  test("TC_002: Login with invalid password", async () => {
    await loginPage.login(
      credentials.invalid.username,
      credentials.invalid.password
    );
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Invalid credentials");
  });
   //  This is a test case to login with empty credentials
  test("TC_003: Login with empty credentials", async () => {
    await loginPage.login(
      credentials.empty.username,
      credentials.empty.password
    );
    const errorMessage = await loginPage.getErrorFieldMessage();
    expect(errorMessage).toContain("Required");
  });
   //  This is a test case to login with empty password
  test("TC_004: Login with only username (empty password)", async () => {
    await loginPage.login(credentials.valid.username, "");
    const errorMessage = await loginPage.getErrorFieldMessage();
    expect(errorMessage).toContain("Required");
  });
   //  This is a test case to login with empty username
  test("TC_005: Login with only password (empty username)", async () => {
    await loginPage.login("", credentials.valid.password);
    const errorMessage = await loginPage.getErrorFieldMessage();
    expect(errorMessage).toContain("Required");
  });
});
