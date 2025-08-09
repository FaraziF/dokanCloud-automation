import { test, request, expect, type Page } from '@playwright/test';
import { Customer } from '../pages/customer';
import { ApiUtils } from '../../../utils/apiUtils';
import { faker } from '@faker-js/faker';
import { user, data } from '../../../utils/testdata';
import { start } from 'repl';
import { MailSlurp } from 'mailslurp-client';
import { log } from 'console';
import { endPoints } from '../../../utils/apiEndPoints';
import { endianness } from 'os';

let page: Page;
let apiUtils: ApiUtils;
let customer: Customer;

// const email = faker.internet.exampleEmail();
const password = 'john@example.comA1';
const confirmPassword = 'john@example.comA1';
const newPassword = 'NewSecurePassword123';
const newConfirmPassword = 'NewSecurePassword123';
const gmailEmail = process.env.CUSTOMER_GOOGLE_ACCOUNT_NAME;
const gmailPassword = process.env.CUSTOMER_GOOGLE_ACCOUNT_PASSWORD;

// Initialize MailSlurp client
const mailslurp = new MailSlurp({
  apiKey: 'ce9a541fdbac7c2f805621f95a66d834a713b6d60dd48ec81703b4b9d9cf6f41',
});

// test.use({ storageState: data.auth.vendorAuthFile });

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext({});
  page = await context.newPage();
  customer = new Customer(page);
  apiUtils = new ApiUtils(await request.newContext());
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Customer Login', () => {
  test('Login with email', async () => {
    await customer.navigateLoginPage();
    await customer.verifyLoginPageFunctionality();
    await customer.verifyLoginFieldRequiredMessage;
  });
  test.skip('Forgot password', { tag: ['@local'] }, async () => {
    // Step 1: Generate a disposable email address
    const inbox = await mailslurp.createInbox();
    const email = inbox.emailAddress;
    console.log(`Test email: ${email}`);

    // Registrsation new customer
    await customer.navigateRegisterPage();
    await customer.verifyRegistrationPageFunctionality();
    await customer.fillRegistrationForm(email, password, confirmPassword);
    await customer.createButton();
    await customer.verifyCustomerRegistration();

    // Step 2: Navigate to the login page
    await customer.goToLoginPage();

    // Step 3: Trigger forgot password flow
    await customer.forgotPasswordFlow(email);

    // Step 4: Wait for email to arrive
    console.log('Waiting for email...');
    const emailMessage = await mailslurp.waitForLatestEmail(inbox.id, 60000);
    expect(emailMessage).toBeDefined();

    const domain = endPoints.customerHomePage;
    // Escape special regex characters in the domain
    const escapedDomain = domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Build the regex dynamically
    const regex = new RegExp(`${escapedDomain}reset-password\\?token=[^"]+`);
    console.log(regex);

    // Step 5: Extract the reset password link from the email
    let resetLink: string | null = null;
    if (emailMessage && emailMessage.body) {
      const match = emailMessage.body.match(regex);
      if (match) {
        resetLink = match[0];
        console.log(`Password reset link: ${resetLink}`);
      } else {
        console.error('No match found for password reset link');
      }
    }

    // Step 6: Visit the reset password link
    if (!resetLink) {
      console.error('No reset link found');
      return;
    }
    await page.goto(resetLink);

    await customer.passwordResetAndVarify(
      email,
      newPassword,
      newConfirmPassword
    );
  });

  test('Login with google', async () => {});
});

test.describe('Customer Registration', () => {
  test('Registration with email', async () => {
    // Already new user registration in forgot password scenario
    // await customer.navigateRegisterPage();
    // await customer.verifyRegistrationPageFunctionality();
    // await customer.fillRegistrationForm(email, password, confirmPassword);
    // await customer.createButton();
    // await customer.verifyCustomerRegistration();
  });

  test('Registration with google', async () => {
    await customer.goToRegistrationPage();
    await customer.verigyGoogleSignupPage();
    await customer.chooseLanguageFillCredentials(gmailEmail, gmailPassword);
    await customer.verifySignupSuccess();
    await customer.customerLogout(); // Customer Logout Feature Implement
  });
});
