import { test, expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { user } from "../utils/testdata";
import { selector } from "../pages/selectors";
import { Registration } from "../pages/registrationPage";
import { DashboardPage } from "../pages/dashboardPage";




test.describe('Vendor Validation With', () => {

    test("Login Unauthenticated tests", async ({ page }) => {
        await page.goto('https://testing.dokandev.com/vendor/products');
        await expect(page.locator("//p[text()='Vendor Login']")).toBeVisible();
    })

    test("Login Invalid Credentials & Required Field", async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goToVendorLoginPage();
        await new LoginPage(page).login(process.env.VENDOR_INVALID_EMAIL ?? '', process.env.VENDOR_INVALID_PASSWORD ?? '');

        const loginCredentialsErrorMessage = await page.innerText(selector.login.loginCredentialsErrorMessage);
        expect(loginCredentialsErrorMessage).toBe("The credentials do not match our records");

        await new LoginPage(page).emailErrorMessageIsVisible();
        const loginEmailErrorMessage = await page.innerText(selector.login.loginEmailErrorMessage);
        expect(loginEmailErrorMessage).toBe("Email is required, Email is not valid");

        const loginPasswordErrorMessage = await page.innerText(selector.login.loginPasswordErrorMessage);
        expect(loginPasswordErrorMessage).toBe("Password is required");
    })

    test("Login and Logout", async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goToVendorLoginPage();
        await new LoginPage(page).login(process.env.VENDOR_EMAIL ?? '', process.env.VENDOR_PASSWORD ?? '');
        const userisLoggedIn = await homePage.userisLoggedIn();
        expect(userisLoggedIn).toBeTruthy();

        const userIsLoggedOut = await new DashboardPage(page).userIsLoggedOut();
        expect(userIsLoggedOut).toBeTruthy();
    })

    test('Registration Valid credentials', async ({ page }) => {
        const registration = new Registration(page);
        await registration.goToRegistrationPage();
        await registration.fillupSignUpForm();
        await registration.fillupBusinessDetailsInfo();
        await registration.fillupAddressInfo();
        const vendorIsRegistered = await registration.vendorIsRegistered();
        expect(vendorIsRegistered).toBeTruthy();
    })

})


/* test.describe('Admin Validation With', () => {
   
});
 */