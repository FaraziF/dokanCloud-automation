import { test, expect, Page } from '@playwright/test';
import { LoginPage } from "../../pages/loginPage";
import { selector } from "../../pages/selectors";
import { user, data } from "../../../../utils/testdata";
import { AdminPage } from '../../pages/adminPage';

test.use({ storageState: data.auth.adminAuthFile });

let adminPage: AdminPage;
let page: Page;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({});
    page = await context.newPage();
    adminPage = new AdminPage(page);
});

test.afterAll(async () => {
    await page.close();
});


test.describe("Admin Exploratory Testing", ()=> {

    test('Dashbaord Validation', async () => {
        await adminPage.dashbaordElementValidation()
    });

    test('Product Page Validation', async ()=> {
        await adminPage.productElementValidation()
    });
    
    test('Category Page Validation', async ( )=> {
        await adminPage.categoryElementValidation()
    });

    test('Brands Page Validation', async ( )=> {
        await adminPage.brandElementValidation()
    });
    
    test('Orders Page Validation', async ( )=> {
        await adminPage.ordersElementValidation()
    });
    
    test('Payout Page Validation', async ( )=> {
        await adminPage.payoutElementValidation()
    });
    test('Subscription Page Validation', async ( )=> {
        await adminPage.subscriptionElementValidation()
    });
    
    
    test('Vendor Page Validation', async ( )=> {
        await adminPage.vendorElementValidation()
    });
    
    test('Customer Page Validation', async ( )=> {
        await adminPage.customerElementValidation()
    });
    
    test('Design Page Page Validation', async ( )=> {
        await adminPage.designPageElementValidation()
    });
    
    test('General Settings Page Validation', async ( )=> {
        await adminPage.generalSettingsElementValidation()
    });

    test('Team Settings Page Validation', async ( )=> {
        await adminPage.teamSettingsElementValidation()
    });
    
    test('Payment Settings Page Validation', async ( )=> {
        await adminPage.paymentSettingsElementValidation()
    });
    
    test('Payout Settings Page Validation', async ( )=> {
        await adminPage.payoutSettingsElementValidation()
    });
    
    test('Shipping Settings Page Validation', async ( )=> {
        await adminPage.shippingSettingsElementValidation()
    });
    
    test('Notification Settings Page Validation', async ( )=> {
        await adminPage.notificationSettingsElementValidation()
    });
    
    test('Tax Settings Page Validation', async ( )=> {
        await adminPage.taxSettingsElementValidation()
    });
    
    test('SEO Settings Page Validation', async ( )=> {
        await adminPage.seoSettingsElementValidation()
    });
    
    test('Policies Settings Page Validation', async ( )=> {
        await adminPage.policiesSettingsElementValidation()
    });
    
})



test.describe("Admin functional Testing", ()=> {
    // test.use({ storageState: 'playwright-test/.auth/admin.json' });
    /* test.use({ storageState: data.auth.adminAuthFile });

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

    test("Go TO Dashboard", async() => {
        await adminPage.goToAdminDashboard()
    });

    test("Create New Category @cc", async()=> {
        await adminPage.createNewCategory(data.category)
    });

    test("Edit Category @ce", async()=> {
        await adminPage.editCategory(data.category)
    });

    test("Delete Category @cd", async()=> { 
        await adminPage.deleteCategory(data.category) 
    });

    test("Create New Brand @bc", async() => {
        await adminPage.createBrand(data.brand)
    })
    test("Edit Brand @be", async() => {
        await adminPage.editBrand(data.brand)
    })
    test("Delete Brand @db", async() => {
        await adminPage.deleteBrand()
    })

    test("Create New Standard Product @pc-s", async()=> {
        await adminPage.createStandardProduct(data.product.standard)
    });
    test("Edit Product @pe", async()=> {
        await adminPage.editProduct(data.product.standard)
    });
    test("Delete Product @pd", async()=> {
        await adminPage.deleteProduct()
    });
    test("Subscription Create @sc @subs", async() => {
        await adminPage.createSubscription()
    });
    test("Edit Subscription @se @subs", async() => {
        await adminPage.editSubscription()
    });
    test("Delete Subscription @sd @subs", async() => {
        await adminPage.deleteSubscription()
    });
    test("Tax Class CRUD @tax", async() => {
        await adminPage.taxClassCRUD()
    });
    
    test("Tax Rate Add For Entire Country @tax", async() => {
        await adminPage.taxRateAddForEntireCountry()
    });
    test("Different Tax Rate For State, City & Zip @tax", async() => {
        await adminPage.differentTaxRateStateCityZip()
    });
    
})
