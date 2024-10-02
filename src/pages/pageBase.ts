import { Page } from 'playwright';
import { MenuPrincipal } from './menuPrincipal';

export class PageBase {
  protected page: Page; 
  protected menuPrincipal: MenuPrincipal; 

  constructor(page: Page) {
    this.page = page;
    this.menuPrincipal = new MenuPrincipal(page);
  }
  
}