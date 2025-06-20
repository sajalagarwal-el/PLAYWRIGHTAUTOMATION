import {test, expect} from '@playwright/tests'
import { clear } from 'console';

  test('Locators', async ({page})=>{
   
    await page.goto("https://polly.elucidata.io/prelogin/home")
    await page.getByPlaceholder('username@email.com').fill("srishti.mahale@elucidata.io")


await page.fill('xpath=//input[@type="password"]', 'Polly@1234')

await page.click('//button[normalize-space()="Login"]') 

await page.goto("https://polly.elucidata.io/manage/workspaces/dashboard")
await page.click('xpath=//span[text()="New Workspace"]')
//await page.fill('//input[@id="workspace_name"]', '')

await page.click('xpath=//span[text()="Create"]')

expect("Workspace name cannot be empty").toContain('cannot be empty')
expect(true).toBeTruthy()


//await expect(page.locator('xpath=//span[text()="Workspace name cannot be empty"]')).toContainText('cannot be empty');

//const errorMessage =page.locator('xpath=//span[text()="Workspace name cannot be empty"]').textContent();
//console.log("error message is ",+errorMessage)
//expect (errorMessage.includes("cannot be empty")).toBeTruthy()

await page.close()

  })