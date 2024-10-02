import { Page } from "playwright/test";

export class LoginPage {
  private page: Page;
  private usernameInputSelector = 'input[name="username"]';
  private passwordInputSelector = 'input[name="password"]';
  private loginButtonSelector = 'button[type="submit"]';
  private labelSelector ='header.oxd-topbar div.oxd-topbar-header-title span.oxd-topbar-header-breadcrumb'

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 20000 });
  }

  async fillUsername(username: string) {
    await this.page.waitForSelector(this.usernameInputSelector, { state: 'visible' });
    await this.page.fill(this.usernameInputSelector, username);
  }

  async fillPassword(password: string) {
    await this.page.fill(this.passwordInputSelector, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButtonSelector);
  }
  
  async waitForDashboard() {
    await this.page.waitForSelector(this.labelSelector); // Selector que indica que el dashboard está cargado
  }
}
