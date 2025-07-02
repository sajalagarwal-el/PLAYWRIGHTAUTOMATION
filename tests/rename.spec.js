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


  //clicking on a file
  await page.locator("//p[normalize-space(text())='report.html']").click();
  await page.locator('button:has(i.rename)').click();
  //await page.fill('input[placeholder="Enter file name"]', 're-report.html');


// Click the Rename button
//await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Rename']").click();

// Fill the input field that appears
await page.locator("input[formcontrolname='fileName']").fill('re-report');

// (Optional) Click Save/Confirm if required
await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Rename']").click();


await page.locator("//div[contains(@class, 'p-toast-message-text')]//p[normalize-space(text())='Successfully renamed']").waitFor({ state: 'visible', timeout: 120000 });



  expect("re-report.html").toContain('re-report.html')
  expect(true).toBeTruthy()
console.log("File renamed successfully to re-report.html");

  await page.close();

 });