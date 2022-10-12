import { expect, Page } from "@playwright/test";
import { selector } from "../pages/selectors";
import { isVisible } from "../framework/common-actions";
import { faker } from "@faker-js/faker";

export class Registration {
    readonly page: Page;

    constructor(page: Page) {
        this.page= page;
    }

    async vendorSignUpFormIsVisible(): Promise<boolean> {
        return await isVisible(this.page, selector.registration.pageValidation);
    }
    async vendorBusinessDetailsFormIsVisible(): Promise<boolean> {
        return await isVisible(this.page, selector.registration.businessDeailsPageValiation);
    }
    async vendorAddressFormIsVisible(): Promise<boolean> {
        return await isVisible(this.page, selector.registration.addressFormPageValidation);
    }
    async vendorIsRegistered(): Promise<boolean> {
        return await isVisible(this.page, selector.registration.vendorIsRegistered);
    }

    async goToRegistrationPage() {
        await this.page.goto('/vendor/login');
        await this.page.locator(selector.registration.signUpLink).click();
        // await this.page.waitForURL('/vendor/register');

        const vendorSignUpFormIsVisible = await this.vendorSignUpFormIsVisible();
        expect(this.vendorSignUpFormIsVisible).toBeTruthy();
    }

    async fillupSignUpForm() {
        await this.page.fill(selector.registration.firstName, faker.name.firstName());
        await this.page.fill(selector.registration.lastName, faker.name.lastName());
        await this.page.fill(selector.registration.email, faker.internet.email());
        await this.page.fill(selector.registration.password, faker.internet.password());
        await this.page.fill(selector.registration.confirmPassword, faker.internet.password());
        await this.page.locator(selector.registration.signUpComplete).click();

        // await this.page.waitForURL('/vendor/steps/business-details');
        const vendorBusinessDetailsFormIsVisible = await this.vendorBusinessDetailsFormIsVisible();
        expect(this.vendorBusinessDetailsFormIsVisible).toBeTruthy();
    }

    async fillupBusinessDetailsInfo() {
        await this.page.fill(selector.registration.businessFirstName, faker.name.firstName());
        await this.page.fill(selector.registration.businessLastName, faker.name.lastName());

        await this.page.locator('.css-98q0e7').first().click();
        // await this.page.locator('form div.css-10rvzng-control #react-select-2-input').fill('Bangladesh');
        await this.page.locator('text=Country of citizenshipoption Afghanistan focused, 1 of 101. 101 results availabl >> input[role="combobox"]').fill('Bangladesh');
        await this.page.keyboard.press("Enter");

        await this.page.locator('.css-10rvzng-control > div').first().click();
        // await this.page.locator("form div.css-10rvzng-control #react-select-3-input").fill('Bangladesh');
        await this.page.locator('text=Country of birthoption Afghanistan focused, 1 of 101. 101 results available. Use >> input[role="combobox"]').fill('Bangladesh');
        await this.page.keyboard.press("Enter");


        await this.page.locator(selector.registration.storeName).fill(faker.name.fullName());
        // ToDo: Need to StoreURL validation locator(#store-url)
        const storeNameAvailability = await this.page.locator("#store-url-loader");
        await storeNameAvailability.waitFor();

        await this.page.locator(selector.registration.nextButton).click();

        // await this.page.waitForURL('/vendor/steps/address');
        // const vendorAddressFormIsVisible = await this.vendorAddressFormIsVisible();
        // expect(this.vendorAddressFormIsVisible).toBeTruthy();
        await expect(this.page).toHaveURL('/vendor/steps/address');
    }

    async fillupAddressInfo() {

        // await this.page.locator(selector.registration.streetAddress).fill(faker.address.streetAddress());
        // Click [placeholder="Insert Address"]
        await this.page.locator('[placeholder="Insert Address"]').click();

        // Fill [placeholder="Insert Address"]
        await this.page.locator('[placeholder="Insert Address"]').fill(faker.address.streetAddress());

        await this.page.locator("input[name='address2']").fill(faker.address.street());

        /* // await this.page.locator('.css-ackcql').first().click();
        await this.page.locator("form div.css-10rvzng-control #react-select-4-input").fill('Bangladesh');
        // await this.page.locator('#react-select-4-option-7').click();
        await this.page.keyboard.press("Enter");

        // await this.page.locator('.css-1hb4htj-control > div > .css-ackcql').click();
        // await this.page.locator("form div.css-10rvzng-control #react-select-5-input").click();
        await this.page.locator("form div.css-10rvzng-control #react-select-5-input").fill('dhaka');
        // await this.page.locator('#react-select-5-option-12').click();
        
        await this.page.keyboard.press("Enter"); */

        // Click .css-98q0e7 >> nth=0
        await this.page.locator('.css-98q0e7').first().click();
        // Fill text=Countryoption Afghanistan focused, 1 of 101. 101 results available. Use Up and D >> input[role="combobox"]
        await this.page.locator('text=Countryoption Afghanistan focused, 1 of 101. 101 results available. Use Up and D >> input[role="combobox"]').fill('ban');
        // Click #react-select-4-option-7
        await this.page.locator('#react-select-4-option-7').click();
        // Click .css-10rvzng-control > div > .css-98q0e7
        await this.page.locator('.css-10rvzng-control > div > .css-98q0e7').click();
        // Fill text=Districtoption Bagerhat focused, 1 of 64. 64 results available. Use Up and Down  >> input[role="combobox"]
        await this.page.locator('text=Districtoption Bagerhat focused, 1 of 64. 64 results available. Use Up and Down  >> input[role="combobox"]').fill('dhak');
        // Click #react-select-5-option-12
        await this.page.locator('#react-select-5-option-12').click();



        // await this.page.locator(selector.registration.city).click();
        await this.page.locator(selector.registration.city).fill('Dhaka');

        // await this.page.locator(selector.registration.postCode).click();
        await this.page.locator(selector.registration.postCode).fill('1216');

        // await this.page.locator(selector.registration.registrationButton).click();
        await this.page.locator("form div.flex.justify-between button:nth-child(2)").click();

        // await this.page.waitForURL('/vendor');
    }
    
    async asVendor() {
        

        

        

        // expect(this.vendorIsRegistered).toBeTruthy();
    }
}