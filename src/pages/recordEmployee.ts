import { Page, Locator } from 'playwright';
import { PageBase } from './pageBase';

export class RecordEmployee extends PageBase {
  private inputfirstName: Locator;
  private inputmiddleName: Locator;
  private inputlastName: Locator;
  private inputEmail: Locator;
  private inputContactNumber: Locator;
  private inputKeywords: Locator;
  private inputNotes: Locator;
  private inputConsent: Locator;
  private inputDateofApplication: Locator;
  private buttonSubmit: Locator;
  private lblMensaje: Locator;

  constructor(page: Page) {
    super(page);
    this.inputfirstName = page.locator('form input[name="firstName"]');
    this.inputmiddleName = page.locator('form input[name="middleName"]');
    this.inputlastName = page.locator('form input[name="lastName"]');
    this.inputEmail = this.getInputByLabel(page, 'Email');
    this.inputContactNumber = this.getInputByLabel(page, 'Contact Number');
    this.inputKeywords = this.getInputByLabel(page, 'Keywords');
    this.inputNotes = this.getInputByLabel(page, 'Notes');
    this.inputConsent = this.getInputByLabel(page, 'Consent to keep data').locator('+ span');
    this.inputDateofApplication = this.getInputByLabel(page, 'Date of Application');
    this.buttonSubmit = page.locator('div.oxd-form-actions button[type="submit"]');
    this.lblMensaje = this.getTagByLabel(page,'Name','p');
  }

  async loadPage(){
    await this.menuPrincipal.loadMaintenanceEmployee();
  }
  
  async save(firstName: string , middleName: string , lastName: string, iemail: string , contactNumber: string , keywords: string , notes: string , dateofApplication: string): Promise<void> {
    await this.inputfirstName.fill(firstName);
    await this.inputmiddleName.fill(middleName);
    await this.inputlastName.fill(lastName);
    await this.inputEmail.fill(iemail);
    await this.inputContactNumber.fill(contactNumber);
    await this.inputNotes.fill(notes);
    await this.inputKeywords.fill(keywords);
    await this.inputDateofApplication.fill(dateofApplication);
    await this.inputConsent.click();
    await this.buttonSubmit.click();
  }

  async getSavedEmployee(message: string) {
    const mensajeObtenido = await this.lblMensaje.innerText();
    if (mensajeObtenido.trim() == message.trim()) {
      console.log("participante guardado");
    }

  }
 
  private getInputByLabel(page: Page, label:string){
    return page.locator('div.oxd-input-group')
                .filter({
                  has: page.locator(`label:has-text("${label}")`)
                })
                .locator('input,textarea')
  }
 
  private getTagByLabel(page: Page, label:string, tag:string){
    return page.locator('div.oxd-input-group')
                .filter({
                  has: page.locator(`label:has-text("${label}")`)
                })
                .locator(tag)
  } 
}