import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://farazi.dokandev.com/');
  await page.getByRole('link', { name: 'Shop', exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: 'Go to Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByPlaceholder('youremail@example.com').click();
  await page.getByPlaceholder('youremail@example.com').fill('farazi@gmail.com');
  await page.getByRole('button', { name: 'Continue as Guest' }).click();
  await page.locator('.css-98q0e7').click();
  await page.locator('#react-select-2-input').fill('ban');
  await page.getByText('Bangladesh', { exact: true }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Uttara');
  await page.getByText('UttaraDhaka, Bangladesh').nth(1).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Uttara ');
  await page.getByText('UttaraDhaka, Bangladesh').nth(1).click();
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Uttara');
  await page.getByText('UttaraDhaka, Bangladesh').nth(1).click();
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Mirpur');
  await page.getByText('MirpurDhaka, Bangladesh').nth(1).click();
});


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

/* test.use({ storageState: 'playwright-test/.auth/admin.json' });

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





    //ENV
    /*
    # TESTING_ENV=LOCAL
# URL= https://farazi.dokandev.com
# URL=https://farazi.staging.dokandev.com
TENANT='jamuna-future-park'
URL=https://jamuna-future-park.ondokan.com
ADMIN_USERNAME=farazi@wedevs.com
ADMIN_PASSWORD=farazi@wedevs.comA1
VENDOR_USERNAME=farazi+vendor1@wedevs.com
VENDOR_PASSWORD=farazi+vendor1@wedevs.comA1
VENDOR_INVALID_EMAIL= ronova9317@lurenwu.co
VENDOR_INVALID_PASSWORD= ronova9317@luren
CUSTOMER_USERNAME=farazi+customer1@wedevs.com
CUSTOMER_PASSWORD=farazi+customer1@wedevs.comA1
#CUSTOMER_PASSWORD = c123456C



# Staging
#Admin_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlciI6eyJpZCI6IjEiLCJlbWFpbCI6ImZhcmF6aUB3ZWRldnMuY29tIiwiZmlyc3ROYW1lIjoiRmFyYXppIiwibGFzdE5hbWUiOiJGb3JoYWQiLCJhY3RpdmUiOnRydWUsImlzQWRtaW4iOnRydWUsInJvbGUiOiJhZG1pbiIsInN0cmF0ZWd5IjoiYWRtaW4iLCJyZWxhdGVkVmVuZG9yIjp7ImlkIjoiMSIsInN0b3JlTmFtZSI6ImZhcmF6aSIsImFjdGl2ZSI6dHJ1ZX19LCJpYXQiOjE2OTQ0MDQ4NzMsImlzcyI6ImFwaS5kb2thbmRldi5jb20iLCJhdWQiOiJmYXJhemkiLCJleHAiOjE2OTUwMDk2NzN9.TpOQN75c16P-Xm1vfxdoPiGcsX6Rxu3jsgUEMoNeBqg


#Ondokan
#Admin_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxOCIsInVzZXIiOnsiaWQiOiIxOCIsImVtYWlsIjoiZmFyYXppQHdlZGV2cy5jb20iLCJmaXJzdE5hbWUiOiJGYXJhemkiLCJsYXN0TmFtZSI6IkZvcmhhZCIsImFjdGl2ZSI6dHJ1ZSwiaXNBZG1pbiI6ZmFsc2UsInJvbGUiOiJhZG1pbiIsInN0cmF0ZWd5IjoiYWRtaW4ifSwiaWF0IjoxNjk2MzI3MjE4LCJpc3MiOiJhcGkuZG9rYW5kZXYuY29tIiwiYXVkIjoiamFtdW5hLWZ1dHVyZS1wYXJrIiwiZXhwIjoxNjk2OTMyMDE4fQ.9yyw3BBHWEC-6NnBd0SaftwAUTmFBBIelz8sybjqt5A
#Vendor_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxOSIsInVzZXIiOnsiaWQiOiIxOSIsImVtYWlsIjoiZmFyYXppK3ZlbmRvcjFAd2VkZXZzLmNvbSIsImZpcnN0TmFtZSI6IlZlbmRvciIsImxhc3ROYW1lIjoiT25lIiwiYWN0aXZlIjp0cnVlLCJpc0FkbWluIjpmYWxzZSwicm9sZSI6InZlbmRvciIsInN0cmF0ZWd5IjoidmVuZG9yIiwicmVsYXRlZFZlbmRvciI6eyJpZCI6IjExIiwic3RvcmVOYW1lIjoidmVuZG9yMSIsImFjdGl2ZSI6dHJ1ZX19LCJpYXQiOjE2OTUxMTMyMzUsImlzcyI6ImFwaS5kb2thbmRldi5jb20iLCJhdWQiOiJqYW11bmEtZnV0dXJlLXBhcmsiLCJleHAiOjE2OTU3MTgwMzV9.DzyEcnvDlGJCMsQ4SNnLBa0pYdoY_V8L9AHyQYPlqfA
Customer_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNCIsInVzZXIiOnsiaWQiOiIyNCIsImVtYWlsIjoiZmFyYXppK2N1c3RvbWVyMUB3ZWRldnMuY29tIiwiZmlyc3ROYW1lIjoiQ3VzdG9tZXIiLCJsYXN0TmFtZSI6Ik9uZSIsImFjdGl2ZSI6dHJ1ZSwiaXNBZG1pbiI6ZmFsc2UsInJvbGUiOiJjdXN0b21lciIsInN0cmF0ZWd5IjoiY3VzdG9tZXIifSwiaWF0IjoxNjk1MDk2NTU1LCJpc3MiOiJhcGkuZG9rYW5kZXYuY29tIiwiYXVkIjoiamFtdW5hLWZ1dHVyZS1wYXJrIiwiZXhwIjoxNjk1NzAxMzU1fQ.gEvTgHrEgwwduNCN1BhTmBICfmDYwuq6AmKfaGnm7cc
CATEGORY_ID=6503e23c256a3a40044841fe
PRODUCT_ID=6509606a256a3a40044c8d87
TAX_COUNTRY=BD
STORE_OWNER_ID=11
CDREATOR_ID=18

#vendor1
STORE_OWNER_NAME=vendor1
Vendor_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxOSIsInVzZXIiOnsiaWQiOiIxOSIsImVtYWlsIjoiZmFyYXppK3ZlbmRvcjFAd2VkZXZzLmNvbSIsImZpcnN0TmFtZSI6IlZlbmRvciIsImxhc3ROYW1lIjoiT25lIiwiYWN0aXZlIjp0cnVlLCJpc0FkbWluIjpmYWxzZSwicm9sZSI6InZlbmRvciIsInN0cmF0ZWd5IjoidmVuZG9yIiwicmVsYXRlZFZlbmRvciI6eyJpZCI6IjExIiwic3RvcmVOYW1lIjoidmVuZG9yMSIsImFjdGl2ZSI6dHJ1ZX19LCJpYXQiOjE2OTYzODk2NDIsImlzcyI6ImFwaS5kb2thbmRldi5jb20iLCJhdWQiOiJqYW11bmEtZnV0dXJlLXBhcmsiLCJleHAiOjE2OTY5OTQ0NDJ9.Le0zlqeW9FthgyKtb6jBBXcDHFkPsmKfzmNrY_nYglQ

#vendor.20 using for API testing purpose For Admin
#STORE_OWNER_NAME=vendor.20

# authentication testing
#VENDOR_USERNAME=mipeye8740@fandsend.com
#VENDOR_PASSWORD=mipeye8740@fandsend.comA1
#STORE_OWNER_NAME=mip
#Vendor_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1MSIsInVzZXIiOnsiaWQiOiI1MSIsImVtYWlsIjoibWlwZXllODc0MEBmYW5kc2VuZC5jb20iLCJmaXJzdE5hbWUiOiJNaXAiLCJsYXN0TmFtZSI6IkV5ZSIsImFjdGl2ZSI6dHJ1ZSwiaXNBZG1pbiI6ZmFsc2UsInJvbGUiOiJ2ZW5kb3IiLCJzdHJhdGVneSI6InZlbmRvciIsInJlbGF0ZWRWZW5kb3IiOnsiaWQiOiIyOSIsInN0b3JlTmFtZSI6Im1pcCIsImFjdGl2ZSI6ZmFsc2V9fSwiaWF0IjoxNjk2Mzk0Njg3LCJpc3MiOiJhcGkuZG9rYW5kZXYuY29tIiwiYXVkIjoiamFtdW5hLWZ1dHVyZS1wYXJrIiwiZXhwIjoxNjk2OTk5NDg3fQ.3WF-34kUPNAgvYgOrr7f9VNK_n7BXlDpY4RvYCdWOCs

# TEST STRIPE payment gateway
STRIPE_TEST_PUBLISH_KEY=pk_test_MqI8Q7d283yWAbaNtNetvQco
STRIPE_TEST_SECRET_KEY=sk_test_6Qhd5mTdAu61DA4juhL39r4U
STRIPE_TEST_CLIENT_ID=ca_NrYiVGIU2GbPWUEaguNwWhmdxrzQpd3r
STRIPE_TEST_WEBHOOK_SECRET=whsec_f41LrbEKXBcHUYO7hLWNbUGi3wcMmt24
STRIPE_TEST_WEBHOOK_ID=we_1Nl78ZIgEcc99JQaHDiE6aFB

# TEST PAYPAL payment gateway
PAYPAL_SANDBOX_SECRET_KEY=EAv9MtOYMUpHecozn1y8EJjsmcVKHKIhCVrmVYB1-BNnZPvNuR_WkKS_nW8Aov8WaC3FROAr3SAPSDnC
PAYPAL_SANDBOX_CLIENT_ID=AUBEqunHK-1X7xerAxG_FOJpnIqFSLaf-V0rQTOKScpljzoKYRj-7jb4D2YbgpaExaVa4yjGER6pvWnB

# tax
TAX_NAME=az
TAX_COUNTRY=AZ
COUNTRY_STATE=Abseron Rayonu
    */