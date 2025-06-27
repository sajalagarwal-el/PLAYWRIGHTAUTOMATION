
//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform create audit', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  
await page.locator("//a[@role='tab' and .//span[normalize-space(text())='Data Audits']]").click();
  await page.goto("https://polly.elucidata.io/manage/audits/21/atlas?name=Srishti_audit_auto");


await page.locator("//span[normalize-space(text())='Add Datasets']").click();
const filterIcon = page.locator("//i[contains(@class, 'filter') and contains(@class, 'polly-icon')]");
await filterIcon.waitFor({ state: 'visible', timeout: 120000 });
await filterIcon.click();

await page.locator("//div[contains(@class,'button-container')]//span[normalize-space(text())='disease']").click();



// 1. Type "asthma" into the search input
await page.locator("//input[@placeholder='Search for disease']").fill('asthma');


// Wait for the checkboxes container to be visible
await page.waitForSelector('div.cb__container', { state: 'visible', timeout: 10000 });



///first value
const checkbox1 = page.locator("(//input[@placeholder='Internal Label'])[2]");

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


//furth value
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
const statusMessage = await page.locator("text=Custom Fields are being added");
await expect(statusMessage).toBeTruthy();





await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")


await page.close();

});