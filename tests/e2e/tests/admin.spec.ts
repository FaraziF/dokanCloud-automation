import { test, expect, Page } from '@playwright/test';

import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { selector } from "../pages/selectors";
import { user } from "../utils/testdata";





test.describe.configure({ mode: 'parallel' ?? 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
    // Create page once and sign in.

    page = await browser.newPage();

    const homePage = new HomePage(page);
    await homePage.goToAdminLoginPage();

    // await new LoginPage(page).login(user.admin.email, user.admin.password);
    await new LoginPage(page).login(process.env.ADMIN_USERNAME ?? '', process.env.ADMIN_PASSWORD ?? '');
    
    const userisLoggedIn = await homePage.userisLoggedIn();
    expect(userisLoggedIn).toBeTruthy();
});

test.afterAll(async () => {
    await page.close();
});

test.describe("Admin Business Scenario With", () => {
    test('Preview Dashbaord', async () => {
        // page is signed in.
        await page.goto('/admin');
        await expect(page).toHaveURL('/admin');
    });

    test('Preview Product Page', async () => {
        // page is signed in.
        await page.goto('/admin/products');
        const products = await page.innerText("h1.text-2xl");
        expect(products).toBe('Products');
    });
})
