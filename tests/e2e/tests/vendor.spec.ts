import { test, expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { user } from "../utils/testdata";
import { selector } from "../pages/selectors";
import { Registration } from "../pages/registrationPage";

test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
    // Create page once and sign in.

    page = await browser.newPage();

    const homePage = new HomePage(page);
    await homePage.goToVendorLoginPage();
    await new LoginPage(page).login(process.env.VENDOR_EMAIL ?? '', process.env.VENDOR_PASSWORD ?? '');
    const userisLoggedIn = await homePage.userisLoggedIn();
    expect(userisLoggedIn).toBeTruthy();

});

test.afterAll(async () => {
    await page.close();
});


test.describe('Vendor Business Scenario With',() => {

    test('Preview Dashboard', async () => {
        await page.goto("/vendor");
        const dashboard = await page.innerText(selector.vendorDashboard.validation);
        expect(dashboard).toBe('Dashboard');
    })

})

