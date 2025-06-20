export async function login(page, username, password) {
  await page.goto("https://polly.elucidata.io/prelogin/home");
  await page.getByPlaceholder('username@email.com').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}