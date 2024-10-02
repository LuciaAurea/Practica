import { Browser, Page, chromium } from 'playwright';

export class BrowserManager {
  private browser: Browser | undefined;
  private page: Page | undefined;

  // Método para iniciar el navegador y abrir una nueva página
  async launchBrowser(headless: boolean = true): Promise<Page> {
    this.browser = await chromium.launch({ headless:false });
    this.page = await this.browser.newPage();
    return this.page;
  }

  // Método para cerrar el navegador
  async closeBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
    }
  }

  // Método para devolver la página actual
  getPage(): Page | undefined {
    return this.page;
  }
}