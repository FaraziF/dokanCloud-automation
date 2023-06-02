import { Page, expect } from "@playwright/test";
import { isVisible } from "../framework/common-actions";
import { selector } from "./selectors";
import { BasePage } from "./basePage";
import { data } from "../../../utils/testdata";

export class AdminPage extends BasePage {

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

    // async goToCategoryPage() {
    //     await this.page.goto(data.subUrls.admin.category)

    // }
    async createNewCategory(category: any) {
        await this.goToCategoryPage();
        await this.page.getByRole('link', { name: selector.admin.category.addNew }).click();
        await this.page.locator(selector.admin.category.titleField).fill(category.insertName());
        
        //ToDo: Unique category name validation

        //ToDo: Category add in parent category
        // await this.page.locator('div').filter({ hasText: /^Select one$/ }).first().click();
        // await this.page.getByText('demo-3').click();
        
        await this.page.getByLabel(selector.admin.category.descriptionField).fill(category.insertDescription());
        await this.page.getByRole('button', { name: selector.admin.category.save }).click();
        // await (expect (this.page.getByRole('link', { name: selector.admin.category.addNew })).toBeVisible());
        await expect(this.page.getByText(data.commonMessage.createSuccessMessage, { exact: true })).toBeVisible()
    }

    async editCategory(category: any) {
        await this.goToCategoryPage();
        await this.page.locator(selector.admin.category.dropDown).click()
        await this.page.getByRole('link', { name: selector.admin.category.edit }).click();
        await this.page.locator(selector.admin.category.titleField).fill(category.updateName());
        await this.page.getByRole('button', { name: selector.admin.category.save }).click();
        await expect(this.page.getByText(data.commonMessage.updateSuccessMessage, { exact: true })).toBeVisible()
    }

    async deleteCategory(category: any) {
        await this.goToCategoryPage();
        await this.page.getByRole('link', { name: selector.admin.category.backListPage }).click();
        await this.page.locator(selector.admin.category.dropDown).click()
        await this.page.getByRole('link', { name: selector.admin.category.delete }).click();
        await expect(this.page.getByText(data.commonMessage.deleteSuccessMessage)).toBeVisible()
    }

    async createBrand(brand: any) {
        await this.goToBrandPage()
        await this.page.getByRole('link', { name: selector.admin.brand.addNew }).click();
        await this.page.locator(selector.admin.brand.name).fill(brand.insertName());
        await this.page.getByRole('button', { name: selector.admin.brand.save }).click();
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
        await this.page.getByRole('link', { name: selector.admin.brand.edit }).click();
        await this.page.locator(selector.admin.brand.name).fill(brand.updateName())
        await this.page.getByRole('button', { name: selector.admin.brand.save }).click();
        await expect(this.page.getByText(data.commonMessage.updateSuccessMessage, { exact: true })).toBeVisible()
    }
    async deleteBrand() {
        await this.goToBrandPage()
        await this.page.locator(selector.admin.brand.dropDown).click()
        await this.page.getByRole('link', { name: selector.admin.brand.delete }).click();
        await expect(this.page.getByText(data.commonMessage.deleteSuccessMessage, { exact: true })).toBeVisible()
    }

    async createStandardProduct(productInfo: { productName: () => string; productDescription: () => string; sku: () => string; }): Promise<void> {
        await this.goToProductPage()

        await this.page.getByRole('link', { name: 'Add Product' }).click();

        await this.page.locator(selector.product.productName).fill(data.product.standard.productName());
        await this.page.getByLabel(selector.product.productDescription).fill(data.product.standard.productDescription());

        await this.page.locator(selector.product.productCategory).first().click();
        await this.page.getByText(selector.product.productCategorySelect).click();

        await this.page.locator("(//div[@class='text - sm css - hlgwow']//div)[3]").click();
        await this.page.locator('#react-select-6-input').fill('farazi');
        await this.page.locator('#react-select-6-input').press('Enter');

        await this.page.locator(selector.product.regularPrice).fill('200');
        await this.page.locator(selector.product.salePrice).fill('190');

        await this.page.locator(selector.product.taxClass).first().click();
        await this.page.locator(selector.product.selectTax).click();

        await this.page.locator(selector.product.sku).fill(data.product.standard.sku());
        await this.page.locator(selector.product.stockQuantity).fill('100');
        await this.page.locator(selector.product.lowStockQuantity).nth(1).fill('90');



        await this.page.getByRole('button', { name: 'Save' }).click();
        await expect(this.page.getByRole('button', { name: 'Filter' })).toBeVisible()
        await expect(this.page.getByText("Created successfully")).toBeVisible()
    }

    async editProduct(product: any) {
        await this.goToProductPage()
        await this.page.locator(selector.common.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.edit }).click()
        await this.page.locator(selector.product.productName).fill(product.updateName())
        await this.page.getByRole('button', { name: selector.product.updateButton }).click();
        await (expect(this.page.getByText(data.commonMessage.updateSuccessMessage, { exact: true }))).toBeVisible()
    }

    async deleteProduct() {
        await this.goToProductPage()
        await this.page.locator(selector.common.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.delete }).click()
        await expect(this.page.getByText(data.commonMessage.deleteSuccessMessage, { exact: true })).toBeVisible()
    }
    
}