import { test, expect } from '@playwright/test';
import { login } from './helper_sajal_login';

test('running NLQ parallely', async ({ page }) => {
  await login(page);
  await page.waitForSelector('body');
  //await page.waitForLoadState('networkidle');
  
  await page.goto("https://polly.elucidata.io/manage/applications")
  console.log('Switched to Applications tab', page.url());
  await page.waitForLoadState('networkidle');

/*
 // Retry logic for applications container
  const targetDiv = page.locator("//div[@class='apps-wf-container__components-list gap-4 p-4']");
  for (let i = 0; i < 3; i++) {
    try {
      await expect(targetDiv).toBeVisible({ timeout: 180000 }); // 3 minutes
      break;
    } catch (e) {
      if (i === 2) throw e;
      console.log('Retrying to find the applications container...');
      await page.reload();
      await page.waitForLoadState('networkidle');
    }
  }
*/
  // Wait for Applications header to show non-zero
  const locator1 = page.locator("//h4[contains(normalize-space(), 'Applications')]");
  await expect(locator1).not.toHaveText('0 Applications', { timeout: 60000 });

  console.log('Applications loaded:', await locator1.textContent());

  await page.locator("//input[@placeholder='Search for applications by names']").fill("Polly KG");
  console.log('Searching for Polly KG application');
  await page.waitForLoadState();
  //await page.locator("//span[normalize-space()='PollyKG']").waitFor({ state: 'visible', timeout: 120000 });
  await page.locator("//div[@class='apps-wf-container__component ng-star-inserted']").click();
  await page.waitForLoadState();
  console.log('Clicked on Polly KG application');

  // Wait for the new tab to open
  const newTab = await page.context().waitForEvent('page');
  await newTab.waitForLoadState();
  console.log('Application Launched, New tab URL:', newTab.url());
  await newTab.locator("//span[normalize-space()='Polly Co-Scientist']").click();
  console.log('Switched to Polly Co-Scientist tab');
  await newTab.waitForLoadState();
  await newTab.locator("//textarea[@placeholder='Get started by asking questions or creating Cypher queries for insights...']").fill("In which species is the gene NKAIN4 lost?");
  console.log('Filled the query in the textarea');
  await newTab.locator("//button[@class='ant-btn css-1f1bixc ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-icon-end btn-base btn-primary label-large']").click();
  console.log('Clicked on the button to run the query');

  // Wait for 9 seconds and take a screenshot
  await newTab.waitForTimeout(9000);
  const workerId1 = test.info().workerIndex;
  const timestampSend = new Date().toISOString().replace(/[:.]/g, '-');
  await newTab.screenshot({
    path: `screenshots/after_send_worker${workerId1}_${timestampSend}.png`,
    fullPage: true
  });

  await newTab.waitForLoadState();
  const locator = newTab.locator("//div[@class='w-100 h-100']//div[@class='d-flex flex-column']");
  await locator.waitFor({ state: 'visible', timeout: 90000 });
// Now check that it contains the text "geneSpecies"
  await expect(locator).toContainText('GeneSpecies', { timeout: 10000 });
  console.log('✅ "gene and species" are present in the element.');
  const workerId = test.info().workerIndex;
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  await newTab.screenshot({ 
    path: `screenshots/final_screenshot_worker${workerId}_${timestamp}.png`, 
    fullPage: true 
  });



    await page.close();

 });