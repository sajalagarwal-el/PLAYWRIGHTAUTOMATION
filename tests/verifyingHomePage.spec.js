//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should login and verify Home page is visible', async ({ page }) => {
  await login(page, "srishti.mahale@elucidata.io", "Polly@1234");

  // Adjust the selector below to match the actual Home page heading or unique element
  await expect(page.getByURL('https://polly.elucidata.io/manage/omixatlas');
//await expect(page).toHaveURL('https://polly.elucidata.io/manage/omixatlas');

  await page.close();
});