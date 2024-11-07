import { expect, Page } from "@playwright/test";
import { selector } from "../pages/selectors";
import { isVisible } from "../../../utils/common-actions";
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

        const vendorBusinessDetailsFormIsVisible = await this.vendorBusinessDetailsFormIsVisible();
        expect(this.vendorBusinessDetailsFormIsVisible).toBeTruthy();
    }

    async fillupBusinessDetailsInfo() {
        await this.page.fill(selector.registration.businessFirstName, faker.name.firstName());
        await this.page.fill(selector.registration.businessLastName, faker.name.lastName());

        await this.page.locator('.css-98q0e7').first().click();
        await this.page.locator(selector.registration.countryOfCitizenship).fill('Bangladesh');
        await this.page.keyboard.press("Enter");

        await this.page.locator('.css-10rvzng-control > div').first().click();
        await this.page.locator(selector.registration.countryOfBirthday).fill('Bangladesh');
        await this.page.keyboard.press("Enter");

        await this.page.locator(selector.registration.storeName).fill(faker.name.fullName());
        // Validation store URL useing waitFor
        const storeNameAvailability = await this.page.locator(selector.registration.storeURLLoader); 
        await storeNameAvailability.waitFor();

        await this.page.locator(selector.registration.nextButton).click();
        await expect(this.page).toHaveURL('/vendor/steps/address');
    }

    async fillupAddressInfo() {
        await this.page.locator(selector.registration.streetAddress).click();
        await this.page.locator(selector.registration.streetAddress).fill(faker.address.streetAddress());
        await this.page.locator(selector.registration.apartmentsAddress).fill(faker.address.street());

        await this.page.locator('.css-98q0e7').first().click();
        await this.page.locator(selector.registration.country).fill('Bangladesh');
        await this.page.keyboard.press("Enter");

        await this.page.locator('.css-98q0e7').last().click();
        await this.page.locator(selector.registration.state).fill('Dhaka');
        await this.page.keyboard.press("Enter");
        
        await this.page.locator(selector.registration.city).fill('Dhaka');
        await this.page.locator(selector.registration.postCode).fill('1216');

        await this.page.locator(selector.registration.registrationButton).click();
    }
    
    async asVendor() {
        

        

        

        // expect(this.vendorIsRegistered).toBeTruthy();
    }
}