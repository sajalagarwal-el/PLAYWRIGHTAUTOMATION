//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform create audit', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  
await page.locator("//a[@role='tab' and .//span[normalize-space(text())='Data Audits']]").click();
await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Create Audit']").click();


await page.locator('input[placeholder="Provide a name for this data audit"]').fill('Srishti_audit_auto');

// 1. Click the dropdown trigger
//await page.waitForSelector("//div[@id='pn_id_16050']//div[contains(@class, 'p-dropdown-trigger')]", { timeout: 1200000 });
//await page.locator("//div[@id='pn_id_16115']").click();
//await page.locator(  "//div[@role='button' and @aria-haspopup='listbox' and contains(@class,'p-dropdown-trigger') and @aria-expanded='false']").click();

await page.click("//span[@aria-label='Select a Organization']");
//await page.getByText(‘My Organization Name’).click();

//await page.locator("//div[@id='pn_id_16050']//div[contains(@class, 'p-dropdown-trigger')]").click({ force: true });
//console.log("Dropdown clicked");

// 2. Wait for the dropdown list to appear (adjust timeout if slow)
await page.waitForSelector("//li[contains(@class, 'p-dropdown-item') and .='ElucidataInc']", { timeout: 1200000 });

// 3. Click on 'ElucidataInc'
await page.locator("//li[contains(@class, 'p-dropdown-item') and .='ElucidataInc']").click();
console.log("Option selected");

await page.locator("//textarea[@formcontrolname='description']").fill("Description for srishti's audit");

await page.locator("//span[normalize-space(text())='Launch']").click();

await page.locator("//span[normalize-space(text())='Add Datasets']").click();
const filterIcon = page.locator("//i[contains(@class, 'filter') and contains(@class, 'polly-icon')]");
await filterIcon.waitFor({ state: 'visible', timeout: 120000 });
await filterIcon.click();

await page.locator("//div[contains(@class,'button-container')]//span[normalize-space(text())='disease']").click();

await page.locator("//input[@placeholder='Search for disease']").fill('asthma');




await page.locator(
  "//li[.//span[normalize-space(text())='asthma exacerbations']]//div[contains(@class, 'cb__container__box')]"
).click();
await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")


await page.close();

});