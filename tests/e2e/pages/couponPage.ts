import { expect, type Page } from '@playwright/test';
import { BasePage } from './basePage';
import { faker } from '@faker-js/faker';
import { endPoints } from '../../../utils/apiEndPoints';
import { readFileSync } from 'fs';

let product1: string;

const { PRODUCT_TITLE } = process.env;
const { CATEGORY_NAME } = process.env;

export class CouponPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToCouponCreationPage() {
    await this.page.goto(endPoints.naviagteCouponPage);
    await this.page.getByRole('link', { name: 'Coupons' }).click();
    await this.page.getByRole('link', { name: 'Add Coupon' }).click();
  }

  async setBasicDetails(couponTitle: string, couponDescription: string) {
    await this.page.getByPlaceholder('Coupon Title').fill(couponTitle);
    await this.page.getByRole('button', { name: 'Single Code' }).click();
    await this.page.getByRole('button', { name: 'Generate Code' }).click();
    await this.page.getByPlaceholder('Description').fill(couponDescription);
  }

  async configureDiscountAndShipping(discountAmount: string) {
    await this.page.getByPlaceholder('25.00').fill(discountAmount);
    await this.page.getByLabel('Free shipping in applied order').click();
  }

  async applyToSpecificProductsAndCategories(
    productTitle: string,
    categoryName: string
  ) {
    // const iteamLocator = this.page.locator("(//div[contains(@class,'relative flex')])[1]");
    // const buttonLocator = this.page.locator("(//button[contains(@class,'rounded border')])[2]");
    if (!PRODUCT_TITLE || !CATEGORY_NAME) {
      throw new Error('PRODUCT_TITLE or CATEGORY_NAME is not defined');
    }
    await this.page.getByLabel('Apply to specific products').click();
    await this.page.getByPlaceholder('Search Product').click();
    await this.page.keyboard.type(productTitle, { delay: 100 });
    await this.clickAndWaitForLoadState(
      "(//div[contains(@class,'relative flex')])[1]"
    );
    await this.clickAndWaitForLoadState(
      "(//button[contains(@class,'rounded border')])[2]"
    );
    // const productLocator = this.page.getByRole('img', { name: productTitle });
    // const productLocator = this.page.locator("(//div[contains(@class,'relative flex')])[1]");
    // // const productLocator = this.page.locator("label.flex.cursor-pointer");
    // await expect(productLocator).toBeVisible();
    // if (!await productLocator.isVisible()) {
    //     throw new Error(`Product ${productTitle} is not found`);
    // }
    // await productLocator.click();
    // // await this.page.pause()
    // await this.page.getByRole('button', { name: 'Add' }).click();

    await this.page.getByPlaceholder('Search Category').click();
    await this.page.keyboard.type(categoryName, { delay: 100 });

    await this.clickAndWaitForLoadState(
      "(//div[contains(@class,'relative flex')])[1]"
    );
    await this.clickAndWaitForLoadState(
      "(//button[contains(@class,'rounded border')])[2]"
    );
    // const categoryLocator = this.page.getByRole('img', { name: categoryName });
    // const categoryLocator = this.page.locator("(//div[contains(@class,'relative flex')])[1]");
    // await expect(categoryLocator).toBeVisible();
    // if (!await categoryLocator.isVisible()) {
    //     throw new Error(`Category ${categoryName} is not found`);
    // }
    // await categoryLocator.click();
    // await this.page.getByRole('button', { name: 'Add' }).click();
  }

  async setCustomerEligibility(
    customerEmail: string,
    usageLimitPerCustomer: string
  ) {
    await this.page.getByLabel('Customer Eligibility').click();
    await this.page.getByLabel('Specific customer').check();
    await this.page
      .getByPlaceholder('Type customer email and press')
      .fill(customerEmail);
    await this.page
      .getByPlaceholder('Type customer email and press')
      .press('Enter');
    await this.page.getByLabel('Limit usage per customer').check();
    await this.page
      .getByPlaceholder('30', { exact: true })
      .fill(usageLimitPerCustomer);
  }

  async setUsageLimits(
    minPurchaseAmount: string,
    overallUsageLimit: string,
    minimumQuantity: string
  ) {
    await this.page.getByLabel('Minimum purchase amount').check();
    await this.page.getByPlaceholder('0.00').fill(minPurchaseAmount);
    await this.page.getByLabel('Minimum quantity of items').check();
    await this.page
      .getByPlaceholder('10', { exact: true })
      .fill(minimumQuantity);
    await this.page.getByLabel('Usage limit per coupon').check();
    await this.page.locator('input[name="maxUse"]').fill(overallUsageLimit);
  }

  async validationPeriod(startDate: string, endDate: string) {
    await this.page.getByPlaceholder('Start Date').fill(startDate);
    await this.page.getByPlaceholder('End Date').fill(endDate);
  }

  async createCoupon(couponTitle: string) {
    await this.page.getByRole('button', { name: 'Create Coupon' }).click();
    await expect(
      this.page.getByText('Coupon has created successfully')
    ).toBeVisible();
    await this.page.getByRole('link', { name: 'Coupons' }).click();
    await this.page
      .getByPlaceholder('Press enter to search...')
      .fill(couponTitle);
    await this.page.keyboard.press('Enter');
    await this.page.getByText(couponTitle).click();
  }

  async verifyCouponDetails({
    couponTitle,
    couponDescription,
    discountAmount,
    productTitle,
    categoryName,
    customerEmail,
    usageLimits,
    usageLimitPerCustomer,
    minPurchaseAmount,
    overallUsageLimit,
  }: any) {
    await expect(this.page.getByPlaceholder('Coupon Title')).toHaveValue(
      couponTitle
    );
    await expect(this.page.getByPlaceholder('Description')).toHaveValue(
      couponDescription
    );
    await expect(this.page.getByPlaceholder('25.00')).toHaveValue(
      discountAmount
    );
    await expect(
      this.page.getByLabel('Free shipping in applied order')
    ).toBeChecked();
    await expect(this.page.getByText(productTitle ?? '')).toBeVisible();
    await expect(this.page.getByText(categoryName ?? '')).toBeVisible();
    await expect(this.page.getByLabel('Specific customer')).toBeChecked();
    await expect(this.page.getByText(customerEmail)).toBeVisible();
    await Promise.all([
      expect(this.page.getByLabel('Limit usage per customer')).toBeChecked(),
      expect(this.page.locator('input[name="maxUsePerCustomer"]')).toHaveValue(
        usageLimitPerCustomer
      ),
      expect(this.page.getByLabel('Minimum purchase amount')).toBeChecked(),
      expect(this.page.getByPlaceholder('0.00')).toHaveValue(minPurchaseAmount),
      expect(this.page.getByLabel('Usage limit per coupon')).toBeChecked(),
      expect(this.page.locator('input[name="maxUse"]')).toHaveValue(
        overallUsageLimit
      ),
    ]);
  }

  async editCoupon(couponTitle: string, updatedCouponTitle: string) {
    await this.page
      .getByRole('main')
      .getByRole('link', { name: 'Coupons' })
      .click();
    await this.page
      .getByPlaceholder('Press enter to search...')
      .fill(couponTitle);
    await this.page.keyboard.press('Enter');
    await this.page.getByText(couponTitle).click();
    await this.page.getByPlaceholder('Coupon Title').fill(updatedCouponTitle);
    await this.page.getByRole('button', { name: 'Update Coupon' }).click();
    await expect(
      this.page.getByText('Coupon has been updated successfully')
    ).toBeVisible();
  }

  async deleteCoupon(updatedCouponTitle: string) {
    await this.page
      .getByPlaceholder('Press enter to search...')
      .fill(updatedCouponTitle);
    await this.page.keyboard.press('Enter');
    await this.page
      .getByRole('row', { name: updatedCouponTitle })
      .getByRole('button')
      .first()
      .click();
    await this.page.getByRole('link', { name: 'Delete' }).click();
    await this.page.getByRole('button', { name: 'Yes' }).click();
    await expect(
      this.page.getByText('Coupon has been deleted successfully')
    ).toBeVisible();
  }

  //     async executeCouponScenario() {
  //         const couponPage = this;
  //         await couponPage.navigateToCouponCreationPage();
  //         const basicDetails = await couponPage.setBasicDetails();
  //         const discountAmount = await couponPage.configureDiscountAndShipping();
  //         const { product1, categoryName } = await couponPage.applyToSpecificProductsAndCategories();
  //         const customerEmail = await couponPage.setCustomerEligibility();
  //         const usageLimits = await couponPage.setUsageLimits();
  //         await couponPage.createCoupon(basicDetails.couponTitle);
  //         console.log("Product Title:", product1)
  //         // await couponPage.verifyCouponDetails({
  //         //     ...basicDetails, discountAmount, product1, categoryName, customerEmail, usageLimits
  //         // });
  //         const updatedCouponTitle = await couponPage.editCoupon(basicDetails.couponTitle);
  //         await couponPage.deleteCoupon(updatedCouponTitle);
  //     }
}
