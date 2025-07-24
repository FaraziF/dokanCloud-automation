import { test, request, expect, type Page } from '@playwright/test';
import { endPoints } from '../../../utils/apiEndPoints';
import { Customer } from '../pages/customer';
import { ApiUtils } from '../../../utils/apiUtils';

let page: Page;
let apiUtils: ApiUtils;
let customer: Customer;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext({});
  page = await context.newPage();
  customer = new Customer(page);
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Customer Security', () => {
  test('Without login try to access my account', async () => {
    await page.goto(endPoints.customerHomePage);
    await expect(page).toHaveURL(endPoints.customerHomePage);
    await page.goto(endPoints.customerAccountPage);
    await page.waitForURL(endPoints.customerLoginPage);
    await customer.verifyLoginPageFunctionality();
  });
});
