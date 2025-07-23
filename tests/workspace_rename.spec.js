//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

console.log('Running NB Launch test');
test('should perform move in diff location and fail at same location', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);
 
  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
  await page.waitForLoadState('networkidle');

  await page.locator("xpath=//h3[text()='RE-try_auto']").first().click();
  await page.locator("//span[normalize-space()='Delete Permanently']").click();
  await page.locator("//div[@class='cb__container__box'][span[@class='cb-icon']]").first().click();
  await page.locator("//span[normalize-space()='Delete Workspace']").click();
  await page.waitForTimeout(10000);
  await page.close();

 });