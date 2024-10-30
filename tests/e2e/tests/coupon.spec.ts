import { test, request, expect, type Page } from "@playwright/test";
import { CouponPage } from "../pages/couponPage";
import { ApiUtils } from "../../../utils/apiUtils";
import { faker } from "@faker-js/faker";
import { user, data } from "../../../utils/testdata";


let page: Page;
let apiUtils: ApiUtils;
let couponPage: CouponPage;

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




test.describe('Coupon Creation', () => {
  test('Create a new coupon with specific conditions', async ({ page }) => {

    // await couponPage.navigateToCouponPage();
    await couponPage.executeCouponScenario();
  });
});