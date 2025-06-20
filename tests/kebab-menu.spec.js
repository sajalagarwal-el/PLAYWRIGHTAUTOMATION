//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform full workspace flow: create, edit, switch, watch, and archive', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
  await page.click('xpath=//span[text()="New Workspace"]')

  await page.fill('//input[@id="workspace_name"]', 'try_auto')
  await page.click('xpath=//span[text()="Create & Launch"]')

  await page.click('i.create-new-folder.polly-icon.ng-star-inserted');
  await page.getByPlaceholder("Enter folder name").fill("test folder");
  await page.click('xpath=//span[text()="Create"]')



  // Workspace settings: Info
  await page.locator('button:has(i.settings)').click();
  await page.getByText('Info').click();
  //await page.locator('span.p-dialog-header-close-icon.pi-times').click();
  const closeBtn = page.locator("xpath=//button[contains(@class, 'p-dialog-header-close')]")
  await closeBtn.click()




  // Workspace settings: Edit Details
  await page.locator('button:has(i.settings)').click();
  await page.click('xpath=//span[text()="Edit Details"]')
  await page.fill('//input[@id="workspace_name"]', 'RE-try_auto')
  await page.locator("//input[@name='workspace-tags']").fill('abc');
  await page.getByPlaceholder("e.g. this workspace is for analysing this data").fill("Trying automation");
  await page.click('xpath=//span[text()="Save Changes"]')


  // Workspace settings: Quick Switch Workspace
  await page.locator('button:has(i.settings)').click();
  await page.click('xpath=//span[text()="Quick Switch Workspace"]')
  await page.click('xpath=//p[normalize-space(text())="RE-try_auto"]')
 

  // Workspace settings: Watch Workspace
  await page.locator('button:has(i.settings)').click();
  await page.click('xpath=//span[text()="Watch Workspace"]')


  // Workspace settings: Archive Workspace
  await page.locator('button:has(i.settings)').click();
  await page.click('xpath=//span[text()="Archive"]')
  await page.click('xpath=//span[@class="cb-icon"]');
await page.click('//span[normalize-space(text())="Archive Workspace"]');

await expect(page).toHaveURL('https://polly.elucidata.io/manage/workspaces/dashboard');


await page.locator('button:has(i.settings)').click();

  await page.close();

});