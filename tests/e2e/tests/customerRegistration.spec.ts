import { test, expect, type Page } from '@playwright/test';
import { CustomerRegistrationPage } from '../pages/customerRegistrationPage';
import { faker } from '@faker-js/faker';
import { data } from '../../../utils/testdata';

let customerRegistrationPage: CustomerRegistrationPage;
let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext({});
  page = await context.newPage();
  customerRegistrationPage = new CustomerRegistrationPage(page);
});

test.afterAll(async () => {
  await page.close();
});

test.describe('Customer Registration Page Tests', () => {
  test('should validate registration page elements', async () => {
    await customerRegistrationPage.validateRegistrationPageElements();
  });

  test('should validate all registration form fields are present', async () => {
    await customerRegistrationPage.validateRegistrationFormFields();
  });

  test('should complete customer registration with test data', async () => {
    await customerRegistrationPage.completeCustomerRegistrationWithTestData();
  });

  test('should complete customer registration with custom data', async () => {
    const customCustomerInfo = {
      firstName: 'John',
      lastName: 'Doe',
      email: faker.internet.email(),
      password: 'SecurePassword123!',
      confirmPassword: 'SecurePassword123!',
    };

    await customerRegistrationPage.completeCustomerRegistration(
      customCustomerInfo
    );
  });

  test('should complete customer registration with faker data', async () => {
    // const customerData =
    await customerRegistrationPage.goToCustomerRegistrationPage();
    await customerRegistrationPage.fillRegistrationFormWithFaker();
    await customerRegistrationPage.submitRegistrationForm();
    await customerRegistrationPage.validateSuccessfulRegistration();

    // console.log('Registered customer:', customerData);
  });

  // test('should validate field validation messages for empty form', async () => {
  //   await customerRegistrationPage.goToCustomerRegistrationPage();
  //   await customerRegistrationPage.validateFieldValidationMessages();
  // });

  // test('should validate email format validation', async () => {
  //   await customerRegistrationPage.goToCustomerRegistrationPage();
  //   await customerRegistrationPage.fillRegistrationForm({
  //     firstName: 'Test',
  //     lastName: 'User',
  //     email: 'invalid-email-format',
  //     password: 'Password123!',
  //     confirmPassword: 'Password123!',
  //   });
  //   await customerRegistrationPage.validateEmailFormatValidation();
  // });

  // test('should validate password mismatch', async () => {
  //   await customerRegistrationPage.goToCustomerRegistrationPage();
  //   await customerRegistrationPage.fillRegistrationForm({
  //     firstName: 'Test',
  //     lastName: 'User',
  //     email: faker.internet.email(),
  //     password: 'Password123!',
  //     confirmPassword: 'DifferentPassword123!',
  //   });
  //   await customerRegistrationPage.validatePasswordMismatch();
  // });

  test('should navigate to registration from home page', async () => {
    await customerRegistrationPage.navigateToRegistrationFromHomePage();
  });

  test('should navigate to login page from registration', async () => {
    await customerRegistrationPage.goToCustomerRegistrationPage();
    await customerRegistrationPage.navigateToLoginFromRegistration();
  });

  test('should verify Google signup page elements', async () => {
    await customerRegistrationPage.verifyGoogleSignupPage();
  });

  test('should clear registration form', async () => {
    await customerRegistrationPage.goToCustomerRegistrationPage();
    await customerRegistrationPage.fillRegistrationFormWithFaker();
    await customerRegistrationPage.clearRegistrationForm();

    // Verify form is cleared
    const formData = await customerRegistrationPage.getRegistrationFormData();
    expect(formData.firstName).toBe('');
    expect(formData.lastName).toBe('');
    expect(formData.email).toBe('');
  });

  test('should check if registration form is visible', async () => {
    await customerRegistrationPage.goToCustomerRegistrationPage();
    const isVisible =
      await customerRegistrationPage.isRegistrationFormVisible();
    expect(isVisible).toBeTruthy();
  });

  // test('should handle registration with existing email', async () => {
  //   // First registration
  //   await customerRegistrationPage.completeCustomerRegistrationWithTestData();

  //   // Try to register again with same email
  //   await customerRegistrationPage.goToCustomerRegistrationPage();
  //   await customerRegistrationPage.fillRegistrationFormWithTestData();
  //   await customerRegistrationPage.submitRegistrationForm();

  //   // Should show error for existing email
  //   await customerRegistrationPage.validateRegistrationError(
  //     'Email already exists'
  //   );
  // });

  test('should test registration with minimum required fields', async () => {
    await customerRegistrationPage.goToCustomerRegistrationPage();

    // Fill only required fields
    await customerRegistrationPage.fillRegistrationForm({
      firstName: 'Minimal',
      lastName: 'User',
      email: faker.internet.email(),
      password: 'Minimal123!',
      confirmPassword: 'Minimal123!',
    });

    await customerRegistrationPage.submitRegistrationForm();
    await customerRegistrationPage.validateSuccessfulRegistration();
  });

  test('should test registration with special characters in names', async () => {
    await customerRegistrationPage.goToCustomerRegistrationPage();

    await customerRegistrationPage.fillRegistrationForm({
      firstName: 'José María',
      lastName: "O'Connor-Smith",
      email: faker.internet.email(),
      password: 'SpecialChars123!',
      confirmPassword: 'SpecialChars123!',
    });

    await customerRegistrationPage.submitRegistrationForm();
    await customerRegistrationPage.validateSuccessfulRegistration();
  });

  // test('should test registration with long email address', async () => {
  //   await customerRegistrationPage.goToCustomerRegistrationPage();

  //   const longEmail = `very.long.email.address.${faker.random.alphaNumeric(
  //     50
  //   )}@${faker.internet.domainName()}`;

  //   await customerRegistrationPage.fillRegistrationForm({
  //     firstName: 'Long',
  //     lastName: 'Email',
  //     email: longEmail,
  //     password: 'LongEmail123!',
  //     confirmPassword: 'LongEmail123!',
  //   });

  //   await customerRegistrationPage.submitRegistrationForm();
  //   await customerRegistrationPage.validateSuccessfulRegistration();
  // });
});

test.describe('Customer Registration Edge Cases', () => {
  test('should handle registration with very short password', async () => {
    await customerRegistrationPage.goToCustomerRegistrationPage();

    await customerRegistrationPage.fillRegistrationForm({
      firstName: 'Short',
      lastName: 'Password',
      email: faker.internet.email(),
      password: '123',
      confirmPassword: '123',
    });

    await customerRegistrationPage.submitRegistrationForm();
    await customerRegistrationPage.validateRegistrationError(
      'Password must be at least 8 characters'
    );
  });

  test('should handle registration with weak password', async () => {
    await customerRegistrationPage.goToCustomerRegistrationPage();

    await customerRegistrationPage.fillRegistrationForm({
      firstName: 'Weak',
      lastName: 'Password',
      email: faker.internet.email(),
      password: 'password',
      confirmPassword: 'password',
    });

    await customerRegistrationPage.submitRegistrationForm();
    await customerRegistrationPage.validateRegistrationError(
      'Password must contain at least one uppercase letter'
    );
  });

  test('should handle registration with very long names', async () => {
    await customerRegistrationPage.goToCustomerRegistrationPage();

    const longName = faker.random.alphaNumeric(100);

    await customerRegistrationPage.fillRegistrationForm({
      firstName: longName,
      lastName: longName,
      email: faker.internet.email(),
      password: 'LongNames123!',
      confirmPassword: 'LongNames123!',
    });

    await customerRegistrationPage.submitRegistrationForm();
    await customerRegistrationPage.validateSuccessfulRegistration();
  });
});
