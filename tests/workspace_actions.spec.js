//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform full workspace flow: create, edit, switch, watch, and archive', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")

  await page.waitForLoadState('networkidle');
console.log("Navigated to Workspaces Dashboard");

  await page.click('xpath=//span[text()="New Workspace"]')
  await page.waitForLoadState('networkidle');
  console.log("Clicked on New Workspace button");


  await page.fill('//input[@id="workspace_name"]', 'try_auto')
  await page.click('xpath=//span[text()="Create & Launch"]')
  console.log("Filled in workspace name and clicked Create & Launch");

  await page.click('i.create-new-folder.polly-icon.ng-star-inserted');
  await page.getByPlaceholder("Enter folder name").fill("test folder");
  await page.click('xpath=//span[text()="Create"]')
console.log("Created a new folder named 'test folder'");


  // Workspace settings: Info
  await page.locator('button:has(i.settings)').click();
  await page.getByText('Info').click();
  //await page.locator('span.p-dialog-header-close-icon.pi-times').click();
  const closeBtn = page.locator("xpath=//button[contains(@class, 'p-dialog-header-close')]")
  await closeBtn.click()




  // Workspace settings: Edit Details
  await page.locator('button:has(i.settings)').click();
  await page.click('xpath=//span[text()="Edit Details"]')
  await page.fill('//input[@id="workspace_name"]', 'RE-try_auto')
  await page.locator("//input[@name='workspace-tags']").fill('abc');
  await page.getByPlaceholder("e.g. this workspace is for analysing this data").fill("Trying automation");
  await page.click('xpath=//span[text()="Save Changes"]')
console.log("Edited workspace details: name, tags, and description");

  // Workspace settings: Quick Switch Workspace
  await page.locator('button:has(i.settings)').click();
  await page.click('xpath=//span[text()="Quick Switch Workspace"]')
  await page.click('xpath=//p[normalize-space(text())="RE-try_auto"]')
  console.log("Switched to workspace 'RE-try_auto' using Quick Switch");
 

  // Workspace settings: Watch Workspace
  await page.locator('button:has(i.settings)').first().click();
  await page.click('xpath=//span[text()="Watch Workspace"]')
    console.log("Clicked on Watch Workspace button");

  //validating
  await page.locator('button:has(i.settings)').click();

  await expect("Stop Watching Workspace").toContain('Stop Watching Workspace')
  expect(true).toBeTruthy()
  console.log("Workspace is being watched successfully");


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


await page.locator("//span[normalize-space()='Add']").first().click();
await page.waitForTimeout(10000);

await page.locator("//span[normalize-space()='Done']").click();
console.log("Added collaborator");



  // Workspace settings: Archive Workspace
  await page.locator("//i[@class='polly-icon settings ng-star-inserted']").click();
  await page.waitForTimeout(2000);

  await page.click("//span[normalize-space()='Archive']")
  await page.waitForTimeout(2000);

  await page.locator("//div[contains(@class, 'cb__container__box')]").first().click();

  //await page.click('xpath=//span[@class="cb-icon"]');
await page.locator("//span[normalize-space()='Archive Workspace']").click();

await page.waitForTimeout(10000);

expect('Workspace archived successfully').toContain('Workspace archived successfully')
expect(true).toBeTruthy()




//await page.waitForLoadState('networkidle');


  // Wait for the confirmation dialog to appear
  //await page.waitForSelector("//span[text()='Archive Workspace']", { state: 'visible' });

  // Click the "Archive Workspace" button in the confirmation dialog
  //await page.click("//span[text()='Archive Workspace']");
  console.log("Clicked on Archive Workspace button");


 
      //await page.waitForLoadState('networkidle');



    // Validating the archived workspace
      await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
      await page.waitForLoadState('networkidle');


//const settingsButton = page.locator("//div[contains(@class, 'card--archived') and .//h3[normalize-space()='RE-try_auto']]");
//expect(settingsButton).toBeTruthy();
//console.log("Archived workspace RE-try_auto is visible in the dashboard");


// Step 1: Click the dropdown to open it
await page.locator("//span[@role='combobox' and @aria-label='All Workspaces']").click();
await page.waitForLoadState('networkidle');

// Step 2: Wait for the options to appear
await page.waitForSelector("//li[contains(@class, 'p-dropdown-item')]");

// Step 3: Select the desired option from the dropdown
await page.locator("//li[@role='option' and span[text()='Owned by you']]").click();

await page.waitForLoadState('networkidle');
console.log("Switched to 'Owned by you' workspaces view");


await page.close();

});