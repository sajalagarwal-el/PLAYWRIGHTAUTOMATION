export async function login(page, username, password) 
{
  await page.goto("https://polly.elucidata.io/prelogin/home");
  await page.getByPlaceholder('username@email.com').fill('srishti.mahale@elucidata.io');
  await page.fill('xpath=//input[@type="password"]', 'Polly@1234')
  await page.click('//button[normalize-space()="Login"]') 
  await page.waitForLoadState('networkidle');
  console.log('Logged in successfully');
  await page.waitForSelector("//span[normalize-space()='All Atlases']", { timeout: 120000 });

}