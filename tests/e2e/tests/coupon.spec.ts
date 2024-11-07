import { test, request, expect, type Page } from "@playwright/test";
import { CouponPage } from "../pages/couponPage";
import { ApiUtils } from "../../../utils/apiUtils";
import { faker } from "@faker-js/faker";
import { user, data } from "../../../utils/testdata";
import { start } from "repl";

const { PRODUCT_TITLE }= process.env
const { CATEGORY_NAME }= process.env

let page: Page;
let apiUtils: ApiUtils;
let couponPage: CouponPage;
let couponTitle: string = faker.lorem.word();
let updatedCouponTitle: string = `Updated Coupon ${faker.random.word()}`;
let couponDescription: string = faker.lorem.paragraph();
let discountAmount = '50';
let productTitle: string = PRODUCT_TITLE || 'default-product-title';
let categoryName: string = CATEGORY_NAME || 'default-category-name';
let customerEmail: string = 'farazi+customer1@wedevs.com';
let usageLimitPerCustomer:string = '1';
let minPurchaseAmount:string = '100';
let overallUsageLimit:string = '5';
let minimumQuantity: string = '20';
let usageLimits: string = '1';
let startdate: string = '2022-01-01';
let enddate: string = '2023-01-01';

test.use({ storageState: data.auth.vendorAuthFile });

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({});
    page = await context.newPage();
    couponPage = new CouponPage(page);
    apiUtils = new ApiUtils(await request.newContext());
});

test.afterAll(async () => {
    await page.close();
});




test.describe('Coupon Feature', () => {
  test('Coupon Create, Update and Delete With Validation', async () => {
    await couponPage.navigateToCouponCreationPage();
    await couponPage.setBasicDetails(couponTitle, couponDescription);
    await couponPage.configureDiscountAndShipping(discountAmount);
    // await couponPage.applyToSpecificProductsAndCategories(productTitle, categoryName);
    await couponPage.setCustomerEligibility(customerEmail, usageLimitPerCustomer);
    await couponPage.setUsageLimits(minPurchaseAmount, overallUsageLimit, minimumQuantity);
    // await couponPage.validationPeriod(startdate, enddate);
    await couponPage.createCoupon(couponTitle);
    // await couponPage.verifyCouponDetails({couponTitle, couponDescription, discountAmount, productTitle, categoryName, customerEmail, usageLimits, usageLimitPerCustomer, minPurchaseAmount, overallUsageLimit, minimumQuantity, startdate, enddate});
    await couponPage.editCoupon(couponTitle, updatedCouponTitle);
    await couponPage.deleteCoupon(updatedCouponTitle);

    // await couponPage.executeCouponScenario();
  });
});