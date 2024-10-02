import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { BrowserManager } from '../pages/browserManager';
import { LoginPage } from '../pages/loginPage';
import { RecordEmployee } from '../pages/recordEmployee';

let browserManager: BrowserManager = new BrowserManager();
let loginPage: LoginPage;
let recordEmployee: RecordEmployee;

Before(async () => {
    var page = await browserManager.launchBrowser();
    loginPage = new LoginPage(page);
    recordEmployee = new RecordEmployee(page);
});

After(async () => {
  await browserManager.closeBrowser(); 
});

Given('I open the login page', async () => {
  await loginPage.goto(); 
});

When('I enter username {string} and password {string}', async (username: string, password: string) => {
  await loginPage.fillUsername(username);
  await loginPage.fillPassword(password);
});

When('I click the login button', async () => {
  await loginPage.clickLoginButton();
});

When('I should see the dashboard', async () => {
  await loginPage.waitForDashboard();
});

Then('I click the Add button',  { timeout: 150000 } , async () => {
  await recordEmployee.loadPage();
});

Then('I record employee data {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}', { timeout: 300000 }, 
  async (firstName: string , middleName: string , lastName: string , email: string , contactNumber: string , keywords: string , addNotes: string , dateApplication: string) => {
    await recordEmployee.save(firstName, middleName, lastName, email, contactNumber, keywords, addNotes, dateApplication);  
});

Then('I check the result with {string}', async (message: string) => {
  await recordEmployee.getSavedEmployee(message);
});