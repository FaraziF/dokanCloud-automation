import { test, expect, Page } from '@playwright/test';

import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { selector } from "../pages/selectors";
import { user } from "../utils/testdata";

const env = require('../../../env');




test.describe.configure({ mode: 'parallel' ?? 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
    // Create page once and sign in.

    page = await browser.newPage();

    const homePage = new HomePage(page);
    await homePage.goToAdminLoginPage();

    // await new LoginPage(page).login(env('ADMIN_USERNAME'), env('ADMIN_PASSWORD'));
    await new LoginPage(page).loginAsAdmin();
    const userisLoggedIn = await homePage.userisLoggedIn();
    expect(userisLoggedIn).toBeTruthy();
});

test.afterAll(async () => {
    await page.close();
});

test.describe("Admin Business Scenario With", () => {
    test('Preview Dashbaord', async () => {
        await page.goto('/admin');
        const adminDashboard = await page.innerText(selector.adminDashboard.validaton);
        expect(adminDashboard).toBe("Dashboard");
    });

    test('Preview Product Page', async () => {
        await page.goto('/admin/products');
        const products = await page.innerText(selector.productPage.validation);
        expect(products).toBe('Products');
    });
})
