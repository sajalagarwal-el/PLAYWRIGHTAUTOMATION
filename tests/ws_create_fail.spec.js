import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should show error when workspace name is empty', async ({ page }) => {
  await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await page.getByRole('button', { name: 'Create Workspace' }).click();
  await expect(page.getByText('Workspace name cannot be empty')).toBeVisible();
});