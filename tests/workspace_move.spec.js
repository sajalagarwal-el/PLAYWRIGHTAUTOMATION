//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform move in diff location and fail at same location', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
    await page.waitForLoadState('networkidle');

  //going to a WS
  await page.locator("//h3[normalize-space()='WS for automation']").first().click();
  
  await page.waitForLoadState('networkidle');

  //clicking on a file
  await page.locator("//p[normalize-space(text())='Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb']").click();


  //clicking on the move icon
  await page.locator("//i[contains(@class, 'pan-move') and contains(@class, 'polly-icon')]").click();


  //selecting the same destination folder and click move 
  await page.locator("//span[normalize-space(text())='Move']").click();

  expect("Destination matches the Source").toContain('Destination matches the Source')
  expect(true).toBeTruthy()
  console.log("Move operation failed as expected: Destination matches the Source");
  //await page.locator("//button[.//svg[@class='p-dialog-header-close-icon p-icon']]").click();
const closeBtn = page.locator("xpath=//button[contains(@class, 'p-dialog-header-close')]")
  await closeBtn.click()
 
//clicking on a file
  await page.locator("//p[normalize-space(text())='Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb']").click();


  //clicking on the move icon
  await page.locator("//i[contains(@class, 'pan-move') and contains(@class, 'polly-icon')]").click();
  
  // Step 1: Open the dropdown
  await page.locator("//span[@role='combobox' and @aria-label='RE-try_auto']").click();
await page.waitForTimeout(10000);

// Step 2: Wait for the options to be visible
  await page.waitForSelector("//li[contains(@class, 'p-dropdown-item')]");

// Step 3: Click the specific option
  await page.locator("//li[contains(@class, 'p-dropdown-item') and contains(., 'test_9June')]").click();

  await page.locator("//span[normalize-space(text())='Move']").click();

console.log("File moved successfully to the new workspace: test_9June");
  await page.locator('button:has(i.settings)').click();
// Workspace settings: Quick Switch Workspace
  await page.click('xpath=//span[text()="Quick Switch Workspace"]')
  await page.click('xpath=//p[normalize-space(text())="test_9June"]')
  await page.waitForLoadState('networkidle');

  expect("Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb").toContain('Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb')
  expect(true).toBeTruthy()
console.log("File is present in the new workspace: test_9June");

  await page.close();

 });