# Customer Registration Page Object Class

## Overview

The `CustomerRegistrationPage` class is a comprehensive page object model for testing customer registration functionality. It extends the `BasePage` class and provides methods for navigating, validating, and interacting with the customer registration page.

## Features

- **Navigation Methods**: Navigate to registration page from different entry points
- **Form Validation**: Validate page elements and form fields
- **Form Filling**: Multiple methods for filling registration forms with different data sources
- **Form Submission**: Submit registration forms and handle responses
- **Validation Methods**: Validate successful registration and error scenarios
- **Google Sign-up**: Support for Google OAuth registration flow
- **Utility Methods**: Helper methods for form manipulation and data retrieval

## Usage

### Basic Setup

```typescript
import { CustomerRegistrationPage } from '../pages/customerRegistrationPage';

let customerRegistrationPage: CustomerRegistrationPage;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext({});
  const page = await context.newPage();
  customerRegistrationPage = new CustomerRegistrationPage(page);
});
```

### Navigation Methods

```typescript
// Navigate directly to registration page
await customerRegistrationPage.goToCustomerRegistrationPage();

// Navigate from home page
await customerRegistrationPage.navigateToRegistrationFromHomePage();

// Navigate to login page
await customerRegistrationPage.goToCustomerLoginPage();
```

### Page Validation

```typescript
// Validate all page elements
await customerRegistrationPage.validateRegistrationPageElements();

// Validate form fields are present
await customerRegistrationPage.validateRegistrationFormFields();
```

### Form Filling Methods

#### 1. Fill with Custom Data

```typescript
const customerInfo = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  password: 'SecurePassword123!',
  confirmPassword: 'SecurePassword123!',
};

await customerRegistrationPage.fillRegistrationForm(customerInfo);
```

#### 2. Fill with Faker Data

```typescript
const customerData =
  await customerRegistrationPage.fillRegistrationFormWithFaker();
console.log('Generated data:', customerData);
```

#### 3. Fill with Test Data

```typescript
await customerRegistrationPage.fillRegistrationFormWithTestData();
```

### Form Submission

```typescript
// Submit the form
await customerRegistrationPage.submitRegistrationForm();

// Or use the alias
await customerRegistrationPage.createAccount();
```

### Complete Registration Flows

#### 1. Complete Registration with Custom Data

```typescript
await customerRegistrationPage.completeCustomerRegistration({
  firstName: 'Jane',
  lastName: 'Smith',
  email: 'jane.smith@example.com',
  password: 'SecurePassword123!',
  confirmPassword: 'SecurePassword123!',
});
```

#### 2. Complete Registration with Test Data

```typescript
await customerRegistrationPage.completeCustomerRegistrationWithTestData();
```

#### 3. Complete Google Registration

```typescript
await customerRegistrationPage.completeGoogleCustomerRegistration(
  'test@gmail.com',
  'gmailPassword'
);
```

### Validation Methods

#### 1. Validate Successful Registration

```typescript
await customerRegistrationPage.validateSuccessfulRegistration();
```

#### 2. Validate Error Messages

```typescript
await customerRegistrationPage.validateRegistrationError(
  'Email already exists'
);
```

#### 3. Validate Field Validation Messages

```typescript
await customerRegistrationPage.validateFieldValidationMessages();
```

#### 4. Validate Email Format

```typescript
await customerRegistrationPage.validateEmailFormatValidation();
```

#### 5. Validate Password Mismatch

```typescript
await customerRegistrationPage.validatePasswordMismatch();
```

### Google Sign-up Methods

```typescript
// Verify Google signup page
await customerRegistrationPage.verifyGoogleSignupPage();

// Click Google signup button
await customerRegistrationPage.clickGoogleSignupButton();

// Fill Google credentials
await customerRegistrationPage.fillGoogleCredentials(
  'email@gmail.com',
  'password'
);

// Verify Google signup success
await customerRegistrationPage.verifyGoogleSignupSuccess();
```

### Utility Methods

#### 1. Check Form Visibility

```typescript
const isVisible = await customerRegistrationPage.isRegistrationFormVisible();
expect(isVisible).toBeTruthy();
```

#### 2. Get Form Data

```typescript
const formData = await customerRegistrationPage.getRegistrationFormData();
console.log('Form data:', formData);
```

#### 3. Clear Form

```typescript
await customerRegistrationPage.clearRegistrationForm();
```

#### 4. Navigate to Login

```typescript
await customerRegistrationPage.navigateToLoginFromRegistration();
```

## Test Examples

### Basic Registration Test

```typescript
test('should complete customer registration', async () => {
  await customerRegistrationPage.completeCustomerRegistrationWithTestData();
});
```

### Registration with Custom Data

```typescript
test('should register with custom data', async () => {
  const customerInfo = {
    firstName: 'John',
    lastName: 'Doe',
    email: faker.internet.email(),
    password: 'SecurePassword123!',
    confirmPassword: 'SecurePassword123!',
  };

  await customerRegistrationPage.completeCustomerRegistration(customerInfo);
});
```

### Validation Test

```typescript
test('should validate empty form submission', async () => {
  await customerRegistrationPage.goToCustomerRegistrationPage();
  await customerRegistrationPage.validateFieldValidationMessages();
});
```

### Error Handling Test

```typescript
test('should handle existing email registration', async () => {
  // First registration
  await customerRegistrationPage.completeCustomerRegistrationWithTestData();

  // Try to register again with same email
  await customerRegistrationPage.goToCustomerRegistrationPage();
  await customerRegistrationPage.fillRegistrationFormWithTestData();
  await customerRegistrationPage.submitRegistrationForm();

  // Validate error message
  await customerRegistrationPage.validateRegistrationError(
    'Email already exists'
  );
});
```

## Dependencies

- `@playwright/test`: Playwright testing framework
- `@faker-js/faker`: Data generation library
- `BasePage`: Base page object class
- `selector`: Page element selectors
- `data`: Test data utilities
- `endPoints`: API endpoints configuration

## File Structure

```
tests/e2e/pages/
├── customerRegistrationPage.ts    # Main page object class
├── customerRegistration.spec.ts   # Test examples
└── README_CustomerRegistrationPage.md  # This documentation
```

## Best Practices

1. **Use TypeScript**: All methods are properly typed for better IDE support
2. **Error Handling**: Always use `errorCheck()` after navigation
3. **Data Generation**: Use faker for generating test data
4. **Validation**: Always validate page elements before interactions
5. **Reusability**: Use the provided utility methods for common operations
6. **Maintainability**: Keep selectors in the `selectors.ts` file

## Extending the Class

To add new functionality:

1. Add new methods following the existing naming conventions
2. Include proper TypeScript types
3. Add error handling where appropriate
4. Update this documentation
5. Add corresponding test cases

## Troubleshooting

### Common Issues

1. **Element not found**: Ensure selectors are up to date in `selectors.ts`
2. **Navigation failures**: Check if endpoints are correctly configured
3. **Validation failures**: Verify expected text matches actual page content
4. **Form submission issues**: Check if form data is properly formatted

### Debug Tips

1. Use `console.log()` to debug form data
2. Add `await this.page.waitForTimeout(1000)` for debugging
3. Use Playwright's built-in debugging tools
4. Check browser console for JavaScript errors
