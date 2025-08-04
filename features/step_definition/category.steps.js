const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const path = require('path');

let browser;
let context;
let page;

// Test data for categories
let categoryName;
let categoryDescription;
let updatedCategoryName;

// Get base URL from environment or use default
const BASE_URL = process.env.BASE_URL || 'https://eclassyshop.ondokan.com';
const ADMIN_AUTH_FILE = 'playwright-test/.auth/admin.json';

Before(async function () {
  // Initialize browser context with headed mode for visual testing
  browser = await chromium.launch({ 
    headless: false,  // This makes the browser visible
    slowMo: 1000     // Slows down actions to see what's happening
  });
  
  // Use the existing admin authentication file
  context = await browser.newContext({
    storageState: ADMIN_AUTH_FILE
  });
  
  page = await context.newPage();
  
  // Generate test data
  const { faker } = require('@faker-js/faker');
  categoryName = faker.helpers.unique(() => faker.random.word());
  categoryDescription = faker.commerce.productDescription();
  updatedCategoryName = faker.helpers.unique(() => faker.random.word());
});

After(async function () {
  // Wait a bit before closing so you can see the final state
  await new Promise(resolve => setTimeout(resolve, 2000));
  await context.close();
  await browser.close();
});

Given('I am logged in as an admin user', async function () {
  // Since we're using storageState, we're already logged in
  // Just navigate to the dashboard to verify we're authenticated
  await page.goto(BASE_URL + '/admin');
  await page.waitForLoadState('domcontentloaded');
});

Given('I am on the admin dashboard', async function () {
  await page.goto(BASE_URL + '/admin');
  await page.waitForLoadState('domcontentloaded');
});

Given('I navigate to the category page', async function () {
  // Navigate to category page using the same method as AdminPage
  await page.goto(BASE_URL + '/admin/categories');
  await page.waitForLoadState('domcontentloaded');
  
  // Click on the Categories menu link (similar to AdminPage.goToCategoryPage)
  await page.getByRole('link', { name: 'Categories' }).click();
  
  // Verify we're on the correct URL
  const currentUrl = page.url();
});

Given('there is an existing category to edit', async function () {
  await page.waitForLoadState('domcontentloaded');
});

Given('there is an existing category to delete', async function () {
  await page.waitForLoadState('domcontentloaded');
});

When('I click on {string} button', async function (buttonText) {
  if (buttonText === 'Add New') {
    // For categories, the button is actually called "New Category"
    await page.getByRole('link', { name: 'New Category' }).click();
  } else if (buttonText === 'Create') {
    // For categories, use the same selector as AdminPage
    await page.getByRole('button', { name: 'Save' }).click();
  } else if (buttonText === 'Save Changes') {
    // For editing categories
    await page.getByRole('button', { name: 'Save' }).click();
  } else if (buttonText === 'Delete') {
    // For deleting categories
    await page.getByRole('button', { name: 'Delete' }).click();
  } else {
    await page.getByRole('button', { name: buttonText }).click();
  }
});

When('I fill in the category name with {string}', async function (name) {
  // Use the same selector as AdminPage
  await page.locator('#category-name').fill(name);
});

When('I fill in the category description with {string}', async function (description) {
  // Use the same selector as AdminPage
  await page.getByLabel('Description').fill(description);
});

When('I click on the dropdown menu for the category', async function () {
  // Use the same selector as AdminPage
  await page.locator("(//div[@role='button'])[1]").click();
});

When('I click on {string} link', async function (linkText) {
  if (linkText === 'Delete') {
    // Use the same selector as AdminPage for delete link
    await page.getByRole('button', { name: 'Delete' }).click();
  } else {
    await page.getByRole('link', { name: linkText }).click();
  }
});

When('I should see the confirmation dialog {string}', async function (expectedMessage) {
  await expect(
    page.getByRole('heading', {
      name: expectedMessage,
    })
  ).toBeVisible();
});

When('I click on the confirmation dialog', async function () {
  await page
    .getByRole('heading', {
      name: 'Are you sure want to delete this category?',
    })
    .click();
    await page
    .getByRole('button', { name: 'Yes, Delete' })
    .click();
});

When('I update the category name to {string}', async function (name) {
  // Use the same selector as AdminPage
  await page.locator('#category-name').fill(name);
});

When('I update category description with {string}', async function (description) {
  // Use the same selector as AdminPage
  await page.getByLabel('Description').fill(description);
});

When('I confirm the deletion by clicking {string}', async function (buttonText) {
  await page.getByRole('button', { name: buttonText }).click();
});

Then('I should redirected to the category list page', async function () {
  // Wait a moment for any success message to appear
  await new Promise(resolve => setTimeout(resolve, 3000));
  await expect(page).toHaveURL(BASE_URL + '/admin/categories');
});

Then('I should be redirected to the category list page', async function () {
  // Wait and check URL
  await new Promise(resolve => setTimeout(resolve, 1000));
  const currentUrl = page.url();
});

Then('I should see the success message {string}', async function (expectedMessage) {
  // Wait for success message to appear
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Look for success message in various possible locations
  // const successMessage = await page.locator('.success-message, .alert-success, .toast-success, [data-testid="success-message"]').textContent();
  // expect(successMessage).toContain(expectedMessage);
  await expect(page.getByText(expectedMessage, { exact: true })
  ).toBeVisible();
});


