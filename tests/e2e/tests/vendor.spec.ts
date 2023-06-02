import { test, expect, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../pages/loginPage";
import { VendorPage } from "../pages/vendorPage";
import { data, user } from "../../../utils/testdata";
import { selector } from "../pages/selectors";
import { Registration } from "../pages/registrationPage";


const env = require('../../../env');

test.describe.configure({ mode: 'serial' });

let page: Page;
// let vendorPage: any;



test.beforeAll(async ({ browser }) => {
    // vendorPage = new VendorPage(page);
    // Create page once and sign in.
    page = await browser.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.goToVendorLoginPage();
    await new LoginPage(page).loginAsVendor();
    const userisLoggedIn = await loginPage.userisLoggedIn();
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

    test('Create a new product', async() =>  {
        const vendorPage = new VendorPage(page)
        await vendorPage.createStandardProduct(data.product.standard)
    })

})

