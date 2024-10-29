import { expect, type Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { faker } from "@faker-js/faker";
import { endPoints } from "../../../utils/apiEndPoints";

let product1: string;

const { PRODUCT_TITLE }= process.env
const { CATEGORY_NAME }= process.env

export class CouponPage extends BasePage{
    // readonly page: Page;

    constructor(page: Page) {
        // this.page = page;
        super(page);
    }

    async navigateToCouponPage() {
      //  Navigate to the coupon creation page
    // await page.getByRole('link', { name: 'Dashboard' }).click();
    await this.page.goto(endPoints.naviagteCouponPage);
    await this.page.locator('a').filter({ hasText: 'Marketing' }).click();
    await this.page.getByRole('link', { name: 'Coupons' }).click();
    await this.page.getByRole('link', { name: 'Add Coupon' }).click();

    // Set basic coupon details
    const couponTitle = `Test Coupon ${faker.random.word()}`;
    await this.page.getByPlaceholder('Coupon Title').fill(couponTitle);
    await this.page.getByRole('button', { name: 'Single Code' }).click();
    await this.page.getByRole('button', { name: 'Generate Code' }).click();
    // const couponCode = await this.page.getByPlaceholder('Coupon Code').inputValue();
    const couponDescription = faker.lorem.paragraph();
    await this.page.getByPlaceholder('Description').fill(couponDescription);
    // Set discount amount
    const discountAmount = '5';
    await this.page.getByPlaceholder('25.00').fill(discountAmount);

    // Enable free shipping
    await this.page.getByLabel('Free shipping in applied order').click();

    // Apply coupon to specific products
    const product1 = PRODUCT_TITLE;
    const product2 = 'cap(vendor one)';
    await this.page.getByLabel('Apply to specific products').click();

    // await this.page.getByPlaceholder('Search Product').click();
    // await this.page.keyboard.type(product1 ?? '', { delay: 20 });
    // await this.page.getByLabel(`${product1}`).check();

    // await this.page.getByPlaceholder('Search Product').click();
    // await this.page.keyboard.type(product2, { delay: 10 });
    // await this.page.getByLabel(`${product2}$`).check();
    await this.page.getByRole('button', { name: 'Add' }).click();

    // Apply coupon to specific category
    const categoryName = CATEGORY_NAME;
    await this.page.getByPlaceholder('Search Category').fill(categoryName ?? '');
    await this.page.getByLabel(categoryName ?? '').check();
    await this.page.getByRole('button', { name: 'Add' }).click();

    // Set customer eligibility
    await this.page.getByLabel('Customer Eligibility').click();
    await this.page.getByLabel('Specific customer').check();
    const customerEmail = 'farazi+customer1@wedevs.com';
    await this.page.getByPlaceholder('Type customer email and press').fill(customerEmail);
    await this.page.getByPlaceholder('Type customer email and press').press('Enter');

    // Set usage limits
    await this.page.getByLabel('Limit usage per customer').check();
    const usageLimitPerCustomer = '5';
    await this.page.getByPlaceholder('30', { exact: true }).fill(usageLimitPerCustomer);

    // Set minimum requirements
    await this.page.getByLabel('Minimum purchase amount').check();
    const minPurchaseAmount = '5';
    await this.page.getByPlaceholder('0.00').fill(minPurchaseAmount);
    await this.page.getByLabel('Minimum quantity of items').check();
    // const minQuantity = '1';
    // await this.page.getByPlaceholder('10', { exact: true }).fill(minQuantity);

    // Set overall usage limit
    await this.page.getByLabel('Usage limit per coupon').check();
    const overallUsageLimit = '5';
    await this.page.locator('input[name="maxUse"]').fill(overallUsageLimit);

    // Exclude usage
    // await this.page.getByLabel('This coupon cannot be used in conjunction with other coupons').check();
    // await this.page.locator('#disallowConjunction').click();
    // await this.page.getByText('This coupon cannot be used in conjunction with other coupons').click();

    // Create the coupon
    // await this.page.getByRole('button', { name: 'Action' }).click();
    // await this.page.getByRole('link', { name: 'Create Coupon' }).click();
    await this.page.getByRole('button', { name: 'Create Coupon' }).click();

    // Verify coupon creation
    await expect(this.page.getByText('Coupon has created successfully')).toBeVisible();

    // Additional verification steps to ensure data is saved correctly
    await this.page.getByRole('link', { name: 'Coupons' }).click();
    console.log(couponTitle);
    await this.page.getByPlaceholder('Press enter to search...').fill(couponTitle);
    await this.page.keyboard.press('Enter');
    // await this.page.getByRole('row', { name: couponTitle }).getByRole('link', { name: 'Edit' }).click();
    await this.page.getByText(couponTitle).click();
    await this.textClickAndWaitForLoadState(couponTitle);

    // Verify basic coupon details
    await expect(this.page.getByPlaceholder('Coupon Title')).toHaveValue(couponTitle);
    // await expect(this.page.getByPlaceholder('Coupon Code')).toHaveValue(couponCode);
    await expect(this.page.getByPlaceholder('Description')).toHaveValue(couponDescription);

    // Verify discount amount
    await expect(this.page.getByPlaceholder('25.00')).toHaveValue(discountAmount);

    // Verify free shipping
    await expect(this.page.getByLabel('Free shipping in applied order')).toBeChecked();

    // Verify applied products
    await expect(this.page.getByText(product1 ?? '')).toBeVisible();
    // await expect(this.page.getByText(product2)).toBeVisible();

    // Verify applied category
    await expect(this.page.getByText(CATEGORY_NAME ?? '')).toBeVisible();

    // Verify customer eligibility
    await expect(this.page.getByLabel('Specific customer')).toBeChecked();
    await expect(this.page.getByText(customerEmail)).toBeVisible();

    // Verify usage limits
    await expect(this.page.getByLabel('Limit usage per customer')).toBeChecked();
    await expect(this.page.locator('input[name="maxUsePerCustomer"]')).toHaveValue(usageLimitPerCustomer);

    // Verify minimum requirements
    await expect(this.page.getByLabel('Minimum purchase amount')).toBeChecked();
    await expect(this.page.getByPlaceholder('0.00')).toHaveValue(minPurchaseAmount);
    // await expect(this.page.getByLabel('Minimum quantity of items')).toBeChecked();
    // await expect(this.page.getByPlaceholder('10')).toHaveValue(minQuantity);

    // Verify overall usage limit
    await expect(this.page.getByLabel('Usage limit per coupon')).toBeChecked();
    await expect(this.page.locator('input[name="maxUse"]')).toHaveValue(overallUsageLimit);

    // Verify exclude usage
    // await expect(this.page.getByText('This coupon cannot be used in')).toBeChecked();
    // await expect(this.page.locator('#disallowConjunction')).toBeChecked();

    // edit coupon
    await this.page.getByRole('main').getByRole('link', { name: 'Coupons' }).click();
    await this.page.getByPlaceholder('Press enter to search...').fill(couponTitle);
    await this.page.keyboard.press('Enter');
    // await this.page.getByRole('row', { name: couponTitle }).getByRole('link', { name: 'Edit' }).click();
    const updatedCouponTitle = 'Updated coupon title';
    await this.page.getByText(couponTitle).click();
    await this.page.getByPlaceholder('Coupon Title').fill(updatedCouponTitle);
    await this.page.getByRole('button', { name: 'Update Coupon' }).click();
    await expect(this.page.getByText('Coupon has been updated successfully')).toBeVisible();

    // delete coupon
    // await this.page.getByRole('main').getByRole('link', { name: 'Coupons' }).click();
    await this.page.getByPlaceholder('Press enter to search...').fill(updatedCouponTitle);
    await this.page.keyboard.press('Enter');

    await this.page.getByRole('row', { name: updatedCouponTitle }).getByRole('button').click();
    await this.page.getByRole('link', { name: 'Delete' }).click();
    // await this.page.getByRole('heading', { name: 'Are you sure want to delete' }).click();
    await this.page.getByRole('button', { name: 'Yes' }).click();
    // await this.page.getByText('This coupon has been deleted').click();

    await expect(this.page.getByText('Coupon has been deleted successfully')).toBeVisible();


}

}

