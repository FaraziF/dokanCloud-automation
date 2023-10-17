import { test, expect } from '@playwright/test';

let copyEmail: string;

test("Multiple email", async({ context }) => {
    // Create two pages
    const pageOne = await context.newPage();
    const pageTwo = await context.newPage();
    
    await pageOne.goto('https://tempmailo.com/')
    let copyEmail = await pageOne.getByRole('button', { name: 'Copy' }).dblclick()
    
    console.log(await copyEmail)
    

    // await pageTwo.goto('https://app.dokandev.com/login'),
    // await pageTwo.getByRole('link', { name: 'Sign up' }).click(),
    // await pageTwo.getByPlaceholder('john@example.com').click()
    // await pageTwo.getByPlaceholder('john@example.com').fill(`${copyEmail}`),
    // await pageTwo.locator('#reg-password').click(),
    // await pageTwo.locator('#reg-password').fill('laleriry@ema-sofia.euA1'),
    // await pageTwo.getByLabel('Confirm Password').click(),
    // await pageTwo.getByLabel('Confirm Password').fill('laleriry@ema-sofia.euA1'),
    // await pageTwo.getByRole('button', { name: 'Create Account' }).click()


});
/* test('test', async ({ page }) => {
    await page.goto('https://tempmailo.com/');
    const copyEmail = await page.getByRole('button', { name: 'Copy' }).click();
    await page.getByLabel('Your temporary email address').click();

    // await page.keyboard.press('Tab')
    const [newTab] = await Promise.all([
        // context.waitForEvent('page'),
        await page.click('a[target="_blank"]'), 
        await page.goto('https://app.dokandev.com/login'),
        await page.getByRole('link', { name: 'Sign up' }).click(),
        await page.getByPlaceholder('john@example.com').click(),
        await page.getByPlaceholder('john@example.com').fill(`${copyEmail}`),
        await page.locator('#reg-password').click(),
        await page.locator('#reg-password').fill('laleriry@ema-sofia.euA1'),
        await page.getByLabel('Confirm Password').click(),
        await page.getByLabel('Confirm Password').fill('laleriry@ema-sofia.euA1'),
        await page.getByRole('button', { name: 'Create Account' }).click(),
        // await page.getByText('A verification email has been sent to your email with verification link. Please ').click(),

    ]); */

    
//   await page.locator('#apptmo').getByText('Inbox').click();
//     await page.getByText('Verify Email Address').click();
//     const page2Promise = page.waitForEvent('popup');
//     await page.frameLocator('#fullmessage').getByRole('link', { name: 'Verify Email Address' }).click();
//     const page2 = await page2Promise;
//     await page2.getByText('A verification email has been sent to your email with verification link. Please ').click();
//     await page2.getByPlaceholder('yourname@email.com').click();
//     await page2.getByPlaceholder('yourname@email.com').fill('laleriry@ema-sofia.eu');
//     await page2.getByPlaceholder('••••••••').click();
//     await page2.getByPlaceholder('••••••••').fill('laleriry@ema-sofia.euA1');
//     await page2.getByRole('button', { name: 'Sign In' }).click();
// });