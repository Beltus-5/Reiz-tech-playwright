// tests/login.test.js
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const credentials = require("../data/credentials.json");
let errorMessage = ''

test.describe("Login Tests - OrangeHRM", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });
  //  This is a test case to Successfully login with valid credentials
  test("TC001: Login with valid credentials", async ({page}) => {
    await loginPage.login(credentials.valid.username,credentials.valid.password
    );
    await expect(page.url()).toContain('/dashboard')

  });
  //  This is a test case to login with invalid password
  test("TC002: Login with invalid credential", async ({page}) => {
    await loginPage.login(credentials.invalid.username,credentials.invalid.password
    );
    errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Invalid credentials");
    await expect(page.url()).toContain('/login')


  });
  //  This is a test case to login with empty credentials
  test("TC_003: Login with empty credentials", async ({page}) => {
    await loginPage.login(credentials.empty.username, credentials.empty.password
    );
    errorMessage = await loginPage.getErrorFieldMessage();
    expect(errorMessage).toContain("Required");
    await expect(page.url()).toContain('/login')


  });
  //  This is a test case to login with empty password
  test("TC_004: Login with only username (empty password)", async ({page}) => {
    await loginPage.login(credentials.valid.username, "");
    errorMessage = await loginPage.getErrorFieldMessage();
    expect(errorMessage).toContain("Required");
    await expect(page.url()).toContain('/login')

  });
  //  This is a test case to login with empty username
  test("TC_005: Login with only password (empty username)", async ({page}) => {
    await loginPage.login("", credentials.valid.password);
    errorMessage = await loginPage.getErrorFieldMessage();
    expect(errorMessage).toContain("Required");
    await expect(page.url()).toContain('/login')

  });


});
