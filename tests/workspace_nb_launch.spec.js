//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';
import { timeout } from '../playwright.config';

console.log('Running NB Launch test');
test('NB Launch', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
  console.log('Navigated to Workspaces dashboard');
  //going to a WS
  await page.locator("//h3[normalize-space()='test_8junew']").first().click();
  
  
  /*
  await page.locator("//span[normalize-space(text())='New Analysis']").click();
  await page.waitForLoadState('networkidle');
  await page.locator("//p[normalize-space(text())='Polly Notebook']").click();
  await page.waitForLoadState('networkidle');

//selecting elucidata R&D from teh list
// 1. Click the dropdown caret to open the suggestions

await page.locator("span[class='polly-icon caret-down ng-star-inserted']").click();

// Step 1: Type the initial text to trigger dropdown suggestions
await page.locator('input[placeholder="Search Client Organization"]').fill('Elucidata');
console.log('Filled "Elucidata" in the search input');
// Step 2: Wait for the dropdown options to load
await page.waitForSelector("li.p-autocomplete-item", { state: "visible", timeout: 120000 });
console.log('Dropdown options loaded successfully');
// Step 3: Click on the desired option by its label
await page.locator("//p[normalize-space()='ElucidataInc']").click();
console.log('Selected "ElucidataInc" from the dropdown');
//await page.waitForTimeout(10000);
await page.locator("//input[@placeholder='Enter a Notebook name']").click();


// Step 1: Open dropdown
// Wait for the Docker dropdown to be visible before clicking
//await page.waitForSelector("//span[@aria-label='Select a Docker']", { state: 'visible', timeout: 120000 });
await page.locator("//span[@aria-label='Select a Docker']").click();


// Optional: wait for the dropdown options to appear
await page.waitForSelector("li.p-dropdown-item");
await page.waitForTimeout(2000);
console.log('Selected Docker from dropdown');
// Step 2: Select the desired option
await page.locator("li.p-dropdown-item", { hasText: 'Python 3.10: Notebook environment for Python 3.10 ' }).click();
console.log('Selected Notebook environment from the dropdown');


// 1. Click the dropdown trigger to open the options
await page.locator("//span[@aria-label='Select a Machine']").click();

// 2. Wait for the dropdown options to load
await page.waitForSelector("li.p-dropdown-item");

// 3. Click the specific option: "Elucidata R&D"
await page.locator("li.p-dropdown-item", { hasText: 'PollyN medium:2 vCPU, 4GB RAM'}).click();
console.log('Selected machine from the dropdown');


await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Launch']").click();
console.log('Clicked on Launch button');


const newTab = await page.context().waitForEvent('page');
await newTab.waitForLoadState();
console.log('New tab opened for Polly Notebook', newTab.url());

await expect(newTab.locator("text=Your Notebook is launching")).toBeVisible({ timeout: 20000 });
console.log('Notebook is launching, waiting for it to be ready');

  await page.close();
*/


await page.locator("//span[normalize-space(text())='New Analysis']").click();
    await page.locator("//p[normalize-space(text())='Polly Notebook']").click();

  //selecting elucidata R&D from teh list
  // 1. Click the dropdown caret to open the suggestions
  await page.locator("button.p-autocomplete-dropdown").click();


  // Step 1: Type the initial text to trigger dropdown suggestions
  await page.locator('input[placeholder="Search Client Organization"]').fill('Elucidata');
  console.log('Filled "Elucidata" in the search input');
  // Step 2: Wait for the dropdown options to load
  await page.waitForSelector("li.p-autocomplete-item", { state: "visible", timeout: 120000 });
  console.log('Dropdown options loaded successfully');
  // Step 3: Click on the desired option by its label
  await page.locator("//li[contains(@class, 'p-autocomplete-item') and .//p[text()='ElucidataInc']]").click();
  console.log('Selected "ElucidataInc" from the dropdown');


  // Step 1: Open dropdown
  await page.locator("//span[@aria-label='Select a Docker']").click();


  // Optional: wait for the dropdown options to appear
  await page.waitForSelector("li.p-dropdown-item").waitForLoadState;
  console.log('Selected Docker from dropdown');
  // Step 2: Select the desired option
  await page.locator("li.p-dropdown-item", { hasText: 'Python 3.10: Notebook environment for Python 3.10 ' }).click();
  console.log('Selected Notebook environment from the dropdown');

  ///////////////
  // 1. Click the dropdown trigger to open the options
  await page.locator("//span[@aria-label='Select a Machine']").click();

  // 2. Wait for the dropdown options to load
  await page.waitForSelector("li.p-dropdown-item");

  // 3. Click the specific option: "Elucidata R&D"
  await page.locator("li.p-dropdown-item", { hasText: 'PollyN medium:2 vCPU, 4GB RAM'}).click();
  console.log('Selected machine from the dropdown');
  await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Launch']").click();
  console.log('Clicked on Launch button');


  const newTab = await page.context().waitForEvent('page');
  await newTab.waitForLoadState();
  console.log('New tab opened for Polly Notebook', newTab.url());

  await newTab.locator("//p[normalize-space()='Your Notebook is launching']").waitFor({ state: 'visible', timeout: 10000 });
  console.log('Notebook is launching, waiting for it to be ready...');






 });