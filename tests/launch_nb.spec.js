//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform move in diff location and fail at same location', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
  
  //going to a WS
  await page.locator("//h3[normalize-space()='test_8junew']").first().click();
  await page.locator("//span[normalize-space(text())='New Analysis']").click();
  await page.locator("//p[normalize-space(text())='Polly Notebook']").click();

//selecting elucidata R&D from teh list
// 1. Click the dropdown caret to open the suggestions
await page.locator("button.p-autocomplete-dropdown").click();


// Step 1: Type the initial text to trigger dropdown suggestions
await page.locator('input[placeholder="Search Client Organization"]').fill('Elucidata');

// Step 2: Wait for the dropdown options to load
await page.waitForSelector("li.p-autocomplete-item", { state: "visible", timeout: 120000 });

// Step 3: Click on the desired option by its label
await page.locator("//li[contains(@class, 'p-autocomplete-item') and .//p[text()='ElucidataInc']]").click();



// Step 1: Open dropdown
await page.locator("//span[@aria-label='Select a Docker']").click();


// Optional: wait for the dropdown options to appear
await page.waitForSelector("li.p-dropdown-item");

// Step 2: Select the desired option
await page.locator("li.p-dropdown-item", { hasText: 'Python 3.10: Notebook environment for Python 3.10 ' }).click();


///////////////
// 1. Click the dropdown trigger to open the options
await page.locator("//span[@aria-label='Select a Machine']").click();

// 2. Wait for the dropdown options to load
await page.waitForSelector("li.p-dropdown-item");

// 3. Click the specific option: "Elucidata R&D"
await page.locator("li.p-dropdown-item", { hasText: 'PollyN medium:2 vCPU, 4GB RAM'}).click();


/////////////////


await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Launch']").click();



 // expect("re-report.html").toContain('re-report.html')
  //expect(true).toBeTruthy()


  await page.close();

 });