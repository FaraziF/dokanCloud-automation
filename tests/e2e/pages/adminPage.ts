import { Page, expect } from "@playwright/test";
import { isVisible } from "../framework/common-actions";
import { selector } from "./selectors";
import { BasePage } from "./basePage";
import { data } from "../../../utils/testdata";
import { faker } from "@faker-js/faker";

export class AdminPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async goToAdminDashboard() {
        await this.page.goto(data.subUrls.admin.dashboard);
        await expect(this.page).toHaveURL(data.subUrls.admin.dashboard) 
        await this.errorCheck()
    }

    async goToProductPage() {
        await this.goToAdminDashboard()
        await this.page.locator('a').filter({ hasText: /^Products$/ }).click();
        await this.page.getByRole('link', { name: selector.product.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.product) 
        await this.errorCheck()
    }

    async goToCategoryPage() {
        // await this.goIfNotThere(data.subUrls.admin.category)
        await this.page.goto(data.subUrls.admin.category)
        await this.page.getByRole('link', { name: selector.admin.category.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.category) 
        await this.errorCheck()
    }

    async goToBrandPage() {
        await this.page.goto(data.subUrls.admin.brand)
        await this.page.getByRole('link', { name: selector.admin.brand.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.brand) 
        await this.errorCheck()
    }
    
    async goToOrderPage() {
        await this.page.goto(data.subUrls.admin.order)
        // await this.page.locator('a').filter({ hasText: /^Orders$/ }).click();
        // await this.page.getByRole('link', { name: selector.order.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.order) 
        await this.errorCheck()
    }

    async goToSubscription() {
        // await this.page.goto(data.subUrls.admin.dashboard);
        await this.goToAdminDashboard()
        await this.page.getByRole('link', { name: selector.subscriptions.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.subscription) 
        await this.errorCheck()
    }

    async goToPayout() {
        // await this.page.goto(data.subUrls.admin.dashboard);
        await this.goToAdminDashboard()
        await this.page.locator('a').filter({ hasText: 'Requests' }).click();
        await this.page.getByRole('link', { name: selector.payouts.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.payouts) 
        await this.errorCheck()
    }

    async goToVendor() {
        await this.page.getByRole('link', { name: selector.vendors.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.vendor) 
        await this.errorCheck()
    }
    async goToCustomer() {
        await this.page.getByRole('link', { name: selector.customerMenu.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.customer) 
        await this.errorCheck()
    }

    async goToDesignPage() {
        await this.page.locator('a').filter({ hasText: 'Designs' }).click();
        await this.page.getByRole('link', { name: selector.designPage.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.page) 
        await this.errorCheck()
    }
    async goToGeneralSettings() {
        await this.page.locator('a').filter({ hasText: 'Settings' }).click();
        await this.page.getByRole('link', { name: selector.generalSettings.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.generalSettings) 
        await this.errorCheck()
    }
    async goToTeamSettings() {
        await this.page.goto(data.subUrls.admin.teamSettings)
        // await this.page.getByRole('link', { name: selector.teamSettings.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.teamSettings) 
        await this.errorCheck()
    }
    async goToPaymentSettings() {
        await this.page.goto(data.subUrls.admin.paymentSettings)
        // await this.page.getByRole('link', { name: selector.paymentSettings.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.paymentSettings) 
        await this.errorCheck()
    }
    async goToPayoutSettings() {
        await this.page.goto(data.subUrls.admin.payoutSettings)
        // await this.page.getByRole('link', { name: selector.payoutSettings.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.payoutSettings) 
        await this.errorCheck()
    }
    async goToShipping() {
        await this.page.goto(data.subUrls.admin.shippingSettings)
        // await this.page.getByRole('link', { name: selector.shippingSettings.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.shippingSettings) 
        await this.errorCheck()
    }
    async goToNotification() {
        await this.page.goto(data.subUrls.admin.notificationSettings)
        // await this.page.getByRole('link', { name: selector.notificationSettings.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.notificationSettings) 
        await this.errorCheck()
    }
    async goToTax() {
        await this.page.goto(data.subUrls.admin.taxSettings)
        // await this.page.getByRole('link', { name: selector.taxSettings.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.taxSettings) 
        await this.errorCheck()
    }
    async goToSEO() {
        await this.page.goto(data.subUrls.admin.seoSettings)
        // await this.page.getByRole('link', { name: selector.seoSettings.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.seoSettings) 
        await this.errorCheck()
    }
    async goToPolicies() {
        await this.page.goto(data.subUrls.admin.policiesSettings)
        // await this.page.getByRole('link', { name: selector.policiesSettings.menuLink }).click();
        await expect(this.page).toHaveURL(data.subUrls.admin.policiesSettings) 
        await this.errorCheck()
    }
    
    
    



/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< All Element Validation Testing <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */




    async dashbaordElementValidation() {
        await this.goToAdminDashboard()
        //  Note: here two way, i assert dashboard because multiple dasboard text available 
        // const adminDashboard = await page.innerText(selector.adminDashboard.validaton);
        // expect(adminDashboard).toBe(data.dashboard.PageValidation);
        expect( await this.page.innerText(selector.admin.dashboard.validation)).toBe(data.dashboard.PageValidation)
        // await expect(this.page.getByText('Today')).toBeVisible();
        // await expect(this.page.getByText('Sales Report')).toBeVisible();
        // await expect(this.page.getByText('To-Do')).toBeVisible();
        // await expect(this.page.getByText('Top Selling Product')).toBeVisible();
    }

    async productElementValidation() {
        await this.goToProductPage()
        await expect(this.page.getByRole('heading', { name: data.product.pageValidation })).toBeVisible()

        // Validate Add New Product page loading
        await this.page.getByRole('link', { name: 'Add Product'}).click()
            await expect(this.page).toHaveURL('/admin/products/create')
            await expect(this.page.getByText('Product Name')).toBeVisible()    
        await this.page.getByRole('link', { name: 'Products'}).nth(1).click()
            await expect(this.page).toHaveURL('/admin/products')
        
        //Validate Published page loading 
        await this.page.getByRole('button', { name: 'Published' }).click();
            await expect(this.page).toHaveURL('/admin/products?filters[status]=published')
            await expect(this.page.locator('div.mt-4')).toBeVisible()
            // await expect(page.getByRole('cell', { name: 'PRICE', exact:true})).toBeVisible()
            await expect(this.page.getByRole('button', { name: 'Filter' })).toBeVisible()
        
        // Validate Draft page loading
        await this.page.getByRole('button', {name: 'Draft'}).click()
            await expect(this.page).toHaveURL('/admin/products?filters[status]=draft')
            await expect(this.page.locator('div.mt-4')).toBeVisible()
            // await expect(page.getByRole('cell', { name: 'PRICE', exact:true})).toBeVisible()
            await expect(this.page.getByRole('button', { name: 'Filter' })).toBeVisible()
        
        await this.page.getByRole('button', {name: 'All'}).click()
        await expect(this.page.getByPlaceholder('Press enter to search...')).toBeVisible()
        await expect(this.page.getByRole('button', { name: 'Filter' })).toBeVisible()
        // await expect(page.getByRole('cell', { name: 'PRICE', exact:true})).toBeVisible()
        await expect(this.page.getByRole('cell', { name: 'Price' })).toBeVisible()
        await expect(this.page.getByRole('cell', { name: 'Status' })).toBeVisible()
        await expect(this.page.getByRole('cell', { name: 'Stock' })).toBeVisible()
        await expect(this.page.getByRole('cell', { name: 'Action' })).toBeVisible()
        await expect(this.page.locator('div.pagination')).toBeVisible()
    }

    async categoryElementValidation() {
        await this.goToCategoryPage()
        await expect(this.page.getByRole('heading', { name: data.category.pageValidation })).toBeVisible()
    }

    async brandElementValidation() {
        await this.goToBrandPage()
        await expect(this.page.getByRole('heading', { name: data.brand.pageValidation })).toBeVisible()
    }

    async ordersElementValidation() {
        await this.goToOrderPage()
        await expect(this.page.getByRole('heading', { name: data.order.pageValidation })).toBeVisible()
        await this.page.locator(selector.order.detailsPreview).click();
        await this.errorCheck()
        // await this.page.goto('/admin/payouts?filters[status]=upcoming')
        // await this.errorCheck()
        
    }
    async subscriptionElementValidation() {
        await this.goToSubscription()
        await expect(this.page.getByRole('heading', { name: data.subscription.pageValidation })).toBeVisible()
    }
    async payoutElementValidation() {
        await this.goToPayout()
        await expect(this.page.getByRole('heading', { name: data.payout.pageValidation })).toBeVisible()
        await this.clickAndWaitForResponse('/api/v1/admin/upcoming-withdrawals?filters[status]=upcoming', "//button[text()='Upcoming']")
        await this.errorCheck()
    }
    async vendorElementValidation() {
        await this.goToVendor()
        await expect(this.page.getByRole('heading', { name: data.vendors.pageValidation })).toBeVisible()
    }
    async customerElementValidation() {
        await this.goToCustomer()
        await expect(this.page.getByRole('heading', { name: data.customersPage.pageValidation })).toBeVisible()
    }
    async designPageElementValidation() {
        await this.goToDesignPage()
        await expect(this.page.getByRole('heading', { name: data.designPage.pageValidation })).toBeVisible()
    }
    async generalSettingsElementValidation() {
        await this.goToGeneralSettings()
        await expect(this.page.getByRole('heading', { name: data.generalSettings.pageValidation })).toBeVisible()
    }
    async teamSettingsElementValidation() {
        await this.goToTeamSettings()
        await expect(this.page.getByRole('heading', { name: data.teamSettings.pageValidation })).toBeVisible()
    }
    async paymentSettingsElementValidation() {
        await this.goToPaymentSettings()
        await expect(this.page.getByRole('heading', { name: data.paymentSettings.pageValidation })).toBeVisible()
    }
    async payoutSettingsElementValidation() {
        await this.goToPayoutSettings()
        await expect(this.page.getByText( data.payoutSettings.pageValidation )).toBeVisible()
    }
    async shippingSettingsElementValidation() {
        await this.goToShipping()
        await expect(this.page.getByRole('heading', { name: data.shippingSettings.pageValidation })).toBeVisible()
    }
    async notificationSettingsElementValidation() {
        await this.goToNotification()
        await expect(this.page.getByRole('heading', { name: data.notificationSettings.pageValidation })).toBeVisible()
    }
    async taxSettingsElementValidation() {
        await this.goToTax()
        await expect(this.page.getByRole('heading', { name: data.taxSettings.pageValidation })).toBeVisible()
    }
    async seoSettingsElementValidation() {
        await this.goToSEO()
        await expect(this.page.getByRole('heading', { name: data.seoSettings.pageValidation })).toBeVisible()
    }
    async policiesSettingsElementValidation() {
        await this.goToPolicies()
        await expect(this.page.getByRole('heading', { name: data.policiesSettings.pageValidation })).toBeVisible()
    }










/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< All Functional Testing <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

    async createNewCategory(category: any) {
        await this.goToCategoryPage();
        await this.page.getByRole('link', { name: selector.admin.category.addNew }).click();
        await this.page.locator(selector.admin.category.titleField).fill(category.insertName());
        
        // File Upload
        const handle = await this.page.locator(selector.admin.category.imageUploadLocation)
        /* 
        // add event listner (If have any diaglog message)
        this.page.once("dialog", (dialog) => {
            console.log(dialog.message())
            dialog.accept()
        })
        */
        await handle.setInputFiles(data.category.imageUpload)
        await this.page.waitForTimeout(1000);

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
        await this.errorCheck()
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
        await this.errorCheck()
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
        await this.errorCheck()
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
        await this.errorCheck()

        await this.page.locator(selector.product.productName).fill(data.product.standard.productName());
        await this.page.getByLabel(selector.product.productDescription).fill(data.product.standard.productDescription());

        await this.page.locator(selector.product.productCategory).first().click();
        await this.page.getByText(selector.product.productCategorySelect).click();

        await this.page.locator('div').filter({ hasText: /^Draft$/ }).nth(1).click();
        await this.page.getByText(selector.product.productStatus, { exact: true }).click();

        await this.page.locator(selector.product.soldBy).click();
        await this.page.locator(selector.product.vendorName).nth(1).fill(data.commonMessage.vendorName);
        await this.page.waitForTimeout(1000)
        // await this.page.getByText(data.commonMessage.vendorName, { exact: true }).click();
        await this.page.keyboard.press("Enter")

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
        await (expect(this.page.getByText(data.product.createMessage, {exact: true}))).toBeVisible()
    }

    async editProduct(product: any) {
        await this.goToProductPage()
        await this.page.locator(selector.common.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.editLink }).click()
        await this.errorCheck()
        await this.page.locator(selector.product.productName).fill(product.updateName())
        await this.page.getByRole('button', { name: selector.common.update }).click();
        // this.page.on('dialog', dialog => dialog.accept());
        await (expect(this.page.getByText(data.product.editMessage, { exact: true }))).toBeVisible()
    }

    async deleteProduct() {
        await this.goToProductPage()
        await this.page.locator(selector.common.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.deleteLink }).click()
        await expect(this.page.getByText(data.commonMessage.deleteSuccessMessage, { exact: true })).toBeVisible()
    }
    
    async createSubscription() {
        await this.goToSubscription()
        await this.page.getByRole('link', { name: selector.admin.subscription.menuLink }).click();
        await this.page.getByRole('link', { name: selector.admin.subscription.addNewPlan }).click();
        await this.errorCheck()
        await this.page.getByPlaceholder(selector.admin.subscription.titleField).click();
        await this.page.getByPlaceholder(selector.admin.subscription.titleField).fill(data.subscription.titleField);
        await this.page.locator(selector.admin.subscription.descriptionField).click();
        await this.page.locator(selector.admin.subscription.descriptionField).fill(data.subscription.descriptionField);
        //Pricing & Billing
        await this.page.getByLabel(selector.admin.subscription.priceField).click();
        await this.page.getByLabel(selector.admin.subscription.priceField).fill(data.subscription.priceField);
        await this.page.getByLabel(selector.admin.subscription.setupFee).click();
        await this.page.getByLabel(selector.admin.subscription.setupFee).fill(data.subscription.setupFee);
        await this.page.getByRole('combobox', { name: selector.admin.subscription.billingCycle, exact: true }).selectOption(data.subscription.billingCycle);
        // await this.page.getByRole('combobox', { name: selector.admin.subscription.billingCycle }).selectOption(data.subscription.billingCycle);
        await this.page.locator(selector.admin.subscription.taxApplicable).click();
        await this.page.locator(selector.admin.subscription.taxClass).click();
        await this.page.getByText(selector.admin.subscription.selectTaxClass, { exact: true }).click();
        await this.page.locator(selector.admin.subscription.enableTrailPriod).click();
        await this.page.getByRole('combobox', { name: selector.admin.subscription.selectTrailPriod }).selectOption(data.subscription.selectTrailPriod);
        await this.page.locator(selector.admin.subscription.selectTrailPriod2).first().selectOption(data.subscription.selectTrailPriod2);
        //Commissions
        await this.page.getByPlaceholder(selector.admin.subscription.percentageCommissions, { exact: true }).click();
        await this.page.getByPlaceholder(selector.admin.subscription.percentageCommissions, { exact: true }).fill(data.subscription.percentageCommissions);
        await this.page.getByPlaceholder(selector.admin.subscription.flatCommissions).click();
        await this.page.getByPlaceholder(selector.admin.subscription.flatCommissions).fill(data.subscription.flatCommissions);
        await this.page.getByRole('button', { name: selector.admin.subscription.continueSteps }).click();
        //Capabilities & Restrictions
        await this.page.locator(selector.admin.subscription.numberOfPhysicalProducts).click();
        await this.page.locator(selector.admin.subscription.numberOfPhysicalProducts).fill(data.subscription.numberOfPhysicalProducts);
        await this.page.locator(selector.admin.subscription.numberOfDigitalProducts).click();
        await this.page.locator(selector.admin.subscription.numberOfDigitalProducts).fill(data.subscription.numberOfDigitalProducts);
        await this.page.locator(selector.admin.subscription.couponCreation).click();
        await this.page.locator(selector.admin.subscription.allowMultipleAddress).click();
        await this.page.getByPlaceholder(selector.admin.subscription.numberOfVendorStaff).click();
        await this.page.getByPlaceholder(selector.admin.subscription.numberOfVendorStaff).fill(data.subscription.numberOfVendorStaff);
        await this.page.getByRole('button', { name: selector.admin.subscription.createAndPublish }).click();
        await expect(this.page.getByText(data.subscription.createSuccessMessage, { exact: true })).toBeVisible()
    }

    async editSubscription() {
        await this.goToSubscription()
        await this.page.locator(selector.common.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.editLink }).click();
        await this.errorCheck()
        await this.page.locator(selector.admin.subscription.titleEditField).click();
        await this.page.locator(selector.admin.subscription.titleEditField).fill(data.subscription.descriptionUpdateField);
        await this.page.getByRole('button', { name: selector.admin.subscription.updatePlan }).click();
        await expect(this.page.getByText(data.subscription.updateSuccessMessage, { exact: true })).toBeVisible();
    }

    async deleteSubscription() {
        await this.goToSubscription()
        await this.page.locator(selector.common.dropDown).click()
        await this.page.getByRole('link', { name: selector.common.deleteLink }).click();
        await expect(this.page.getByText(data.subscription.deleteSuccessMessage)).toBeVisible();
    }

    async taxClassCRUD() {
        const taxClassName = data.taxSettings.className;
        const taxClassUpdate = data.taxSettings.classNameUpdate;
        await this.goToTax()
        await this.page.getByRole('tab', { name: selector.admin.tax.classTab }).click();
        await this.page.getByRole('button', { name: selector.admin.tax.createTaxClss }).click();
        await this.errorCheck()
        await expect(this.page.getByText(selector.admin.tax.popupValidation)).toBeVisible();
        
        await this.page.getByPlaceholder(selector.admin.tax.className).click();
        await this.page.getByPlaceholder(selector.admin.tax.className).fill( taxClassName );
        await this.page.getByRole('button', { name: selector.admin.tax.createButton, exact: true }).click();
        await this.page.getByText(data.taxSettings.validateSuccessMessage).click();
        
        await this.page.getByRole('row', { name: taxClassName }).getByRole('button', { name: selector.admin.tax.renameLink }).click();
        await this.errorCheck()
        await this.page.getByPlaceholder(selector.admin.tax.className).click();
        await expect(this.page.getByText(data.taxSettings.renameValidation)).toBeVisible();
        await this.page.getByPlaceholder(selector.admin.tax.className).click();
        await this.page.getByPlaceholder(selector.admin.tax.className).fill(taxClassUpdate);
        await this.page.getByRole('button', { name: selector.admin.tax.saveButton }).click();
        await this.page.getByText(data.taxSettings.updateValidateSuccessMessage).click();
        
        await this.page.getByRole('row', { name:  taxClassUpdate }).getByRole('button', { name: selector.admin.tax.deleteLink }).click();
        await expect(this.page.locator(selector.admin.tax.deleteValidation)).toBeVisible()
        await this.page.getByRole('button', { name: selector.admin.tax.deleteButton }).click()
        await expect(this.page.getByText(data.taxSettings.deleteValidationSuccessMessage)).toBeVisible()
    }

    async taxAddCountry() {
        await this.page.getByRole('tab', { name:  selector.admin.tax.countryTab}).click();
        await this.errorCheck()
        await this.page.getByRole('button', { name: selector.admin.tax.addCountryButton }).click();
        await expect(this.page.getByText(selector.admin.tax.countryPopupValidation)).toBeVisible();
        // await this.page.locator("(//input[contains(@class,'h-full w-full')])[2]").getByPlaceholder('Search Country...').click();
        // await this.page.getByPlaceholder('Search Country...').fill('Afgh');
        await this.page.keyboard.type(data.taxSettings.countrySearch)
        await this.page.getByLabel(selector.admin.tax.selectCountry).check();
        await this.page.getByRole('button', { name: selector.admin.tax.continueButton }).click();

        await this.page.waitForTimeout(1000)
        await expect(this.page.getByText(selector.admin.tax.selectTaxClassValidation)).toBeVisible()
        await expect(this.page.locator(selector.admin.tax.taxClassCountryValidation).getByText(data.taxSettings.countryValidation)).toBeVisible();

        // await this.page.getByLabel('Reduced Rate Update').check();
        // await this.page.getByLabel('Zero Rate').check();
        // await this.page.getByRole('button', { name: 'Back' }).click();
        // await this.page.getByRole('button', { name: 'Add Country' }).click();
        await this.page.locator(selector.admin.tax.addCountry).click()
        
        await expect(this.page.getByText(data.taxSettings.countryValidation)).toBeVisible()
        
    }

    async taxRateAddForEntireCountry() {
        await this.goToTax()
        await this.taxAddCountry()

        await this.page.getByRole('radio', { name: selector.admin.tax.sameTaxRate }).click();
        await this.errorCheck()
        await this.page.getByPlaceholder(selector.admin.tax.taxName).click();
        await this.page.waitForTimeout(1000)
        await this.page.getByPlaceholder(selector.admin.tax.taxName).fill(data.taxSettings.taxName);
        await this.page.getByLabel(selector.admin.tax.enableCollectTaxesOnShipping).check();
        await this.page.getByLabel(selector.admin.tax.EnablecollectTaxesOnDigitalProducts).check();

        await this.page.getByRole('button', { name: selector.admin.tax.manageButton }).click();
        await expect(this.page.getByText(selector.admin.tax.manageValidation)).toBeVisible()
        // await this.page.getByLabel('Zero Rate').uncheck();
        await this.page.getByRole('button', { name: selector.admin.tax.manageDone }).click();

        // await this.page.locator('[id="tc-Reduced\\ Rate\\ Update"]').click();
        // await this.page.locator('[id="tc-Reduced\\ Rate\\ Update"]').fill('5');
        // await this.page.locator('[id="tc-Standard\\ Rate"]').click();
        // await this.page.locator('[id="tc-Standard\\ Rate"]').fill('06');
        await this.page.getByRole('button', { name: selector.admin.tax.saveChanges }).click();
        await expect(this.page.getByText(data.taxSettings.manageSuccessMessageValidation)).toBeVisible()
    }

    async differentTaxRateStateCityZip() {
        await this.goToTax()
        await this.taxAddCountry()

        await this.page.getByRole('radio', { name: selector.admin.tax.differentTaxRate }).click();
        await this.errorCheck()
        // await this.page.locator('span').filter({ hasText: 'Reduced Rate Update' }).click();
        await this.page.getByRole('button', { name: selector.admin.tax.manageButton }).click();
        await this.page.getByRole('button', { name: selector.admin.tax.manageBackButton }).click();

        await this.page.getByRole('button', { name: selector.admin.tax.addState }).click();
        await this.page.getByText(selector.admin.tax.selectState).click();
        await this.page.getByPlaceholder(selector.admin.tax.searchState).click();
        await this.page.getByPlaceholder(selector.admin.tax.searchState).fill(data.taxSettings.stateName);
        await this.page.getByLabel(data.taxSettings.stateName).check();
        await this.page.getByRole('button', { name: selector.admin.tax.continueState }).click();

        await expect(this.page.getByText('Additional Tax collection')).toBeVisible();
        // await this.page.getByText('Add Tax for Kabul, Afghanistan').click();
        await this.page.getByLabel('On Shipping', { exact: true }).check();
        await this.page.getByLabel('On Digital Products', { exact: true }).check();
        await this.page.getByLabel('Override Country Tax').check();

        // await this.page.locator("(//div[@class='relative flex']//input)[3]").getByPlaceholder('Write here').click();
        // await this.page.getByPlaceholder('Write here').fill('kabulTax');
        await this.page.keyboard.press("Tab")
        await this.page.keyboard.type("kabulTax")
        await this.page.getByLabel('Compound tax applied').check();
        await this.page.keyboard.press("Tab")
        await this.page.keyboard.type("2")
        // await this.page.locator('input[name="tc-Reduced Rate Update"]').click();
        // await this.page.locator('input[name="tc-Reduced Rate Update"]').fill('2');
        await this.page.getByRole('button', { name: 'Add Another Rule' }).click();

        await this.page.getByPlaceholder('Write here').nth(2).click();
        await this.page.getByPlaceholder('Write here').nth(2).fill('kabul2tax');
        await this.page.locator('#state-1-compound').check();
        await this.page.getByPlaceholder('2').click();
        await this.page.getByPlaceholder('2').fill('3');

        await this.page.keyboard.press("Tab")
        await this.page.keyboard.type("4")
        await this.page.getByRole('button', { name: 'Save', exact: true }).click();
        await expect(this.page.getByText('Tax rates have been saved successfully.')).toBeVisible()

    }
}