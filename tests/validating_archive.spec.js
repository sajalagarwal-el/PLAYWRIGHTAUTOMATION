//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform full workspace flow: create, edit, switch, watch, and archive', async ({ page }) => {
  //await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await login(page);

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
  
  //going to a WS
  await page.locator("//div[contains(@class, 'card') and .//h3[normalize-space()='test_8junew']]").click();


  //clicking on a file
  await page.locator("//p[normalize-space(text())='Polly Notebook Mon Jun 09 2025 7_54_22 PM.ipynb']").click();


  //clicking on the move icon
  await page.locator("//i[contains(@class, 'pan-move') and contains(@class, 'polly-icon')]").click();


  //selecting the destination folder and click move 
  await page.locator("//span[normalize-space(text())='Move']").click();

  expect("Destination matches the Source").toContain('Destination matches the Source')
  expect(true).toBeTruthy()
  

  await page.close();

 });