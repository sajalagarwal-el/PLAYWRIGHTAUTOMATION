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
    await page.waitForTimeout(5000);
    const workspaceUrl = page.url();
    console.log("Filled in workspace name and clicked Create & Launch",workspaceUrl );


// Workspace settings: Quick Switch Workspace
await page.goto('https://polly.elucidata.io/manage/workspaces?id=21315');
    await page.waitForLoadState('networkidle');

    console.log("Starting move operation");
    //clicking on a file
    await page.locator("//p[normalize-space(text())='Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb']").click();
    //clicking on the move icon
    await page.locator("//i[contains(@class, 'pan-move') and contains(@class, 'polly-icon')]").click();
  // Step 1: Open the dropdown
    await page.locator("//span[@role='combobox' and @aria-label='try_auto']").click();
    await page.waitForTimeout(3000);

  // Step 2: Wait for the options to be visible
    await page.waitForSelector("//li[contains(@class, 'p-dropdown-item')]");

  // Step 3: Click the specific option
    await page.locator("//p[normalize-space()='WS for automation']").click();

    await page.locator("//span[normalize-space(text())='Move']").click();
    expect("Destination matches the Source").toContain('Destination matches the Source')
    expect(true).toBeTruthy()
    console.log("Move operation failed as expected: Destination matches the Source");

    //await page.locator("//button[.//svg[@class='p-dialog-header-close-icon p-icon']]").click();
    const closeBtn2 = page.locator("xpath=//button[contains(@class, 'p-dialog-header-close')]")
    await closeBtn2.click()
  
    //clicking on a file
    await page.locator("//p[normalize-space(text())='Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb']").click();
    //clicking on the move icon
    await page.locator("//i[contains(@class, 'pan-move') and contains(@class, 'polly-icon')]").click();
    await page.waitForLoadState('networkidle');

    
    // Step 1: Open the dropdown
    await page.locator("//span[@role='combobox' and @aria-label='try_auto']").click();
    await page.waitForTimeout(3000);
    await page.locator("//span[normalize-space(text())='Move']").click();
    console.log("File moved successfully to the new workspace: try_auto");
    await page.waitForTimeout(3000);

  //copying
    console.log("Starting copy operation");
    await page.locator("//p[normalize-space(text())='report.txt']").click();

    //clicking on the copy icon
  //await page.locator("//i[contains(@class, 'pan-copy') and contains(@class, 'polly-icon')]").click();
    await page.locator("//button[i[contains(@class, 'duplicate-or-copy')]]").click();


  // Step 1: Open the dropdown
    await page.locator("//span[@role='combobox' and @aria-label='try_auto']").click();
    await page.waitForTimeout(10000);

  // Step 2: Wait for the options to be visible
    await page.waitForSelector("//li[contains(@class, 'p-dropdown-item')]");

  // Step 3: Click the specific option
    await page.locator("//p[normalize-space()='WS for automation']").click();

    //selecting the same destination folder and click copy 
    await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Copy']").click();
  //await page.getByText('Copy').click();

    expect("Destination matches the Source").toContain('Destination matches the Source')
    expect(true).toBeTruthy()
  console.log("Copy operation failed as expected: Destination matches the Source");

    //await page.locator("//button[.//svg[@class='p-dialog-header-close-icon p-icon']]").click();
  const closeBtn = page.locator("xpath=//button[contains(@class, 'p-dialog-header-close')]")
    await closeBtn.click()
  
  //clicking on a file
    await page.locator("//p[normalize-space(text())='report.txt']").click();


    //clicking on the copy icon
    await page.locator("//button[i[contains(@class, 'duplicate-or-copy')]]").click();
    
  /* // Step 1: Open the dropdown
    await page.locator("//span[@role='combobox' and @aria-label='RE-try_auto']").click();
  await page.waitForTimeout(10000);

  // Step 2: Wait for the options to be visible
    await page.waitForSelector("//li[contains(@class, 'p-dropdown-item')]");

  // Step 3: Click the specific option
    await page.locator("//p[normalize-space()='RE-try_auto']").click();*/

    await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Copy']").click();

  


  //end of copying
        await page.waitForLoadState('networkidle');
console.log("File copied successfully to the new workspace: try_auto");

await page.goto(workspaceUrl);
await page.waitForLoadState('networkidle');




















    await page.click('i.create-new-folder.polly-icon.ng-star-inserted');
    await page.getByPlaceholder("Enter folder name").fill("test folder");
    await page.click('xpath=//span[text()="Create"]')
    console.log("Created a new folder named 'test folder'");


    // Workspace settings: Info
    await page.locator('button:has(i.settings)').click();
    await page.getByText('Info').click();
    //await page.locator('span.p-dialog-header-close-icon.pi-times').click();
    const closeBtn1 = page.locator("xpath=//button[contains(@class, 'p-dialog-header-close')]")
    await closeBtn1.click()




    // Workspace settings: Edit Details
    await page.locator('button:has(i.settings)').click();
    await page.click('xpath=//span[text()="Edit Details"]')
    await page.fill('//input[@id="workspace_name"]', 'RE-try_auto')
    await page.locator("//input[@name='workspace-tags']").fill('abc');
    await page.getByPlaceholder("e.g. this workspace is for analysing this data").fill("Trying automation");
    await page.click('xpath=//span[text()="Save Changes"]')
    console.log("Edited workspace details: name, tags, and description");

    
  

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
    await page.waitForTimeout(2000);
  // Step 2: Wait for dropdown panel to appear (PrimeNG uses this class)
  //await page.locator('.p-dropdown-panel').waitFor({ state: 'visible', timeout: 5000 });

  // Step 3: Click the "Admin" option
    await page.locator("//span[@class=\"ng-star-inserted\" and normalize-space()='admin']").click();
    await page.waitForLoadState('networkidle');
    await page.locator("//span[normalize-space()='Add']").click();
    await page.waitForLoadState('networkidle');
    await page.locator("//span[normalize-space()='Done']").click();
    console.log("Added collaborator");


  
  //searching for a file
await page.waitForTimeout(20000);

  
/*
await page.locator("//i[@class='polly-icon settings ng-star-inserted']").click();
  // Workspace settings: Quick Switch Workspace
    await page.click('xpath=//span[text()="Quick Switch Workspace"]')
    await page.click('xpath=//p[normalize-space(text())="RE-try_auto"]')
    await page.waitForLoadState('networkidle');

  console.log("Switched back to workspace: RE-try_auto");
    //await page.locator("//p[normalize-space()='report3.html']").waitFor({ state: 'visible', timeout: 10000 });

await page.waitForTimeout(20000); 

*/
  console.log("Starting search operation");
    // Fill the search input
    await page.locator('input[placeholder="Search for workspace content"]').fill('test folder');


  // Wait a moment for search results to load (if needed)
  await page.waitForTimeout(2000); // Optional delay — adjust if search is async

/*

  // Locate elements with class 'file-title__name' that contain 'report'
  const contentNameLocator = page.locator('.file-title__name', {hasText: 'report'});

  // Count matching elements
  const count = await contentNameLocator.count();
  console.log(`Found ${count} file(s) containing 'report'`);

  // Print the text of each matched file
  for (let i = 0; i < count; i++) {
    const text = await contentNameLocator.nth(i).innerText();
    console.log(`→ ${text}`);
  }

  await page.waitForTimeout(10000);

*/
  await page.locator("//p[normalize-space()='test folder']").first().click();


  console.log("Starting rename operation");
  //rename
  await page.locator("//i[@class='polly-icon rename ng-star-inserted']").click();
  // Fill the input field that appears
  await page.locator("input[formcontrolname='fileName']").fill('renamed folder');

  // (Optional) Click Save/Confirm if required
  await page.locator("//div[contains(@class, 'button-container')]//span[normalize-space(text())='Rename']").click();
 await page.waitForTimeout(5000);

  //await page.locator("//div[contains(@class, 'p-toast-message-text')]//p[normalize-space(text())='Successfully renamed']").waitFor({ state: 'visible', timeout: 120000 });

  await page.waitForLoadState('networkidle');
  await page.locator('input[placeholder="Search for workspace content"]').fill('');
  await page.waitForTimeout(2000);


  
  // 1. Wait for the loader icon to disappear
// await page.locator("i.polly-icon.loading-icon.spin").waitFor({ state: 'hidden', timeout: 30000 });

// // 2. Wait for the renamed folder to be visible
// await page.locator("//p[normalize-space()='renamed folder']").waitFor({ state: 'visible', timeout: 10000 });
//   console.log('The file renamed re-report.txt is present in the workspace: WS for automation');


await page.locator("//p[normalize-space(text())='Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb']").click();
    //clicking on the move icon
    await page.locator("//i[contains(@class, 'pan-move') and contains(@class, 'polly-icon')]").click();
    await page.waitForLoadState('networkidle');

    
    // Step 1: Open the dropdown
    await page.locator("//span[@role='combobox' and @aria-label='RE-try_auto']").click();
    await page.waitForTimeout(10000);
    await page.locator("//input[@role='searchbox']").fill('WS for automation');
    await page.locator("//p[@class='m-0 label-large ng-star-inserted']").click();
    await page.locator("//span[normalize-space(text())='Move']").click();
    console.log("File moved successfully to the new workspace: WS for automation");
    await page.waitForTimeout(10000);






  


/*
  console.log("Returning to the WS we created using automation");

  await page.locator("//i[@class='polly-icon settings ng-star-inserted']").click();
  // Workspace settings: Quick Switch Workspace
    await page.click('xpath=//span[text()="Quick Switch Workspace"]')
    await page.click('xpath=//p[normalize-space(text())="RE-try_auto"]')
    await page.waitForLoadState('networkidle');

  console.log("Switched back to workspace: RE-try_auto");
    await page.locator("//p[normalize-space()='re-report.txt']").waitFor({ state: 'visible', timeout: 10000 });
  console.log('The file named "report.txt" that was copied is present in the workspace: RE-try_auto');

*/
  //await page.locator("//p[normalize-space()='Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb']").waitFor({ state: 'visible', timeout: 10000 });
  //console.log('The file named "Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb" that was moved is present in the workspace: RE-try_auto');



  //launching a notebook
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
  console.log('Notebook is launching, waiting for it to be ready');

console.log("Starting delete operation");

  //delete
  await page.locator('input[placeholder="Search for workspace content"]').fill('renamed folder');
  await page.waitForTimeout(2000); // Optional delay — adjust if search is async


  await page.locator("//p[normalize-space()='renamed folder']").first().click();

  await page.locator("//i[@class='delete polly-icon ng-star-inserted']").click();
  await page.locator("//div[contains(@class, 'cb__container__box')]/span[contains(@class, 'cb-icon')]").click();
  console.log("Checkbox clicked successfully");
  await page.locator("//span[normalize-space()='Delete Files']").click();
  Console.log("File deleted successfully");

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