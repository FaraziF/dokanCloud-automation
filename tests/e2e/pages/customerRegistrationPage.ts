import { Page, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { selector } from './selectors';
import { data } from '../../../utils/testdata';
import { endPoints } from '../../../utils/apiEndPoints';
import { faker } from '@faker-js/faker';

export class CustomerRegistrationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Navigation Methods <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

  async goToCustomerRegistrationPage() {
    await this.page.goto(endPoints.customerRegistrationPage);
    await expect(this.page).toHaveURL(endPoints.customerRegistrationPage);
    // await this.errorCheck();
  }

  async goToCustomerLoginPage() {
    await this.page.goto(endPoints.customerLoginPage);
    await expect(this.page).toHaveURL(endPoints.customerLoginPage);
    // await this.errorCheck();
  }

  async navigateToRegistrationFromHomePage() {
    await this.page.goto(endPoints.customerHomePage);
    await expect(
      this.page.getByRole('searchbox', { name: 'Search...' })
    ).toBeVisible();
    await expect(this.page.getByRole('banner')).toContainText('Signup');
    await this.page.getByRole('link', { name: 'Signup' }).click();
    await expect(this.page).toHaveURL(endPoints.customerRegistrationPage);
  }

  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Page Validation Methods <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

  async validateRegistrationPageElements() {
    await this.goToCustomerRegistrationPage();
    await expect(this.page.getByRole('main')).toContainText(
      'Create your account'
    );
    await expect(
      this.page.getByRole('link', { name: 'Login Here', exact: true })
    ).toBeVisible();
    await expect(
      this.page.getByRole('button', {
        name: 'Sign up with Google',
        exact: true,
      })
    ).toBeVisible();
  }

  async validateRegistrationFormFields() {
    await this.goToCustomerRegistrationPage();

    // Validate all form fields are present
    await expect(
      this.page.locator(selector.customer.registration.firstName)
    ).toBeVisible();
    await expect(
      this.page.locator(selector.customer.registration.lastName)
    ).toBeVisible();
    await expect(
      this.page.locator(selector.customer.registration.email)
    ).toBeVisible();
    await expect(
      this.page.locator(selector.customer.registration.password)
    ).toBeVisible();
    await expect(
      this.page.locator(selector.customer.registration.confirmPassword)
    ).toBeVisible();
    await expect(
      this.page.getByRole('button', { name: 'Create Account' })
    ).toBeVisible();
  }

  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Form Filling Methods <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

  async fillRegistrationForm(customerInfo: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }) {
    const firstName = customerInfo.firstName || faker.name.firstName();
    const lastName = customerInfo.lastName || faker.name.lastName();
    const email = customerInfo.email || faker.internet.email();
    const password = customerInfo.password || 'TestPassword123!';
    const confirmPassword = customerInfo.confirmPassword || password;

    await this.page
      .locator(selector.customer.registration.firstName)
      .fill(firstName);
    await this.page
      .locator(selector.customer.registration.lastName)
      .fill(lastName);
    await this.page.locator(selector.customer.registration.email).fill(email);
    await this.page
      .locator(selector.customer.registration.password)
      .fill(password);
    await this.page
      .locator(selector.customer.registration.confirmPassword)
      .fill(confirmPassword);

    return {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
  }

  async fillRegistrationFormWithFaker() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = 'TestPassword123!';

    await this.page
      .locator(selector.customer.registration.firstName)
      .fill(firstName);
    await this.page
      .locator(selector.customer.registration.lastName)
      .fill(lastName);
    await this.page.locator(selector.customer.registration.email).fill(email);
    await this.page
      .locator(selector.customer.registration.password)
      .fill(password);
    await this.page
      .locator(selector.customer.registration.confirmPassword)
      .fill(password);

    return {
      firstName,
      lastName,
      email,
      password,
    };
  }

  async fillRegistrationFormWithTestData() {
    await this.page
      .locator(selector.customer.registration.firstName)
      .fill(data.customer.customerInfo.firstName());
    await this.page
      .locator(selector.customer.registration.lastName)
      .fill(data.customer.customerInfo.lastName());
    await this.page
      .locator(selector.customer.registration.email)
      .fill(data.customer.customerInfo.email);
    await this.page
      .locator(selector.customer.registration.password)
      .fill(data.customer.customerInfo.password);
    await this.page
      .locator(selector.customer.registration.confirmPassword)
      .fill(data.customer.customerInfo.confirmPassword);
  }

  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Form Submission Methods <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

  async submitRegistrationForm() {
    await this.page.getByRole('button', { name: 'Create Account' }).click();
  }

  async createAccount() {
    await this.submitRegistrationForm();
  }

  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Validation Methods <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

  async validateSuccessfulRegistration() {
    await expect(
      this.page.getByText('Registration successful!', { exact: true })
    ).toBeVisible();
    await expect(this.page.getByText('Please Login')).toBeVisible();
    await expect(
      this.page.getByRole('link', { name: 'Register Here' })
    ).toBeVisible();
    await expect(
      this.page.getByRole('button', { name: 'Sign in with Google' })
    ).toBeVisible();
  }

  async validateRegistrationError(errorMessage: string) {
    await expect(this.page.getByText(errorMessage)).toBeVisible();
  }

  async validateFieldValidationMessages() {
    // Test empty form submission
    await this.submitRegistrationForm();

    // Validate required field messages
    await expect(this.page.locator('#reg-firstname-error')).toBeVisible();
    await expect(this.page.locator('#reg-lastname-error')).toBeVisible();
    await expect(this.page.locator('#reg-email-error')).toBeVisible();
    await expect(this.page.locator('#reg-password-error')).toBeVisible();
    await expect(
      this.page.locator('#reg-password-confirmation-error')
    ).toBeVisible();
  }

  async validateEmailFormatValidation() {
    await this.page
      .locator(selector.customer.registration.email)
      .fill('invalid-email');
    await this.submitRegistrationForm();
    await expect(this.page.locator('#reg-email-error')).toBeVisible();
  }

  async validatePasswordMismatch() {
    await this.page
      .locator(selector.customer.registration.password)
      .fill('Password123!');
    await this.page
      .locator(selector.customer.registration.confirmPassword)
      .fill('DifferentPassword123!');
    await this.submitRegistrationForm();
    await expect(this.page.getByText('Passwords do not match')).toBeVisible();
  }

  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Google Sign-up Methods <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

  async verifyGoogleSignupPage() {
    await this.goToCustomerRegistrationPage();
    await expect(
      this.page.getByRole('button', { name: 'Sign up with Google' })
    ).toBeVisible();
  }

  async clickGoogleSignupButton() {
    await this.page
      .getByRole('button', { name: 'Sign up with Google' })
      .click();
  }

  async fillGoogleCredentials(gmailEmail: string, gmailPassword: string) {
    await this.page.getByLabel('Email or phone').click();
    await this.page.getByLabel('Email or phone').fill(gmailEmail);
    await this.page.getByRole('button', { name: 'Next' }).click();

    await expect(
      this.page.getByRole('heading', { name: 'Welcome' }).locator('span')
    ).toBeVisible();

    await this.page.getByLabel('Enter your password').click();
    await this.page.getByLabel('Enter your password').fill(gmailPassword);
    await this.page.getByRole('button', { name: 'Next' }).click();
  }

  async verifyGoogleSignupSuccess() {
    await expect(this.page).toHaveURL(/.*\/customers\/account/);
    await expect(this.page.getByText('Welcome')).toBeVisible();
  }

  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Complete Registration Flow <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

  async completeCustomerRegistration(customerInfo?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }) {
    await this.goToCustomerRegistrationPage();
    await this.fillRegistrationForm(customerInfo || {});
    await this.submitRegistrationForm();
    await this.validateSuccessfulRegistration();
  }

  async completeCustomerRegistrationWithTestData() {
    await this.goToCustomerRegistrationPage();
    await this.fillRegistrationFormWithTestData();
    await this.submitRegistrationForm();
    await this.validateSuccessfulRegistration();
  }

  async completeGoogleCustomerRegistration(
    gmailEmail: string,
    gmailPassword: string
  ) {
    await this.goToCustomerRegistrationPage();
    await this.clickGoogleSignupButton();
    await this.fillGoogleCredentials(gmailEmail, gmailPassword);
    await this.verifyGoogleSignupSuccess();
  }

  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Utility Methods <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

  async isRegistrationFormVisible(): Promise<boolean> {
    return await this.page
      .locator(selector.customer.registration.firstName)
      .isVisible();
  }

  async getRegistrationFormData() {
    const firstName = await this.page
      .locator(selector.customer.registration.firstName)
      .inputValue();
    const lastName = await this.page
      .locator(selector.customer.registration.lastName)
      .inputValue();
    const email = await this.page
      .locator(selector.customer.registration.email)
      .inputValue();

    return {
      firstName,
      lastName,
      email,
    };
  }

  async clearRegistrationForm() {
    await this.page.locator(selector.customer.registration.firstName).clear();
    await this.page.locator(selector.customer.registration.lastName).clear();
    await this.page.locator(selector.customer.registration.email).clear();
    await this.page.locator(selector.customer.registration.password).clear();
    await this.page
      .locator(selector.customer.registration.confirmPassword)
      .clear();
  }

  async navigateToLoginFromRegistration() {
    await this.page.getByRole('link', { name: 'Login Here' }).click();
    await expect(this.page).toHaveURL(endPoints.customerLoginPage);
  }
}
