//const {test, expect} =require('@playwright/test')
  import {test, expect} from '@playwright/test'
import { clear } from 'console';

  test('Locators', async ({page})=>{
   

    await page.goto("https://polly.elucidata.io/prelogin/home");
    //clickon login button

    //await page.locator().click()
//provide user name - css

await page.getByPlaceholder('username@email.com').fill("srishti.mahalee@elucidata.io")

//await page.getByRole('button', {type: 'password'}).("Polly@123")
//await page.locator("xpath=p-inputtext p-component p-element ng-tns-c37-1 p-password-input").fill("Polly@123");

await page.fill('xpath=/html/body/app-root/app-polly-pre-login-main-page/div/div/app-pre-login-main/section/div[2]/app-pre-login-form/div/div[2]/div/form/div[2]/div[1]/p-password/div/input', 'Polly@1234')
//await page.locator('//input[@placeholder='**']').fill("Polly@1234")

await page.click("//button[normalize-space()='Login']") 
const errorMessage=await page.locator("//p[contains(@class,'ng-star-inserted')]").textContent()

console.log("Error Message is "+errorMessage)
expect (errorMessage.includes("Incorrect")).toBeTruthy()


await page.goto("https://polly.elucidata.io/prelogin/home");
await page.getByPlaceholder('username@email.com').fill("srishti.mahale@elucidata.io")

await page.fill('xpath=/html/body/app-root/app-polly-pre-login-main-page/div/div/app-pre-login-main/section/div[2]/app-pre-login-form/div/div[2]/div/form/div[2]/div[1]/p-password/div/input', 'Polly@1234')


//await expect(page.locator('//p[contains(@class,'class='ng-star-inserted')]')).toHaveText('Incorrect Email or Password');

//await expect(page).toHaveText('Incorrect');

await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")


await page.click('xpath=/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-workspace-card-view/div[1]/div/div[1]/div/app-create-workspace/p-dialog/div/div/div[2]/app-create-edit-workspace-info/div/form/div[4]/polly-button[2]/button/div/span')
//await page.click('xpath=//span[@class='ng-star-inserted']')
// positive case
await page.fill('//[@id="workspace_name"]', 'try_auto')
//await page.fill('/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-workspace-card-view/div[1]/div/div[1]/div/app-create-workspace/p-dialog/div/div/div[2]/app-create-edit-workspace-info/div/form/div[2]/div', 'playwright')

await page.click('xpath=/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-workspace-card-view/div[1]/div/div[1]/div/app-create-workspace/div/polly-button/button/div')

await page.fill('//[@id="workspace_name"]', '')
await page.click('xpath=/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-workspace-card-view/div[1]/div/div[1]/div/app-create-workspace/div/polly-button/button/div')


const errorMsg=await page.locator("//p[contains(@class,'ng-tns-c77-36')]").textContent()

console.log("Error Message is "+errorMsg)
expect (errorMsg.includes("Empty")).toBeTruthy()



//await page.fill('/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-workspace-card-view/div[1]/div/div[1]/div/app-create-workspace/p-dialog/div/div/div[2]/app-create-edit-workspace-info/div/form/div[2]/div', 'playwright')

//await expect(page).toHaveText('Workspace name cannot be empty');

//await page.click('xpath=/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-workspace-card-view/div[1]/div/div[1]/div/app-create-workspace/p-dialog/div/div/div[2]/app-create-edit-workspace-info/div/form/div[4]/polly-button[2]/button/div')

//await page.click('xpath=/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-polly-manage-workspace-layout/div/app-workspace-content-header/div/div[2]/app-polly-manage-workspace-file-header/div/polly-icon-button[1]/button/i')

//await page.fill('xpath=/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-polly-manage-workspace-layout/div/app-workspace-content-header/div/div[2]/app-polly-manage-workspace-file-header/p-dialog[2]/div/div/div[2]/app-polly-manage-create-folder/div/div/form/div[1]/input', 'folder-a')
//await page.click('xpath=/html/body/app-root/app-root/app-polly-manage-landing-page/div/div[2]/div/app-polly-manage-workspace-layout/div/app-workspace-content-header/div/div[2]/app-polly-manage-workspace-file-header/p-dialog[2]/div/div/div[2]/app-polly-manage-create-folder/div/div/form/div[2]/polly-button/button/div/span')

//const twofactor= await page.locator("//h1[normalize-space()='Two Factor Authentication']")
//await expect(twofactor).toBeVisible();

await page.close()

  })