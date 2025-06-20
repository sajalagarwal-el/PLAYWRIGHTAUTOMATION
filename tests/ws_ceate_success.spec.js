import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should create a workspace successfully', async ({ page }) => {
  await login(page, "srishti.mahale@elucidata.io", "Polly@1234");

  await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard");
  await page.getByRole('button', { name: 'Create Workspace' }).click();

  await page.fill('//*[@id="workspace_name"]', 'try_auto');
  await page.getByRole('button', { name: 'Create' }).click();

  // Validate that the workspace was created (adjust selector as needed)
  await expect(page.getByText('try_auto')).toBeVisible();

  await page.close();
});