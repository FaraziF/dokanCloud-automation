import { expect, Page } from "@playwright/test";
import { isVisible } from "../framework/common-actions";
import { selector } from "./selectors";
import { BasePage } from "./basePage";
import { data } from "../../../utils/testdata";

let product: string;

export class VendorPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

/* export class VendorPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    } */


    async goToVendorLoginPage() {
        await this.page.goto('/vendor/login');
    }

    async goToVendorProductPage() {
        await this.page.goto(data.subUrls.vendor.product)
    }

    async createStandardProduct(productInfo: { productName: () => string; productDescription: () => string; sku: () => string; }): Promise<void> {
        await this.goToVendorProductPage();
        // ToDo: Need to validate page is loading perfectly
        
        await this.page.getByRole('link', { name: 'Add Product' }).click();

        await this.page.locator(selector.product.productName).fill(data.product.standard.productName());
        await this.page.getByLabel(selector.product.productDescription).fill(data.product.standard.productDescription());

        await this.page.locator(selector.product.productCategory).first().click();
        await this.page.getByText(selector.product.productCategorySelect).click();

        // await this.page.locator(selector.product.regularPrice).fill('200');
        await this.page.locator(selector.product.regularPrice).fill(data.product.standard.regularPrice());
        // await this.page.locator(selector.product.salePrice).fill('190');

        // ToDo: Need to implement tax
        // await this.page.locator(selector.product.taxClass).first().click();
        // await this.page.locator(selector.product.selectTax).click();

        await this.page.locator(selector.product.sku).fill(data.product.standard.sku());
        // await this.page.locator(selector.product.stockQuantity).fill('100');
        // await this.page.locator(selector.product.lowStockQuantity).nth(1).fill('90');

        await this.page.getByRole('button', { name: selector.common.create }).click();
        await this.waitForUrl(data.subUrls.vendor.product)
        await (expect(this.page.getByText(data.commonMessage.createSuccessMessage, {exact: true}))).toBeVisible()
    }

}