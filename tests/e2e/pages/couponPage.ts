import { expect, type Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { faker } from "@faker-js/faker";
import { endPoints } from "../../../utils/apiEndPoints";
import { readFileSync } from 'fs';


let product1: string;

const { PRODUCT_TITLE }= process.env
const { CATEGORY_NAME }= process.env

export class CouponPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async navigateToCouponCreationPage() {
        await this.page.goto(endPoints.naviagteCouponPage);
        await this.page.locator('a').filter({ hasText: 'Marketing' }).click();
        await this.page.getByRole('link', { name: 'Coupons' }).click();
        await this.page.getByRole('link', { name: 'Add Coupon' }).click();
    }

    async setBasicDetails() {
        const couponTitle = `Test Coupon ${faker.random.word()}`;
        await this.page.getByPlaceholder('Coupon Title').fill(couponTitle);
        await this.page.getByRole('button', { name: 'Single Code' }).click();
        await this.page.getByRole('button', { name: 'Generate Code' }).click();
        const couponDescription = faker.lorem.paragraph();
        await this.page.getByPlaceholder('Description').fill(couponDescription);
        return { couponTitle, couponDescription };
    }

    async configureDiscountAndShipping() {
        const discountAmount = '5';
        await this.page.getByPlaceholder('25.00').fill(discountAmount);
        await this.page.getByLabel('Free shipping in applied order').click();
        return discountAmount;
    }

    async applyToSpecificProductsAndCategories() {
        if (!PRODUCT_TITLE || !CATEGORY_NAME) {
            throw new Error('PRODUCT_TITLE or CATEGORY_NAME is not defined');
        }
        const product1 = PRODUCT_TITLE;
        const categoryName = CATEGORY_NAME;
        await this.page.getByLabel('Apply to specific products').click();
        await this.page.getByPlaceholder('Search Product').click();
        await this.page.keyboard.type(product1, { delay: 100 });
        const productLocator = this.page.getByRole('img', { name: product1 });
        if (!await productLocator.isVisible()) {
            throw new Error(`Product ${product1} is not found`);
        }
        await productLocator.click();
        await this.page.getByRole('button', { name: 'Add' }).click();

        await this.page.getByPlaceholder('Search Category').click();
        await this.page.keyboard.type(categoryName, { delay: 100 });
        const categoryLocator = this.page.getByRole('img', { name: categoryName });
        if (!await categoryLocator.isVisible()) {
            throw new Error(`Category ${categoryName} is not found`);
        }
        await categoryLocator.click();
        await this.page.getByRole('button', { name: 'Add' }).click();
        return { product1, categoryName };
    }

    async setCustomerEligibility() {
        await this.page.getByLabel('Customer Eligibility').click();
        await this.page.getByLabel('Specific customer').check();
        const customerEmail = 'farazi+customer1@wedevs.com';
        await this.page.getByPlaceholder('Type customer email and press').fill(customerEmail);
        await this.page.getByPlaceholder('Type customer email and press').press('Enter');
        return customerEmail;
    }

    async setUsageLimits() {
        await this.page.getByLabel('Limit usage per customer').check();
        const usageLimitPerCustomer = '5';
        await this.page.getByPlaceholder('30', { exact: true }).fill(usageLimitPerCustomer);
        await this.page.getByLabel('Minimum purchase amount').check();
        const minPurchaseAmount = '5';
        await this.page.getByPlaceholder('0.00').fill(minPurchaseAmount);
        await this.page.getByLabel('Usage limit per coupon').check();
        const overallUsageLimit = '5';
        await this.page.locator('input[name="maxUse"]').fill(overallUsageLimit);
        return { usageLimitPerCustomer, minPurchaseAmount, overallUsageLimit };
    }

    async validationPeriod() {
        const startDate = '2023-05-01';
        const endDate = '2023-05-31';
        await this.page.getByPlaceholder('Start Date').fill(startDate);
        await this.page.getByPlaceholder('End Date').fill(endDate);
        return { startDate, endDate };
    }

    async createCoupon(couponTitle: string) {
        await this.page.getByRole('button', { name: 'Create Coupon' }).click();
        await expect(this.page.getByText('Coupon has created successfully')).toBeVisible();
        await this.page.getByRole('link', { name: 'Coupons' }).click();
        await this.page.getByPlaceholder('Press enter to search...').fill(couponTitle);
        await this.page.keyboard.press('Enter');
        await this.page.getByText(couponTitle).click();
        // await this.textClickAndWaitForLoadState(couponTitle);
    }

    async verifyCouponDetails({ couponTitle, couponDescription, discountAmount, product1, categoryName, customerEmail, usageLimits }: any) {
        await expect(this.page.getByPlaceholder('Coupon Title')).toHaveValue(couponTitle);
        await expect(this.page.getByPlaceholder('Description')).toHaveValue(couponDescription);
        await expect(this.page.getByPlaceholder('25.00')).toHaveValue(discountAmount);
        await expect(this.page.getByLabel('Free shipping in applied order')).toBeChecked();
        await expect(this.page.getByText(product1 ?? '')).toBeVisible();
        await expect(this.page.getByText(categoryName ?? '')).toBeVisible();
        await expect(this.page.getByLabel('Specific customer')).toBeChecked();
        await expect(this.page.getByText(customerEmail)).toBeVisible();
        await Promise.all([
            expect(this.page.getByLabel('Limit usage per customer')).toBeChecked(),
            expect(this.page.locator('input[name="maxUsePerCustomer"]')).toHaveValue(usageLimits.usageLimitPerCustomer),
            expect(this.page.getByLabel('Minimum purchase amount')).toBeChecked(),
            expect(this.page.getByPlaceholder('0.00')).toHaveValue(usageLimits.minPurchaseAmount),
            expect(this.page.getByLabel('Usage limit per coupon')).toBeChecked(),
            expect(this.page.locator('input[name="maxUse"]')).toHaveValue(usageLimits.overallUsageLimit)
        ]);
    }

    async editCoupon(couponTitle: string) {
        const updatedCouponTitle = 'Updated coupon title';
        await this.page.getByRole('main').getByRole('link', { name: 'Coupons' }).click();
        await this.page.getByPlaceholder('Press enter to search...').fill(couponTitle);
        await this.page.keyboard.press('Enter');
        await this.page.getByText(couponTitle).click();
        await this.page.getByPlaceholder('Coupon Title').fill(updatedCouponTitle);
        await this.page.getByRole('button', { name: 'Update Coupon' }).click();
        await expect(this.page.getByText('Coupon has been updated successfully')).toBeVisible();
        return updatedCouponTitle;
    }

    async deleteCoupon(couponTitle: string) {
        await this.page.getByPlaceholder('Press enter to search...').fill(couponTitle);
        await this.page.keyboard.press('Enter');
        await this.page.getByRole('row', { name: couponTitle }).getByRole('button').click();
        await this.page.getByRole('link', { name: 'Delete' }).click();
        await this.page.getByRole('button', { name: 'Yes' }).click();
        await expect(this.page.getByText('Coupon has been deleted successfully')).toBeVisible();
    }

    async executeCouponScenario() {
        const couponPage = this;
        await couponPage.navigateToCouponCreationPage();
        const basicDetails = await couponPage.setBasicDetails();
        const discountAmount = await couponPage.configureDiscountAndShipping();
        const { product1, categoryName } = await couponPage.applyToSpecificProductsAndCategories();
        const customerEmail = await couponPage.setCustomerEligibility();
        const usageLimits = await couponPage.setUsageLimits();
        await couponPage.createCoupon(basicDetails.couponTitle);
        console.log("Product Title:", product1)
        await couponPage.verifyCouponDetails({ 
            ...basicDetails, discountAmount, product1, categoryName, customerEmail, usageLimits 
        });
        const updatedCouponTitle = await couponPage.editCoupon(basicDetails.couponTitle);
        await couponPage.deleteCoupon(updatedCouponTitle);
    }
}


