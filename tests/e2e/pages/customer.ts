import { expect, type Page } from '@playwright/test';
import { isVisible } from '../../../utils/common-actions';
import { selector } from './selectors';
import { BasePage } from './basePage';
import { data } from '../../../utils/testdata';
import { endPoints } from '../../../utils/apiEndPoints';
import { faker } from '@faker-js/faker';
import { MailSlurp } from 'mailslurp-client';

// Initialize MailSlurp client
// const mailslurp = new MailSlurp({
//   apiKey: 'ce9a541fdbac7c2f805621f95a66d834a713b6d60dd48ec81703b4b9d9cf6f41',
// });

export class Customer extends BasePage {
  // readonly page: Page;

  constructor(page: Page) {
    // this.page = page;
    super(page);
  }

  async goToHomePage() {
    await this.page.goto(endPoints.customerHomePage);
  }
  async goToLoginPage() {
    await this.page.goto(endPoints.customerLoginPage);
  }

  async clickSignButton() {
    await this.page
      .getByRole('button', { name: 'Sign in', exact: true })
      .click();
  }

  async goToRegistrationPage() {
    await this.page.goto(endPoints.customerRegistrationPage);
  }

  async recoverPasswordButton() {
    await this.page.getByRole('button', { name: 'Recover Password' }).click();
  }

  async createButton() {
    await this.page.getByRole('button', { name: 'Create Account' }).click();
  }

  async signupNextStep() {
    await this.page.getByRole('button', { name: 'Next' }).click();
  }

  async navigateLoginPage() {
    await this.page.goto(endPoints.customerHomePage);
    await expect(
      this.page.getByRole('searchbox', { name: 'Search...' })
    ).toBeVisible();
    await expect(this.page.getByRole('banner')).toContainText('Login');
    await this.page.getByRole('link', { name: 'Login' }).click();
  }

  async verifyLoginPageFunctionality() {
    await expect(this.page).toHaveURL(endPoints.customerLoginPage);
    await expect(this.page.getByRole('main')).toContainText('Please Login');
    await expect(
      this.page.getByRole('link', { name: 'Register Here', exact: true })
    ).toBeVisible();

    await expect(
      this.page.getByRole('button', {
        name: 'Sign in with Google',
        exact: true,
      })
    ).toBeVisible();
  }

  async verifyLoginFieldRequiredMessage() {
    await this.clickSignButton();
    await expect(
      this.page.getByText('The email field is required.')
    ).toBeVisible();
    await expect(this.page.getByText('The password field is')).toBeVisible();
  }

  async navigateRegisterPage() {
    await this.page.goto(endPoints.customerHomePage);
    await expect(
      this.page.getByRole('searchbox', { name: 'Search...' })
    ).toBeVisible();
    await expect(this.page.getByRole('banner')).toContainText('Signup');
    await this.page.getByRole('link', { name: 'Signup' }).click();
  }

  async verifyRegistrationPageFunctionality() {
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

  async fillRegistrationForm(email, password, confirmPassword) {
    await this.page.getByPlaceholder('John', { exact: true }).click();
    await this.page
      .getByPlaceholder('John', { exact: true })
      .fill(faker.name.firstName());
    await this.page.getByPlaceholder('Doe').click();
    await this.page.getByPlaceholder('Doe').fill(faker.name.lastName());
    await this.page.getByPlaceholder('john@example.com').click();
    await this.page.getByPlaceholder('john@example.com').fill(email);
    await this.page.getByLabel('Password', { exact: true }).click();
    await this.page.getByLabel('Password', { exact: true }).fill(password);
    await this.page.getByLabel('Confirm Password').click();
    await this.page.getByLabel('Confirm Password').fill(confirmPassword);
  }

  async verifyCustomerRegistration() {
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

  async verigyGoogleSignupPage() {
    await this.page
      .getByRole('button', { name: 'Sign up with Google', exact: true })
      .click();
    await expect(
      this.page.getByRole('img', { name: 'Dokan Cloud' })
    ).toBeVisible();
  }

  async fillCredentials(gmailEmail, gmailPassword) {
    await this.page.getByLabel('Email or phone').click();
    await this.page.getByLabel('Email or phone').fill(gmailEmail);
    await this.signupNextStep();
    await expect(
      this.page.getByRole('heading', { name: 'Welcome' }).locator('span')
    ).toBeVisible();
    await this.page.getByLabel('Enter your password').click();
    await this.page.getByLabel('Enter your password').fill(gmailPassword);
    await this.signupNextStep();
  }

  async verifySignupSuccess() {
    await expect(this.page.getByText('Login Successful')).toBeVisible();
    await expect(this.page).toHaveURL(endPoints.customerHomePage);
    // await expect(
    //   this.page.getByRole('heading', { name: 'My Account' })
    // ).toBeVisible();
    // await expect(this.page.getByRole('main')).toContainText(
    //   'abcv84099@gmail.com'
    // );
  }

  async customerLogout() {
    await expect(this.page.getByRole('banner')).toContainText('Hello');
    // if (await this.page.getByRole('banner', { name: 'Hello' }).isVisible()) {
    //   await this.page.getByRole('banner', { name: 'Hello' }).click();
    // }
    // await this.page.locator("//div[@class='auth-box']").click();
    await this.page.getByRole('button', { name: 'Hello' }).click();
    await expect(
      this.page.getByRole('link', { name: 'My Account' })
    ).toBeVisible();
    await this.page.getByRole('link', { name: 'Sign Out' }).click();
    await this.page.waitForURL(endPoints.customerLoginPage);
    await expect(this.page.getByText('Please Login')).toBeVisible();
  }

  async chooseLanguageFillCredentials(gmailEmail, gmailPassword) {
    const googleSignInEnglish = this.page.getByText('Sign in');
    const googleSignInBangla = this.page.getByText('একটি অ্যাকাউন্ট বেছে নিন');
    await expect(
      googleSignInEnglish.or(googleSignInBangla).first()
    ).toBeVisible();
    if (await googleSignInBangla.isVisible()) {
      await this.page.getByLabel('বাংলা').locator('div').click();
      await this.page
        .getByRole('option', { name: 'English (United States)' })
        .click();
    } else {
      await this.fillCredentials(gmailEmail, gmailPassword);
    }

    //   await expect(this.page.locator('#headingText')).toContainText('Sign in');
    // await expect(this.page.getByText('Sign in', { exact: true })).toBeVisible();
  }

  async forgotPasswordFlow(email) {
    await this.page.getByRole('link', { name: 'Forgot Password?' }).click();
    await expect(this.page.locator('h2')).toContainText(
      'Forgot Your Password?'
    );
    await expect(
      this.page.getByRole('link', { name: 'Return to login' })
    ).toBeVisible();
    await this.recoverPasswordButton();
    await expect(this.page.getByRole('main')).toContainText(
      'Email is required!'
    );
    await expect(this.page.getByText('Email is required!')).toBeVisible();
    await this.page.getByPlaceholder('john@example.com').click();
    await this.page.getByPlaceholder('john@example.com').fill(email);
    await this.recoverPasswordButton();

    // await this.resetEmailProcessAndResetPassword();
  }

  async passwordResetAndVarify(email, newPassword, newConfirmPassword) {
    // Step 7: Fill in and confirm new password
    await this.page.fill("//input[@id='login-password']", newPassword);
    await this.page.fill(
      "//input[@id='login-confirm-password']",
      newConfirmPassword
    );
    await this.page.click("//button[normalize-space()='Reset Password']");

    // Step 8: Verify success message
    await expect(
      this.page.locator('text="Password reset successfully"')
    ).toBeVisible();
    await this.verifyLoginPageFunctionality();

    await this.page.locator('#reg-email').fill(email);
    await this.page.locator("input[name = 'password']").fill(newPassword);
    await this.clickSignButton();
    const redirectURL = this.page.url();
    await this.page.waitForURL(redirectURL, {
      waitUntil: 'networkidle',
    });
  }
}
