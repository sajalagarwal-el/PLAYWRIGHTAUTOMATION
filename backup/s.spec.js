//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform move in diff location and fail at same location', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard");
      await page.waitForLoadState('networkidle');

  
  //going to a WS
  await page.locator("//h3[normalize-space()='test_8junew']").first().click();
      await page.waitForLoadState('networkidle');


  // Go to a workspace
  await page.locator("//h3[normalize-space()='test_8junew']").first().click();
  await page.waitForLoadState('networkidle');

  // Fill the search input
  await page.locator('input[placeholder="Search for workspace content"]').fill('report');

  // Wait for the search results to appear
  const results = page.locator('.search-result'); // Adjust selector if needed
  await results.first().waitFor({ state: 'visible' });

  if (count > 0) {
  console.log(`Found ${count} '.file-title__name' element(s) with text 'report'`);
  for (let i = 0; i < count; i++) {
    const text = await contentNameLocator.nth(i).innerText();
    console.log(`→ ${text}`);
  }
} else {
  console.log("No '.file-title__name' element found with text 'report'");
}


  await page.close();
});




