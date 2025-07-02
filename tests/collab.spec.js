//adding collaborator on the very first WS card

await page.locator("//button[i[contains(@class, 'settings')]]").first().click();
await page.getByText('Share', { exact: true }).click();
await page.getByPlaceholder('Input Email Addresses').fill('sajal.agarwal@elucidata.io');

// Click the dropdown
await page.locator("//div[@id='pn_id_170']//div[contains(@class, 'p-dropdown-trigger')]").click();

// Select the option
await page.locator("//li[@role='option' and contains(., 'admin')]").click();
await page.locator("//span[text()='Add']").click();

await page.locator("//span[text()='Done']").click();
await page.pause();