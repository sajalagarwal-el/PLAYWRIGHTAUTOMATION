import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should create a new folder inside a new workspace', async ({ page }) => {
  await login(page, "srishti.mahale@elucidata.io", "Polly@1234");

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard");
  await page.getByRole('button', { name: 'New Workspace' }).click();

  await page.getByPlaceholder('Workspace Name').fill('try_auto');
  await page.getByRole('button', { name: 'Create & Launch' }).click();

  await page.click('i.create-new-folder.polly-icon.ng-star-inserted');
  await page.getByPlaceholder("Enter folder name").fill("test folder");
  await page.getByRole('button', { name: 'Create' }).click();

  // Assertion: Adjust selector as needed to verify folder creation
  await expect(page.getByText('test folder')).toBeVisible();

  await page.close();
});