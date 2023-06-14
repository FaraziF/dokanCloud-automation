import { test as setup, expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
import { user, data } from '../../../utils/testdata';
// import { STORAGE_STATE } from '../../../playwright.config';

/*
const adminFile = 'playwright-test/.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {
    // // Perform authentication steps. Replace these actions with your own.
    // await page.goto('https://github.com/login');
    // await page.getByLabel('Username or email address').fill('admin');
    // await page.getByLabel('Password').fill('password');
    // await page.getByRole('button', { name: 'Sign in' }).click();
    // // Wait until the page receives the cookies.
    // //
    // // Sometimes login flow sets cookies in the process of several redirects.
    // // Wait for the final URL to ensure that the cookies are actually set.
    // await page.waitForURL('https://github.com/');
    // // Alternatively, you can wait until the page reaches a state where all cookies are set.
    // // await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

    // End of authentication steps.



    const homePage = new LoginPage(page);
    await homePage.goToAdminLoginPage();

    // await new LoginPage(page).login(env('ADMIN_USERNAME'), env('ADMIN_PASSWORD'));
    await new LoginPage(page).loginAsAdmin();
    await page.waitForURL('https://farazi.dokandev.com/admin');

    // await page.context().storageState({ path: STORAGE_STATE });

    await page.context().storageState({ path: adminFile });
}); */

// const userFile = 'playwright/.auth/user.json';

// setup('authenticate as user', async ({ page }) => {
//     // Perform authentication steps. Replace these actions with your own.
//     await page.goto('https://github.com/login');
//     await page.getByLabel('Username or email address').fill('user');
//     await page.getByLabel('Password').fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     // Wait until the page receives the cookies.
//     //
//     // Sometimes login flow sets cookies in the process of several redirects.
//     // Wait for the final URL to ensure that the cookies are actually set.
//     await page.waitForURL('https://github.com/');
//     // Alternatively, you can wait until the page reaches a state where all cookies are set.
//     // await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

//     // End of authentication steps.

//     await page.context().storageState({ path: userFile });
// });

setup.describe('Authenticate with', () => {

	setup.skip('Admin valid credential', async ({ page }) => {
		const loginPage = new LoginPage(page);
		await loginPage.loginAsAdmin(data.adminCredentials, data.auth.adminAuthFile);
	});

    setup.skip('Vendor valid credential', async ({ page }) => {
		const loginPage = new LoginPage(page);
		await loginPage.loginAsVendor(data.vendorCredentials, data.auth.vendorAuthFile);
	});

    setup('Customer valid credential', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginAsCustomer(data.customerCredentials, data.auth.customerAuthFile)
    });
});