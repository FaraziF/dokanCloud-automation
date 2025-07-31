import { test, request, expect, type Page } from '@playwright/test';
import { endPoints } from '../../../utils/apiEndPoints';
import { Customer } from '../pages/customer';
import { ApiUtils } from '../../../utils/apiUtils';
import { user, data } from '../../../utils/testdata';
import { CustomerMyaccountPage } from '../pages/customerMyaccountPage';

let page: Page;
let apiUtils: ApiUtils;
let customer: Customer;
let customerMyaccountPage: CustomerMyaccountPage;

test.use({ storageState: data.auth.customerAuthFile });

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext({});
  page = await context.newPage();
  customerMyaccountPage = new CustomerMyaccountPage(page);
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Customer Dashbaord', () => {
  test('Personal profile page validate', async () => {
    await page.goto('https://farazi.staging.dokandev.com/customers/account');
    await expect(
      page.getByRole('heading', { name: 'My Account' })
    ).toBeVisible();
    // personal profile
    await expect(
      page.getByRole('heading', { name: 'Personal Profile' })
    ).toBeVisible();
    await page.getByRole('link', { name: 'Edit' }).click();
    await page.waitForURL(
      'https://farazi.staging.dokandev.com/customers/profile'
    );
    await expect(
      page.locator('label').filter({ hasText: 'Upload new picture' })
    ).toBeVisible();

    // back to dashboard page

    // await customerMyaccountPage.goToCustomerMyaccountPage;
    await page.getByRole('link', { name: 'My Account ' }).click();
    await expect(
      page.getByRole('heading', { name: 'My Account' })
    ).toBeVisible();

    //home validation
    // await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();
    await page.getByRole('button', { name: 'Edit' }).click();
    await expect(page.getByRole('button', { name: 'Update' })).toBeVisible();
    await page.getByRole('button', { name: 'Cancel' }).click();

    // back to dashboard page
    // await page.getByRole('link', { name: 'My Account ' }).click();
    // await customerMyaccountPage.goToCustomerMyaccountPage;
    // await page.getByRole('link', { name: 'My Account ' }).click();
    // await expect(
    //   page.getByRole('heading', { name: 'My Account' })
    // ).toBeVisible();

    // recent order
    await expect(
      page.getByRole('heading', { name: 'Recent Orders' })
    ).toBeVisible();
    await page.getByRole('link', { name: 'Order Details' }).first().click();
    await expect(
      page.getByRole('heading', { name: 'Order Details' })
    ).toBeVisible();

    // await customerMyaccountPage.goToCustomerMyaccountPage;
    await page.getByRole('link', { name: 'My Account ' }).click();
    await expect(
      page.getByRole('heading', { name: 'My Account' })
    ).toBeVisible();

    // test('Addresses Edit', async () => {});
    // test('Recent Order', async () => {});
  });
});
