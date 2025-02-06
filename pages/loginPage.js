// pages/loginPage.js
const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = 'input[name="username"]';
    this.passwordField = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
    this.errorMessage = ".oxd-alert-content-text";
    this.errorFieldMessage = ".oxd-input-field-error-message";
  }

  async navigate() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
  async getErrorFieldMessage() {
    return await this.page.textContent(this.errorFieldMessage);
  }
  async isLoginSuccessful() {
    await this.page.waitForURL("**/dashboard/index"); // Ensure the URL changes upon successful login
  }
}

module.exports = { LoginPage };
