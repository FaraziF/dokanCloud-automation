import { test, expect, type Page } from '@playwright/test';

test.describe('Customer Order Verification', () => {
    let page: Page;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        await page.goto('https://farazi.staging.dokandev.com/');
    });

    test('should login and verify order details', async () => {
        // Click login link
        await page.getByRole('link', { name: 'Login' }).click();

        // Fill login credentials
        await page.getByPlaceholder('youremail@example.com')
            .fill('farazi+customer15@wedevs.com');
        await page.getByPlaceholder('Minimum 6 characters')
            .fill('farazi+customer15@wedevs.comA1');
        
        // Click login button
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();

        // Verify login success
        await expect(page.getByRole('link', { name: 'Login' })).not.toBeVisible();

        // Verify redirect to dashboard
        await page.goto('https://farazi.staging.dokandev.com/customers/account');
        
        // Verify Recent Orders section exists
        const recentOrdersSection = page.getByRole('heading', { name: 'Recent Orders' });
        await expect(recentOrdersSection).toBeVisible();

        // Verify Order Table Headers
        const tableHeaders = ['Order', 'Payment Status', 'Shipment Status', 'Total'];
        // for (const header of tableHeaders) {
        //     await expect(page.getByRole('table', { name: header })).toBeVisible();
        // }

        // Check the Recent Orders table
        const orderTable = page.locator('table');
        await expect(orderTable).toBeVisible();
        for (const header of tableHeaders) {
            await expect(orderTable.locator('thead tr')).toContainText(header);
        }
        // await expect(orderTable.locator('thead tr')).toContainText(['Order', 'Payment Status', 'Shipment Status', 'Total']);


        // Store the total from orders table for first order
        const firstOrderTotal = await page.locator('tbody tr').first().locator('td').filter({ hasText: '$' }).textContent();
        
        // Click on first order number to view details
        await page.locator('tbody tr').first().locator('td').first().click();

        // Verify order details page loads
        await expect(page.getByText('Order Details')).toBeVisible();

        // Get order total from details page and compare with table
        const detailsPageTotal = await page.locator("(//span[@class='text-base font-bold'])[1]").textContent();
        
        // Clean up the totals (remove currency symbol and whitespace) before comparison
        const cleanTableTotal = firstOrderTotal?.replace(/[^0-9.]/g, '');
        const cleanDetailsTotal = detailsPageTotal?.replace(/[^0-9.]/g, '');
        
        // Verify totals match
        expect(cleanTableTotal).toBe(cleanDetailsTotal);
    });

    test.afterEach(async () => {
        await page.close();
    });
});