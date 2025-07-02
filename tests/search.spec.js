//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform search in a ws', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard");
      await page.waitForLoadState('networkidle');

  
  //going to a WS
  await page.locator("//h3[normalize-space()='test_8junew']").first().click();
      await page.waitForLoadState('networkidle');



  // Fill the search input
  await page.locator('input[placeholder="Search for workspace content"]').fill('report');


// Wait a moment for search results to load (if needed)
await page.waitForTimeout(2000); // Optional delay — adjust if search is async

// Locate elements with class 'file-title__name' that contain 'report'
const contentNameLocator = page.locator('.file-title__name', {
  hasText: 'report'
});

// Count matching elements
const count = await contentNameLocator.count();
console.log(`Found ${count} file(s) containing 'report'`);

// Print the text of each matched file
for (let i = 0; i < count; i++) {
  const text = await contentNameLocator.nth(i).innerText();
  console.log(`→ ${text}`);
}

await contentNameLocator.first().click();
await page.locator('i.delete.polly-icon').click();
await page.waitForTimeout(10000);


await page.locator("(polly-checkbox[class='ng-untouched ng-valid ng-dirty'] div[class='cb__container__box']").first().click();

cconsole.log("Checkbox clicked successfully");
await page.locator("//span[normalize-space()='Delete Files']").click();
Console.log("File deleted successfully");


  await page.close();
});




