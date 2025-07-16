//const {test, expect} =require('@playwright/test')
import {test, expect} from '@playwright/test'
import { clear } from 'console';

  test('Locators', async ({page})=>{
   

    await page.goto("https://polly.elucidata.io/prelogin/home");
    await page.getByPlaceholder('username@email.com').fill("srishti.mahale@elucidata.io")


await page.fill('xpath=/html/body/app-root/app-polly-pre-login-main-page/div/div/app-pre-login-main/section/div[2]/app-pre-login-form/div/div[2]/div/form/div[2]/div[1]/p-password/div/input', 'Polly@1234')

await page.click("//button[normalize-space()='Login']") 


//await page.getByAltText("Atlas Logo").click()

await expect(page).toHaveURL('https://polly.elucidata.io/manage/omixatlas');

await page.close()

  })