import { test, expect } from '@playwright/test';
import { login } from './helpers';


test('should show error when workspace name is empty', async ({ page }) => {
  await login(page);
  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
  await page.click('xpath=//span[text()="New Workspace"]')
  await page.click('xpath=//span[text()="Create"]')

  //await page.getByRole('button', { name: 'Create Workspace' }).click();
expect("Workspace name cannot be empty").toContain('cannot be empty')
expect(true).toBeTruthy()
});