import { test, expect, Page } from '@playwright/test';
import { AdminPage } from '../pages/adminPage';
import { data } from '../../../utils/testdata';

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

    test("admin dashboard", async(page) => {
        await adminPage.visualComparisons()
    })
    test.only("admin dashboard full page", async({page}) => {
        // await adminPage.visualComparisonsFull()
        await page.goto("https://farazi.dokandev.com/admin/categories")
        await adminPage.createNewCategory(data.category)
        await expect(page).toHaveScreenshot("category.png", {fullPage: true})
    })
        
})