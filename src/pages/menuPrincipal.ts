import { Page } from "playwright/test";

export class MenuPrincipal {
  private page: Page;
  private menuItemSelector = 'nav ul li a[href*="recruitment"]';
  private buttonAdd ='div.orangehrm-header-container button';
  
  constructor(page: Page) {
      this.page = page; // Pasar la instancia de Page al constructor
  }
    
  async loadMaintenanceEmployee() {
    await this.page.waitForSelector(this.menuItemSelector); // Esperar a que el menú sea visible
    await this.page.click(this.menuItemSelector); // Hacer clic en el menú
    await this.page.click(this.buttonAdd); // Hacer clic en el botón Add
  }
}