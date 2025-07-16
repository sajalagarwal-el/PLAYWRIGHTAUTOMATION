//const {test, expect} =require('@playwright/test')
import {test, expect} from '@playwright/test'

  test('Locators', async ({page})=>{
    await page.goto("https://polly.elucidata.io/prelogin/home");
    await page.getByPlaceholder('username@email.com').fill("srishti.mahale@elucidata.io")


await page.fill('xpath=/html/body/app-root/app-polly-pre-login-main-page/div/div/app-pre-login-main/section/div[2]/app-pre-login-form/div/div[2]/div/form/div[2]/div[1]/p-password/div/input', 'Polly@1234')

await page.click("//button[normalize-space()='Login']") 

//await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
//await page.click('xpath=/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-workspace-card-view/div[1]/div/div[1]/div/app-create-workspace/p-dialog/div/div/div[2]/app-create-edit-workspace-info/div/form/div[4]/polly-button[2]/button/div/span')

//await page.fill('//[@id="workspace_name"]', 'try_auto')
//await page.click('xpath=/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-workspace-card-view/div[1]/div/div[1]/div/app-create-workspace/div/polly-button/button/div')

//validate WS name!!!!

await page.close()

  })