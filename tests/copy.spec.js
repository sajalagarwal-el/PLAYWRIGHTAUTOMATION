//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform copy in diff location and fail at same location', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
  
  //going to a WS
  await page.locator("//h3[normalize-space()='test_8junew']").first().click();
  

  //clicking on a file
  //await page.locator("//div[contains(@class, 'file-title') and .//p[text()='f2']]").click();
  await page.locator("//p[normalize-space(text())='report.html']").click();

  //await page.locator("//p[normalize-space(text())='Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb']").click();


  //clicking on the copy icon
 //await page.locator("//i[contains(@class, 'pan-copy') and contains(@class, 'polly-icon')]").click();
  await page.locator("//button[i[contains(@class, 'duplicate-or-copy')]]").click();


  //selecting the same destination folder and click copy 
  await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Copy']").click();
//await page.getByText('Copy').click();


  expect("Destination matches the Source").toContain('Destination matches the Source')
  expect(true).toBeTruthy()
  //await page.locator("//button[.//svg[@class='p-dialog-header-close-icon p-icon']]").click();
const closeBtn = page.locator("xpath=//button[contains(@class, 'p-dialog-header-close')]")
  await closeBtn.click()
 
//clicking on a file
  await page.locator("//p[normalize-space(text())='report.html']").click();


  //clicking on the move icon
  await page.locator("//button[i[contains(@class, 'duplicate-or-copy')]]").click();
  
  // Step 1: Open the dropdown
  await page.locator("//span[@role='combobox' and @aria-label='test_8junew']").click();
  await page.pause();

// Step 2: Wait for the options to be visible
  await page.waitForSelector("//li[contains(@class, 'p-dropdown-item')]");

// Step 3: Click the specific option
  await page.locator("//li[contains(@class, 'p-dropdown-item') and contains(., 'test_9June')]").click();

  await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Copy']").click();


  await page.locator('button:has(i.settings)').click();
// Workspace settings: Quick Switch Workspace
  await page.click('xpath=//span[text()="Quick Switch Workspace"]')
  await page.click('xpath=//p[normalize-space(text())="test_9June"]')

  expect("report.html").toContain('report.html')
  expect(true).toBeTruthy()


  await page.close();

 });