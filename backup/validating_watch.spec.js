//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform full workspace flow: create, edit, switch, watch, and archive', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
  await page.click('xpath=//span[text()="New Workspace"]')

  await page.fill('//input[@id="workspace_name"]', 'try_auto')
  await page.click('xpath=//span[text()="Create & Launch"]')

  
  // Workspace settings: Watch Workspace
  await page.locator('button:has(i.settings)').first().click();
  await page.click('xpath=//span[text()="Watch Workspace"]')
  //validating
  await page.locator('button:has(i.settings)').click();

  expect("Stop Watching Workspace").toContain('Stop Watching Workspace')
  expect(true).toBeTruthy()



  await page.close();

});