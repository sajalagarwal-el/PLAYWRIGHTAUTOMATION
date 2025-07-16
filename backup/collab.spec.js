//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform full workspace flow: create, edit, switch, watch, and archive', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")

  await page.waitForLoadState('networkidle');
  //adding collaborator on the very first WS card

  await page.locator("//h3[normalize-space()='test_8junew']").first().click();

  await page.locator('.add-user.polly-icon').first().click();

//await page.getByText('Share', { exact: true }).click();
await page.getByPlaceholder('Input Email Addresses').fill('sajal.agarwal@elucidata.io');

// Step 1: Click the dropdown trigger
await page.locator("xpath=//span[@aria-label='viewer']").click();

await page.waitForLoadState('networkidle');

// Step 2: Wait for dropdown panel to appear (PrimeNG uses this class)
//await page.locator('.p-dropdown-panel').waitFor({ state: 'visible', timeout: 5000 });

// Step 3: Click the "Admin" option
await page.locator('.p-dropdown-item', { hasText: 'Admin' }).click();


await page.locator("//span[text()='Add']").click();

await page.locator("//span[text()='Done']").click();
await page.close();

});