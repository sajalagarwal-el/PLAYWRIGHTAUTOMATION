//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform create audit', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  
await page.locator("//a[@role='tab' and .//span[normalize-space(text())='Data Audits']]").click();
await page.goto("https://polly.elucidata.io/manage/audits/16/atlas?name=Srishti_audit_auto");

await page.locator("//span[normalize-space(text())='Options']").click();
await page.locator("//span[text()='Add Fields Manually']").click();
await page.locator("//input[@placeholder='Enter the Column Name']").fill("curated_dise");

await page.locator("input[formcontrolname='description']").fill("description");


// Click the dropdown to open options
await page.locator("span[role='combobox'][aria-label*='Select whether you field']").click();

// Wait for the dropdown options to appear
await page.waitForSelector(".p-dropdown-items");

// Click the option with visible text "Text"
await page.locator("//li[contains(@class, 'p-dropdown-item') and normalize-space()='Text']").click();

await page.locator("//span[normalize-space(text())='Add Column']").click();

await page.locator("input.p-inputtext[placeholder='Internal Label']").first().fill("asthma");
await page.locator("input.p-inputtext[placeholder='Internal Label']").click().fill("asthma");

const rows = await page.locator('table tr').all();

for (let i = 0; i < rows.length; i++) {
  const input = rows[i].locator("input[placeholder='Internal Label']");
  if (await input.count() > 0) {
    await input.first().scrollIntoViewIfNeeded();
    await input.first().click({ force: true });
    await input.first().fill('asthma');
  }
}
await page.locator("//input[@class='p-inputtext p-component p-element w-100 qubit p-inputtext-sm ng-valid ng-touched ng-star-inserted ng-dirty']").fill('asthma');


await page.locator("//input[@class='p-inputtext p-component p-element w-100 qubit p-inputtext-sm ng-pristine ng-valid ng-star-inserted ng-touched']").fill('asthma');




await page.locator("//span[text()='Save Column']").click();


expect(page.locator('p:has-text("Curated_disease")')).toBeTruthy();














await page.locator("//span[normalize-space(text())='Add Auto-Curated Fields']").click();
await page.locator("//input[@placeholder='Name the field that you want to add to all datasets']").fill('curated_dis');
await page.locator("textarea[formcontrolname='description']").fill('description');


// Click on the dropdown to open it
await page.locator("span[aria-label='Select whether you field is a Number, Text, Array or a Boolean']").click();

// Wait for dropdown options to be visible (adjust timeout if needed)
await page.waitForTimeout(1000); // optional short wait

// Click the option 'Text' from the dropdown
await page.locator("li >> text=Text").click();

await page.locator("//span[normalize-space()='Submit & Run']").click();
const statusMessage = await page.locator("text=Custom Fields are being added");
await expect(statusMessage).toBeTruthy();





await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")

await page.close();

});