import { test, expect, Page } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
import { selector } from "../pages/selectors";
import { user, data } from "../../../utils/testdata";
import { AdminPage } from '../pages/adminPage';

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

/* test.describe("Admin Exploratory Testing", ()=> {
    
    test.use({ storageState: 'playwright-test/.auth/admin.json' });

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

    test.skip('Dashbaord Validation', async () => {
        await page.goto(data.subUrls.admin.dashboard);
        
        //  Note: here two way, i assert dashboard because multiple dasboard text available 
        // const adminDashboard = await page.innerText(selector.adminDashboard.validaton);
        // expect(adminDashboard).toBe(data.dashboard.PageValidation);
        expect( await page.innerText(selector.adminDashboard.validaton)).toBe(data.dashboard.PageValidation)
        
        await expect(page.getByText('Today')).toBeVisible();
        await expect(page.getByText('Sales Report')).toBeVisible();
        await expect(page.getByText('To-Do')).toBeVisible();
        await expect(page.getByText('Top Selling Product')).toBeVisible();
    });


    test.skip('Product Page Validation', async () => {
        await page.goto(data.subUrls.admin.product);
        
        expect (await page.innerText(selector.productPage.validation)).toBe(data.product.pageValidation)
        
        // Validate Add New Product page loading
        await page.getByRole('link', { name: 'Add Product'}).click()
            await expect(page).toHaveURL('/admin/products/create')
            await expect(page.getByText('Product Name')).toBeVisible()    
        await page.getByRole('link', { name: 'Products'}).click()
            await expect(page).toHaveURL('/admin/products')
        
        //Validate Published page loading 
        await page.getByRole('button', { name: 'Published' }).click();
            await expect(page).toHaveURL('/admin/products?filters[status]=published')
            await expect(page.locator('div.mt-4')).toBeVisible()
            await expect(page.getByRole('cell', { name: 'Product' })).toBeVisible()
        
        // Validate Draft page loading
        await page.getByRole('button', {name: 'Draft'}).click()
            await expect(page).toHaveURL('/admin/products?filters[status]=draft')
            await expect(page.locator('div.mt-4')).toBeVisible()
            await expect(page.getByRole('cell', { name: 'Product' })).toBeVisible()
        
        await page.getByRole('button', {name: 'All'}).click()
        await expect(page.getByPlaceholder('Press enter to search...')).toBeVisible()
        await expect(page.getByRole('button', { name: 'Filter' })).toBeVisible()
        await expect(page.getByRole('cell', { name: 'Product' })).toBeVisible()
        await expect(page.getByRole('cell', { name: 'Price' })).toBeVisible()
        await expect(page.getByRole('cell', { name: 'Status' })).toBeVisible()
        await expect(page.getByRole('cell', { name: 'Stock' })).toBeVisible()
        await expect(page.getByRole('cell', { name: 'Action' })).toBeVisible()
        await expect(page.locator('div.pagination')).toBeVisible()
    });

    test('Category Page Validation', async ( )=> {
        await adminPage.createNewCategory(data.category)
        await page.goto('/admin/categories')
        await page.getByRole('link', { name: 'New Category' }).click();
        // await this.page.getByRole('heading', { name: 'New Category' }).click();
        await page.getByPlaceholder('e.g. T-shirt').click();
        await page.getByPlaceholder('e.g. T-shirt').fill('sdfdhjs');
        await page.locator('div').filter({ hasText: /^Select one$/ }).first().click();
        await page.getByText('demo-3').click();
        await page.getByLabel('Description').click();
        await page.getByLabel('Description').fill('jdsjfdshsdhfkdshkfhdsk dhfjdshkfs');
        await page.getByRole('button', { name: 'Save' }).click();
        await (expect(page.getByRole('link', { name: 'New Category' })).toBeVisible()); 
        // ToDo: we need to use below line, above line using for testing purpose 
        // await page.getByRole('link', { name: 'Categories' }).click() 
        

    });

}) */

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

test.describe("Admin functional Testing", ()=> {
    test.use({ storageState: 'playwright-test/.auth/admin.json' });

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
    
})
