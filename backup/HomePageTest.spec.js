const {test, expect} =require('@playwright/test')

test('Home Page', async ({page})=>{

await page.goto('https://www.elucidata.io/');

 const pageTitle= await page.title();
 console.log('Page Title is:', pageTitle);

await expect(page).toHaveTitle('Polly: Accelerating Drug Discovery with ML Biomolecular Data');

const pageURL=page.url();
console.log('Page URL is:', pageURL);


await expect(page).toHaveURL('https://www.elucidata.io/');
await page.close();

})
