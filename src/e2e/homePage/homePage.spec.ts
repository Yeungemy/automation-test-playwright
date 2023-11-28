import { test, expect} from '@playwright/test';

test.describe('Home page', () => {

    // test.beforeAll(async({page}) => {
    //     // await page.goto('https://www.autotrader.co.uk/');
    // });

    test('home page 1', async({page}) => {
        await page.goto('https://www.autotrader.co.uk/');
        const pageTitle = await page.title();
        console.log(pageTitle);
    });

    test('home page',async ({browser}) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.autotrader.co.uk/'); 
        const pageTitle = await page.title();
        console.log(pageTitle);       
    });
});