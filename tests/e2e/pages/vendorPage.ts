import { expect, Page } from "@playwright/test";
import { isVisible } from "../framework/common-actions";
import { selector } from "./selectors";
import { BasePage } from "./basePage";
import { data } from "../../../utils/testdata";
import { endPoints } from "../../../utils/apiEndPoints";
import { faker } from "@faker-js/faker";
import path from 'path';

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
        await this.page.goto(endPoints.vendorDashboardLogin);
    }
    async goToVendorRegistrationPage() {
        await this.page.goto(endPoints.vendorDashboardRegistration);
    }

    async goToVendorProductPage() {
        await this.page.goto(endPoints.vendorProductPage)
    }
     async submitRegistrationForm() {
        // await this.page.getByRole('button', { name: 'Create Account' }).click();
        await this.textClickAndWaitForLoadState('Create Account')
     }

     async goToNextOnboardProcess() {
        // await this.page.getByRole('button', { name: 'Next' }).click();
        await this.textClickAndWaitForLoadState('Next')
     }

    async createStandardProduct(productInfo: { productName: () => string; productDescription: () => string; sku: () => string; }): Promise<void> {
        await this.goToVendorProductPage();
        // ToDo: Need to validate page is loading perfectly
        
        await this.page.getByRole('link', { name: 'Add Product' }).click();

        await this.page.locator(selector.product.name).fill(data.product.standard.productName());
        await this.page.locator(selector.product.description).fill(data.product.standard.productDescription());

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

        await this.page.getByRole('button', { name: selector.product.create  }).click();
        await expect(this.page.getByText(data.product.standard.noShippingConfirmation, {exact: true})).toBeVisible();
        // await this.page.getByRole('button', { name: 'Okay' }).click();
        await expect(this.page.getByRole('button', { name: 'Okay' })).toBeVisible();
        await this.page.keyboard.press("Enter")
        // await this.textClickAndWaitForLoadState('Create')
        // await this.clickAndWaitForLoadState("(//button[@type='submit'])[1]")
        await (expect(this.page.getByText(data.product.createMessage, {exact: true}))).toBeVisible()
        await this.waitForUrl(endPoints.vendorProductPage, {})
    }


    async fillRegistrationForm(email, password, confirmPassword) {
        await this.page.getByPlaceholder('John').click();
        await this.page.getByPlaceholder('John').fill(faker.name.firstName());
        // await this.page.getByPlaceholder('John').press('Tab');
        await this.page.getByPlaceholder('Doe').fill(faker.name.lastName());
        await this.page.getByPlaceholder('yourname@email.com').click();
        await this.page.getByPlaceholder('yourname@email.com').fill(email);
        await this.page.getByLabel('Password', { exact: true }).click();
        await this.page.getByLabel('Password', { exact: true }).fill(password);
        await this.page.getByLabel('Confirm Password').click();
        await this.page.getByLabel('Confirm Password').fill(confirmPassword);
        // await this.page.getByRole('button', { name: 'Create Account' }).click();
        // await this.page.waitForURL('https://farazi.staging.dokandev.com/vendor/onboarding/create-store')
        // await expect(this.page.getByRole('heading', { name: 'Create Your Store' })).toBeVisible();
    }

    async fillStoreDetails() {
        const storeName = faker.company.name();
        await this.page.getByPlaceholder('Store Name').fill(storeName);
        await this.page.locator('#country svg').click();
        await this.page.locator('#react-select-2-input').fill('United States');
        await this.page.getByRole('option', { name: 'United States' }).click();
        await this.page.getByPlaceholder('Enter an address').click();
        await this.page.keyboard.type('1600 Amphitheatre Parkway', { delay: 50 });
        await this.page.getByText('1600 Amphitheatre Parkway').first().click();
        await this.page.getByPlaceholder('Apartment, flat etc').fill('Suite 100');
    }

    async selectIndividualBusinessType() {
        await this.page.getByRole('link', { name: 'Individual' }).click();
        await this.page.getByPlaceholder('First Name').fill(faker.name.firstName());
        await this.page.getByPlaceholder('Last Name').fill(faker.name.lastName());

        const countrySelect = this.page.locator('.css-1145v03-control > div');
        await countrySelect.first().click();
        await this.page.locator('#react-select-4-input').fill('United States');
        await this.page.getByRole('option', { name: 'United States' }).click();

        await countrySelect.last().click();
        await this.page.locator('#react-select-5-input').fill('United States');
        await this.page.getByRole('option', { name: 'United States' }).click();
    }

    async verifyContact() {
        await this.page.locator('.css-17wv8nz').click();
        await this.page.locator('#react-select-6-input').fill('united');
        await this.page.getByRole('option', { name: 'United States' }).click();
        await this.page.getByPlaceholder('Enter an address').click();
        await this.page.keyboard.type('1600 Amphitheatre Parkway', { delay: 50 });
        await this.page.getByText('1600 Amphitheatre Parkway').first().click();
        await this.page.getByPlaceholder('Apartment, flat etc').fill('Suite 100');
    }

    async uploadIdentityDocuments() {
        await this.page.getByLabel('Passport').click();
        await this.page.getByLabel('Passport Number').click();
        await this.page.getByLabel('Passport Number').fill('A-3958394058');
        await this.page.getByRole('textbox').nth(1).click();
        await this.page.getByLabel('Year').click();
        await this.page.getByLabel('Year').fill('2029');
        await this.page.getByLabel('October 1,').click();
        await this.page.getByRole('button', { name: 'Upload Image' }).click();
        await this.page.getByRole('button', { name: 'Upload Files' }).click();
        const imageFile = path.resolve(__dirname, '../../../utils/images/apple.png');
        // const imageFile =  '../../../utils/images/apple.png';
        await this.page.setInputFiles('//input[@type="file"]', imageFile);

        const isChatVisible = this.page.getByLabel('Open chat').getByRole('button').first();
        const isVisible = await isChatVisible.isVisible();
        if (isVisible) {
          await isChatVisible.click();
        }
        await this.page.getByRole('button', { name: 'Select' }).click();
    }

    async fillBankDetails() {
        await this.page.getByPlaceholder('Account Holder Name').click();
        await this.page.getByPlaceholder('Account Holder Name').fill('Bank Name');
        await this.page.getByPlaceholder('Bank Name').click();
        await this.page.getByPlaceholder('Bank Name').fill('SCB');
        await this.page.getByPlaceholder('Account Number').click();
        await this.page.getByPlaceholder('Account Number').fill('0327589734895');
        await this.page.getByPlaceholder('Routing Number').click();
        await this.page.getByPlaceholder('Routing Number').fill('9347598');
    }
    

    async waitForPageLoad() {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.page.waitForFunction(() => document.readyState === 'complete')
        ]);
    }
    async selectPlan() {
        const getStartedButton = this.page.getByRole('button', { name: 'Get Started' }); // Free Plan
        // const getStartedButton = this.page.getByRole('button', { name: 'Start free trial' }); // Pro Plan
        await getStartedButton.first().click();
        
        // Stripe Gateway
/*         await this.page.getByText('Credit (Stripe)').click();
        await expect(await this.page.getByText('Test Mode')).toBeVisible();        
        await this.page.waitForLoadState('domcontentloaded'); // Wait for the page to load

        const cardFrame = this.page.frameLocator('iframe[name^="__privateStripeFrame"]').nth(0);
        await cardFrame.locator('input[name="cardnumber"]').fill('4242 4242 4242 4242');

        const expiryFrame = this.page.frameLocator('iframe[name^="__privateStripeFrame"]').nth(1);
        await expiryFrame.locator('input[name="exp-date"]').fill('12/30');

        const cvcFrame = this.page.frameLocator('iframe[name^="__privateStripeFrame"]').nth(2);
        await cvcFrame.locator('input[name="cvc"]').fill('123');

        await this.page.getByRole('button', { name: 'Start Plan' }).click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveURL(/.*\/vendor/);
        await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible(); */



        // PayPal Gateway
       /*  await this.page.getByText('Paypal Payment Gateway').click();
        await this.page.waitForLoadState('domcontentloaded');

        await expect(this.page.getByText('You will be redirect to')).toBeVisible();
        await this.page.getByRole('button', { name: 'Start Plan' }).click();

        await this.page.waitForLoadState('domcontentloaded'); // Wait for the page to load

        await this.page.getByPlaceholder('Email or mobile number').fill('farazi.forhad-customer@personal.example.com');
        // await this.page.getByRole('button', { name: 'Next' }).click(),

        await Promise.all([
            await this.page.waitForLoadState('domcontentloaded'),
            this.page.getByRole('button', { name: 'Next' }).click()
        ]);

        await this.waitForPageLoad();
        await this.page.waitForSelector('//a[@id="forgotPassword"]');
        const passwordField = this.page.locator('//input[@id="password"]');
        const isPasswordFieldVisible = await passwordField.isVisible();
        if (isPasswordFieldVisible) {
            await passwordField.fill('D]9-PPJw');
        } else {
            throw new Error('Password field is not visible');
        }
        // await this.page.locator('//button[@id="btnLogin"]').click(); // css: button#btnLogin
        // await this.page.frameLocator('iframe[name="injectedUl"]').getByRole('button', { name: 'Log In' }).click();
        await this.page.keyboard.press('Enter');

        await this.page.waitForLoadState('domcontentloaded'); // Wait for the page to load
        await this.page.getByRole('button', { name: 'Continue' }).click();

        await this.page.waitForLoadState('domcontentloaded'); // Wait for the page to load
        await expect(this.page).toHaveURL(/.*\/vendor\/setup-guide/);
        await expect(this.page.getByRole('heading', { name: 'Congrats on the new store!' })).toBeVisible(); */




 
    }

    async registerNewVendor() {
        await this.goToVendorRegistrationPage()

        // await this.page.getByPlaceholder('John').click();
        // await this.page.getByPlaceholder('John').fill(faker.name.firstName());
        // // await this.page.getByPlaceholder('John').press('Tab');
        // await this.page.getByPlaceholder('Doe').fill(faker.name.lastName());
        // await this.page.getByPlaceholder('yourname@email.com').click();
        // await this.page.getByPlaceholder('yourname@email.com').fill(faker.internet.exampleEmail());
        // await this.page.getByLabel('Password', { exact: true }).click();
        // await this.page.getByLabel('Password', { exact: true }).fill('yourname@email.comA1');
        // await this.page.getByLabel('Confirm Password').click();
        // await this.page.getByLabel('Confirm Password').fill('yourname@email.comA1');
        // await this.page.getByRole('button', { name: 'Create Account' }).click();
        // await this.page.waitForURL('https://farazi.staging.dokandev.com/vendor/onboarding/create-store')
        // await expect(this.page.getByRole('heading', { name: 'Create Your Store' })).toBeVisible();

        await this.page.getByPlaceholder('Store Name').click();
        await this.page.getByPlaceholder('Store Name').fill(faker.word.adjective() + " Store");
        await this.page.locator('#country svg').click();
        await this.page.locator('#react-select-2-input').fill('United States');
        await this.page.getByRole('option', { name: 'United States' }).click();
        await this.page.getByPlaceholder('Enter an address').click();
        // await this.page.getByPlaceholder('Enter an address').fill('Texas Tech University');
        await this.page.keyboard.type('Texas Tech University', { delay: 50})
        const getStoreAddress = await this.page.getByText('Texas Tech University').first();
        await getStoreAddress.click()
        
        await this.page.getByPlaceholder('Apartment, flat etc').click();
        await this.page.getByPlaceholder('Apartment, flat etc').fill('A-12');
        await this.page.getByRole('button', { name: 'Next' }).click();
        await this.page.waitForURL(endPoints.vendorOnboardSubscriptionPage)

        await this.page.getByRole('button', { name: 'Get Started' }).first().click();
        await this.page.waitForURL(endPoints.vendorDashbaordPage)

        await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    }  


}