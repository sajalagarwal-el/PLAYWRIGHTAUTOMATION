//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform create audit', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  
await page.locator("//a[@role='tab' and .//span[normalize-space(text())='Data Audits']]").click();
console.log("Switched to Data Audits tab", page.url());
await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Create Audit']").click();
console.log("Clicked on Create Audit button");

await page.locator('input[placeholder="Provide a name for this data audit"]').fill('Srishti_audit_auto');


await page.click("//span[@aria-label='Select a Organization']");


// 2. Wait for the dropdown list to appear (adjust timeout if slow)
await page.waitForSelector("//li[contains(@class, 'p-dropdown-item') and .='ElucidataInc']", { timeout: 1200000 });

// 3. Click on 'ElucidataInc'
await page.locator("//li[contains(@class, 'p-dropdown-item') and .='ElucidataInc']").click();
console.log("Organisation selected");

await page.locator("//textarea[@formcontrolname='description']").fill("Description for srishti's audit");
console.log("Filled description for audit");
await page.locator("//span[normalize-space(text())='Launch']").click();
console.log("Clicked on Create button");
console.log("Waiting for the Data Audit page to load...");
await page.waitForLoadState('networkidle');
console.log("Data Audit page loaded successfully");
await page.locator("//span[normalize-space(text())='Add Datasets']").click();
const filterIcon = page.locator("//i[contains(@class, 'filter') and contains(@class, 'polly-icon')]");
await filterIcon.waitFor({ state: 'visible', timeout: 120000 });
await filterIcon.click();
console.log("Navigated to Add datasets screen");
await page.locator("//div[contains(@class,'button-container')]//span[normalize-space(text())='disease']").click();
console.log("Clicked on disease button to filter datasets");


// 1. Type "asthma" into the search input
await page.locator("//input[@placeholder='Search for disease']").fill('asthma');
console.log("Filled 'asthma' in the search input");

// Wait for the checkboxes container to be visible
await page.waitForSelector('div.cb__container', { state: 'visible', timeout: 10000 });



///first value
const checkbox1 = page.locator(
  "//div[contains(@class, 'p-tabview-panels')]//input[@type='checkbox' and @value='nonatopic asthma']/ancestor::div[contains(@class, 'cb__container')]/div[contains(@class, 'cb__container__box')]"
);
// Scroll into view if needed
await checkbox1.scrollIntoViewIfNeeded();

// Wait for it to be visible and clickable
await checkbox1.waitFor({ state: 'visible' });

// Click the checkbox
await checkbox1.click();

//second value  
const checkbox2 = page.locator(
  "//div[contains(@class, 'p-tabview-panels')]//input[@type='checkbox' and @value='atopic asthmatic disease']/ancestor::div[contains(@class, 'cb__container')]/div[contains(@class, 'cb__container__box')]"
);

// Scroll into view if needed
await checkbox2.scrollIntoViewIfNeeded();

// Wait for it to be visible and clickable
await checkbox2.waitFor({ state: 'visible' });

// Click the checkbox
await checkbox2.click();



//third vaue
const checkbox3 = page.locator(
  "//div[contains(@class, 'p-tabview-panels')]//input[@type='checkbox' and @value='obese asthma']/ancestor::div[contains(@class, 'cb__container')]/div[contains(@class, 'cb__container__box')]"
);

// Scroll into view if needed
await checkbox3.scrollIntoViewIfNeeded();

// Wait for it to be visible and clickable
await checkbox3.waitFor({ state: 'visible' });

// Click the checkbox
await checkbox3.click();


//fourth value
const checkbox4 = page.locator(
  "//div[contains(@class, 'p-tabview-panels')]//input[@type='checkbox' and @value='atopic asthma']/ancestor::div[contains(@class, 'cb__container')]/div[contains(@class, 'cb__container__box')]"
);

// Scroll into view if needed
await checkbox4.scrollIntoViewIfNeeded();

// Wait for it to be visible and clickable
await checkbox4.waitFor({ state: 'visible' });

// Click the checkbox
await checkbox4.click();



await page.locator("//span[normalize-space()='Apply Filters']").click();
await page.locator("//div[contains(@class, 'cb__container__box')]").first().click();
await page.locator("//span[text()='Add to Data Audit']").click();


//manually adding fields
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
await page.locator("//tbody/tr[1]/td[2]/app-audit-cell-editor[1]/input[1]").fill("asthma");

await page.locator("//tbody/tr[2]/td[2]/app-audit-cell-editor[1]/input[1]").fill("asthma");
await page.locator("//tbody/tr[3]/td[2]/app-audit-cell-editor[1]/input[1]").fill("asthma");

await page.locator("//span[text()='Save Column']").click();

await page.locator("//span[text()='Update Values']").click();

//add auto-curated fields
await page.locator("//span[normalize-space(text())='Options']").click();
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
const statusMessage = page.locator("text=Custom Fields are being added");
expect(statusMessage).toBeTruthy();


await page.close();

});