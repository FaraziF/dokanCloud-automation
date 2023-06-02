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
        await this.page.goto(data.subUrls.vendor.productPage)
    }

    async createStandardProduct(productInfo: { productName: () => string; productDescription: () => string; sku: () => string; }): Promise<void> {
        await this.goToVendorProductPage();
        // ToDo: Need to validate page is loading perfectly
        
        await this.page.getByRole('link', { name: 'Add Product' }).click();

        await this.page.locator(selector.product.productName).fill(data.product.standard.productName());
        await this.page.getByLabel(selector.product.productDescription).fill(data.product.standard.productDescription());

        await this.page.locator(selector.product.productCategory).first().click();
        await this.page.getByText(selector.product.productCategorySelect).click();

        await this.page.locator(selector.product.regularPrice).fill('200');
        await this.page.locator(selector.product.salePrice).fill('190');

        await this.page.locator(selector.product.taxClass).first().click();
        await this.page.locator(selector.product.selectTax).click();

        await this.page.locator(selector.product.sku).fill(data.product.standard.sku());
        await this.page.locator(selector.product.stockQuantity).fill('100');
        await this.page.locator(selector.product.lowStockQuantity).nth(1).fill('90');

        

        await this.page.getByRole('button', { name: 'Save' }).click();
        await expect(this.page.getByRole('button', { name: 'Filter' })).toBeVisible()
        await (expect(this.page.getByText("Created successfully")).toBeVisible())
    }

}