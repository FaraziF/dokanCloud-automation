import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://farazi.dokandev.com/');
  await page.getByRole('link', { name: 'Shop', exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: 'Go to Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByPlaceholder('youremail@example.com').click();
  await page.getByPlaceholder('youremail@example.com').fill('farazi@gmail.com');
  await page.getByRole('button', { name: 'Continue as Guest' }).click();
  await page.locator('.css-98q0e7').click();
  await page.locator('#react-select-2-input').fill('ban');
  await page.getByText('Bangladesh', { exact: true }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Uttara');
  await page.getByText('UttaraDhaka, Bangladesh').nth(1).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Uttara ');
  await page.getByText('UttaraDhaka, Bangladesh').nth(1).click();
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Uttara');
  await page.getByText('UttaraDhaka, Bangladesh').nth(1).click();
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Mirpur');
  await page.getByText('MirpurDhaka, Bangladesh').nth(1).click();
});


// const env = require('../../../env');
// let page: Page;
// let adminPage: AdminPage;
/*
test.describe.configure({ mode: 'parallel' ?? 'serial' });

let adminPage: AdminPage;
let page: Page;

test.beforeAll(async ({ browser }) => {
    // Create page once and sign in.

    page = await browser.newPage();

    const homePage = new LoginPage(page);
    await homePage.goToAdminLoginPage();

    // await new LoginPage(page).login(env('ADMIN_USERNAME'), env('ADMIN_PASSWORD'));
    await new LoginPage(page).loginAsAdmin();
    const userisLoggedIn = await homePage.userisLoggedIn();
    expect(userisLoggedIn).toBeTruthy();
});

test.afterAll(async () => {
    await page.close();
});

*/

/* test.describe('Admin user functionality test', () => {
	test.use({ storageState: { cookies: [], origins: [] } });

	let loginPage: LoginPage;
	let page: Page;

	test.beforeAll(async ({ browser }) => {
		const context = await browser.newContext();
		page = await context.newPage();
		loginPage = new LoginPage(page);
	});

	test.afterAll(async () => {
		await page.close();
	});

	test('admin can login @lite @pro', async ( ) => {
		await loginPage.loginAsAdmin(data.admin);
	});
}); */

/* test.use({ storageState: 'playwright-test/.auth/admin.json' });

    let adminPage: AdminPage;
    let page: Page;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext({});
        page = await context.newPage();
        adminPage = new AdminPage(page);
    });

    test.afterAll(async () => {
        await page.close();
    }); */


    /* test.only("Coupon Required field test @required_field", async ({ request }) => {
        let _response = await request.post(endPoints.createCoupon, { data: {}, headers: vendorAuth })
        console.log(await _response.json())
        const _responseBody = await _response.json()
        expect(_responseBody.errors.title[0]).toMatch('Coupon title must be string')
        expect(_responseBody.errors.type[0]).toMatch('Coupon type is required')
        expect(_responseBody.errors.amount[0]).toMatch('Coupon amount is required')
        expect(_responseBody.errors.freeShipping[0]).toMatch('This field is required')
        expect(_responseBody.errors.codes[0]).toMatch('Coupon codes is required')
    }) */
