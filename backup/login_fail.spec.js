//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';

test('should show error for invalid login credentials', async ({ page }) => {
  await page.goto("https://polly.elucidata.io/prelogin/home");

  await page.getByPlaceholder('username@email.com').fill("srishti.mahalee@elucidata.io");
  await page.fill('xpath=/html/body/app-root/app-polly-pre-login-main-page/div/div/app-pre-login-main/section/div[2]/app-pre-login-form/div/div[2]/div/form/div[2]/div[1]/p-password/div/input', 'Polly@1234');
  await page.click("//button[normalize-space()='Login']");

  const errorMessage = await page.locator("//p[contains(@class,'ng-star-inserted')]").textContent();
  console.log("Error Message is " + errorMessage);
  expect(errorMessage.includes("Incorrect")).toBeTruthy();

  await page.close();
});