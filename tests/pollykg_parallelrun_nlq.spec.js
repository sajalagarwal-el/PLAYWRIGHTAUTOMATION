import { test, expect } from '@playwright/test';
import { login } from './helper_sajal_login';

test('running NLQ parallely', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);
await page.waitForLoadState();
  await page.goto("https://polly.elucidata.io/manage/applications")
    console.log('Switched to Applications tab', page.url());
    await page.waitForLoadState();
    const targetDiv = page.locator("//div[@class='apps-wf-container__components-list gap-4 p-4']");
  await targetDiv.waitFor({ state: 'visible', timeout: 120000 });
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
    console.log('New tab URL:', newTab.url());
  await newTab.locator("//span[normalize-space()='Polly Co-Scientist']").click();
    console.log('Switched to Polly Co-Scientist tab');
  await newTab.waitForLoadState();
  await newTab.locator("//textarea[@placeholder='Get started by asking questions or creating Cypher queries for insights...']").fill("In which species is the gene NKAIN4 lost?");
  await newTab.locator("//button[@class='ant-btn css-1f1bixc ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-icon-end btn-base btn-primary label-large']").click();
  await newTab.waitForLoadState();
  const locator = newTab.locator("//div[@class='w-100 h-100']//div[@class='d-flex flex-column']");
  await locator.waitFor({ state: 'visible', timeout: 40000 });
// Now check that it contains the text "gene"
  await expect(locator).toContainText('GeneSpecies', { timeout: 10000 });
    console.log('✅ "gene and species" are present in the element.');


    await page.close();

 });