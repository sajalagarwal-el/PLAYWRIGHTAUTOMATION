import { test, expect } from '@playwright/test';
import { login } from './helpers';

test('Regression of Polly Atlas', async ({ page }) => {
await login(page);

await page.close();

});