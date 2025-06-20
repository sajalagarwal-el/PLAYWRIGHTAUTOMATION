//const {test, expect} =require('@playwright/test')
import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should perform full workspace flow: create, edit, switch, watch, and archive', async ({ page }) => {
  await login(page, "srishti.mahale@elucidata.io", "Polly@1234");

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard");
  await page.getByRole('button', { name: 'New Workspace' }).click();
  await page.getByPlaceholder('Workspace Name').fill('try_auto');
  await page.getByRole('button', { name: 'Create & Launch' }).click();

  await page.click('i.create-new-folder.polly-icon.ng-star-inserted');
  await page.getByPlaceholder("Enter folder name").fill("test folder");
  await page.getByRole('button', { name: 'Create' }).click();

  // Workspace settings: Info
  await page.locator('button:has(i.settings)').click();
  await page.getByText('Info').click();
  await page.locator('span.p-dialog-header-close-icon.pi-times').click();

  // Workspace settings: Edit Details
  await page.locator('button:has(i.settings)').click();
  await page.getByText('Edit Details').click();
  await page.getByPlaceholder('Workspace Name').fill('RE-try_auto');
  await page.locator('input[role="searchbox"][type="text"]').fill('abc');
  await page.getByPlaceholder("e.g. this workspace is for analysing this data").fill("Trying automation");
  await page.getByText('Save Changes').click();

  // Workspace settings: Quick Switch Workspace
  await page.locator('button:has(i.settings)').click();
  await page.getByText('Quick Switch Workspace').click();
  await page.getByText('RE-try_auto').click();

  // Workspace settings: Watch Workspace
  await page.locator('button:has(i.settings)').click();
  await page.getByText('Watch Workspace').click();

  // Workspace settings: Archive Workspace
  await page.locator('button:has(i.settings)').click();
  await page.getByText('Archive Workspace').click();
  await page.locator('span.cb-icon.checkbox-selected').click();
  await page.getByText('Archive Workspace').click();

  await page.close();
});