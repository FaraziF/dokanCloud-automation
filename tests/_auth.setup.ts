import { test as setup, expect, request } from '@playwright/test';
import { LoginPage } from "../tests/e2e/pages/loginPage";
import { user, data } from '../utils/testdata';
import { selector } from "../tests/e2e/pages/selectors";
import { TIMEOUT } from 'dns';



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

	setup('Admin valid credential', async ({ page }) => {
		const loginPage = new LoginPage(page);
		await loginPage.loginAsAdmin(data.adminCredentials, data.auth.adminAuthFile);
        
	});

    // Hide For Standalone
    setup('Vendor valid credential', { tag: ['@marketplace']}, async ({ page }) => {
		const loginPage = new LoginPage(page);
		await loginPage.loginAsVendor(data.vendorCredentials, data.auth.vendorAuthFile);
	});

    setup('Customer valid credential',{ tag: ['@local']}, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginAsCustomer(data.customerCredentials, data.auth.customerAuthFile)
    });
});

/* 
const adminFile = 'playwright-test/.auth/admin.json';
setup('authenticate as admin', async ({ page }) => {
    await page.goto("https://farazi.staging.dokandev.com/admin")
    await page.locator(selector.login.adminEamilAddress).fill("farazi@wedevs.com");
    await page.locator(selector.login.password).fill("farazi@wedevs.comA1");
    await page.click(selector.login.signIn);
    // await page.waitForTimeout(4000)
    // await page.waitForLoadState('networkidle');
    await page.waitForURL(endpoints.adminDashboard, { waitUntil: "networkidle" })
  
    // End of authentication steps.
  
    await page.context().storageState({ path: adminFile });
  }); */