import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('should login and display home page', async ({ page }) => {
  await login(page, "srishti.mahale@elucidata.io", "Polly@1234");
  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();
});
