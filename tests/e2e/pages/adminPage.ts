import { Page, expect } from "@playwright/test";
import { isVisible } from "../framework/common-actions";
import { selector } from "./selectors";
import { BasePage } from "./basePage";
import { data } from "../../../utils/testdata";

export class AdminPage extends BasePage {
    visualComparisons() {
        throw new Error('Method not implemented.');
    }

    constructor(page: Page) {
        super(page);
    }

    // Navigation
    async goToSidebar() {
        await this.page.locator('a').filter({ hasText: /^Products$/ }).click();
        await this.page.locator('a').filter({ hasText: /^Products$/ }).click();
        await this.page.getByRole('link', { name: 'All Products' }).click();
        await this.page.getByRole('link', { name: 'Categories' }).click();
        await this.page.getByRole('link', { name: 'Brands' }).click();
    }

    async goToCategoryPage() {
        // await this.goIfNotThere(data.subUrls.admin.category)
        await this.page.goto(data.subUrls.admin.category)
    }

    async goToBrandPage() {
        await this.page.goto(data.subUrls.admin.brand)
    }
    
    async goToProductPage() {
        await this.page.goto(data.subUrls.admin.product)
    }

    async goToAdminDashboard() {
        await this.page.goto(data.subUrls.admin.dashboard);
    }

    async dashbaordElementValidation() {
        this.page.getByRole('heading', { name: 'Today' })
        this.page.getByText('Sales Report')
        this.page.getByRole('heading', { name: 'To-Do' })
        this.page.getByText('Top Selling Product')
    }

    async createNewCategory(category: any) {
        await this.goToCategoryPage();
        await this.page.getByRole('link', { name: selector.admin.category.addNew }).click();
        await this.page.locator(selector.admin.category.titleField).fill(category.insertName());
        
        //ToDo: Unique category name validation
        //ToDo: Category add in parent category
        // await this.page.locator('div').filter({ hasText: /^Select one$/ }).first().click();
        // await this.page.getByText('demo-3').click();
        
        await this.page.getByLabel(selector.admin.category.descriptionField).fill(category.insertDescription());
        await this.page.getByRole('button', { name: selector.common.create }).click();
        await this.waitForUrl(data.subUrls.admin.category)
        await expect(this.page.getByText(data.commonMessage.createSuccessMessage, { exact: true })).toBeVisible()
    }

    async editCategory(category: any) {
        await this.goToCategoryPage();
        await this.page.locator(selector.admin.category.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.editLink }).click();
        await this.page.locator(selector.admin.category.titleField).fill(category.updateName());
        await this.page.getByRole('button', { name: selector.common.update }).click();
        // this.page.on('dialog', dialog => dialog.accept());
        await expect(this.page.getByText(data.commonMessage.updateSuccessMessage, { exact: true })).toBeVisible()
    }

    async deleteCategory(category: any) {
        await this.goToCategoryPage();
        await this.page.getByRole('link', { name: selector.admin.category.backListPage }).click();
        await this.page.locator(selector.admin.category.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.deleteLink }).click();
        await expect(this.page.getByText(data.commonMessage.deleteSuccessMessage)).toBeVisible()
    }

    async createBrand(brand: any) {
        await this.goToBrandPage()
        await this.page.getByRole('link', { name: selector.admin.brand.addNew }).click();
        await this.page.locator(selector.admin.brand.name).fill(brand.insertName());
        await this.page.getByRole('button', { name: selector.common.create }).click();
        await this.waitForUrl(data.subUrls.admin.brand)
        await (expect(this.page.getByText(data.commonMessage.createSuccessMessage, { exact: true })).toBeVisible())
    }
    /* async createBrand(brand: any): Promise<boolean> {
        await this.goToBrandPage()
        await this.page.getByRole('link', { name: selector.admin.brand.addNew }).click();
        await this.page.locator(selector.admin.brand.name).fill(brand.insertName());
        await this.page.getByRole('button', { name: selector.admin.brand.save }).click();
        // await (expect(this.page.getByText(data.commonMessage.createSuccessMessage, { exact: true })).toBeVisible())
        return await isVisible(this.page, data.commonMessage.createSuccessMessage)
    } */
    async editBrand(brand: any) {
        await this.goToBrandPage()
        await this.page.locator(selector.admin.brand.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.editLink }).click();
        await this.page.locator(selector.admin.brand.name).fill(brand.updateName())
        await this.page.getByRole('button', { name: selector.common.update }).click();
        await this.waitForUrl(data.subUrls.admin.brand)
        // this.page.on('dialog', dialog => dialog.accept());
        await expect(this.page.getByText(data.commonMessage.updateSuccessMessage, { exact: true })).toBeVisible()
    }
    async deleteBrand() {
        await this.goToBrandPage()
        await this.page.locator(selector.admin.brand.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.deleteLink }).click();
        await expect(this.page.getByText(data.commonMessage.deleteSuccessMessage, { exact: true })).toBeVisible()
    }

    async createStandardProduct(productInfo: { productName: () => string; productDescription: () => string; sku: () => string; }): Promise<void> {
        await this.goToProductPage()

        await this.page.getByRole('link', { name: selector.product.addNew }).click();

        await this.page.locator(selector.product.productName).fill(data.product.standard.productName());
        await this.page.getByLabel(selector.product.productDescription).fill(data.product.standard.productDescription());

        await this.page.locator(selector.product.productCategory).first().click();
        await this.page.getByText(selector.product.productCategorySelect).click();
        
        await this.page.locator(selector.product.soldBy).nth(1).click();
        await this.page.locator(selector.product.vendorName).nth(1).fill(data.commonMessage.vendorName);
        await this.page.getByText(data.commonMessage.vendorName, { exact: true }).click();

        // await this.page.locator(selector.product.regularPrice).fill('200');
        await this.page.locator(selector.product.regularPrice).fill(data.product.standard.regularPrice());
        // await this.page.locator(selector.product.salePrice).fill('190');
        
        // ToDo: Need to implement tax
        // await this.page.locator(selector.product.taxClass).first().click();
        // await this.page.locator(selector.product.selectTax).click();

        await this.page.locator(selector.product.sku).fill(data.product.standard.sku());

        // ToDo: enable product stock management
        // await this.page.locator(selector.product.stockQuantity).fill('100');
        // await this.page.locator(selector.product.lowStockQuantity).nth(1).fill('90');


        await this.page.getByRole('button', { name: selector.common.create }).click();
        await this.waitForUrl(data.subUrls.admin.product)
        await (expect(this.page.getByText(data.commonMessage.createSuccessMessage, {exact: true}))).toBeVisible()
    }

    async editProduct(product: any) {
        await this.goToProductPage()
        await this.page.locator(selector.common.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.editLink }).click()
        await this.page.locator(selector.product.productName).fill(product.updateName())
        await this.page.getByRole('button', { name: selector.common.update }).click();
        // this.page.on('dialog', dialog => dialog.accept());
        await (expect(this.page.getByText(data.commonMessage.updateSuccessMessage, { exact: true }))).toBeVisible()
    }

    async deleteProduct() {
        await this.goToProductPage()
        await this.page.locator(selector.common.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.deleteLink }).click()
        await expect(this.page.getByText(data.commonMessage.deleteSuccessMessage, { exact: true })).toBeVisible()
    }
    
}