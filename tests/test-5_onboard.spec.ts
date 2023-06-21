import { test, expect } from '@playwright/test';

test('test app.dokandev.com', async ({ page }) => {
  await page.goto('https://app.dokandev.com/login');
  await page.getByPlaceholder('yourname@email.com').click();
  await page.getByPlaceholder('yourname@email.com').fill('farazi@wedevs.com');
  await page.getByPlaceholder('yourname@email.com').press('Meta+a');
  await page.getByPlaceholder('yourname@email.com').press('Tab');
  await page.getByPlaceholder('••••••••').fill('Azad HusenA1');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('The provided credentials do not match our records.').click();
  await page.locator('div').filter({ hasText: /^Password$/ }).getByRole('button').click();
  await page.getByPlaceholder('yourname@email.com').click({
    clickCount: 3
  });
  await page.getByPlaceholder('yourname@email.com').press('Meta+c');
  await page.getByPlaceholder('••••••••').click({
    clickCount: 3
  });
  await page.getByPlaceholder('••••••••').fill('farazi@wedevs.comA1');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Invite User' }).click();
  await page.getByRole('textbox').fill('farazi');
  await page.getByRole('textbox').press('Meta+a');
  await page.getByRole('textbox').fill('votati6932@camplvad.com');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Invite', exact: true }).click();
  await page.getByRole('button', { name: 'Create New Site' }).click();
  await page.getByText('Setup your Marketplace').click();
  await page.getByPlaceholder('Super Market').click();
  await page.getByPlaceholder('Super Market').fill('jondu');
  await page.getByText('Marketplace Available').click();
  await page.getByRole('button', { name: 'Start Creating Marketplace' }).click();
  await page.getByRole('combobox', { name: 'What stage are you in?' }).selectOption('I know what I want to build, but haven\'t started building');
  await page.getByText('What is the size of your current audience?').click();
  await page.getByRole('combobox', { name: 'What is the size of your current audience?' }).selectOption('1 - 100 people');
  await page.getByRole('combobox', { name: 'What\'s your previous experience running a business?' }).selectOption('I have experience running a business before');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Uttara');
  await page.getByText('Dhaka, Bangladesh').first().click();
  await page.getByPlaceholder('Flat, apartments, etc').click();
  await page.getByPlaceholder('Flat, apartments, etc').fill('i/9,west khal par, uttara');
  await page.getByPlaceholder('Postal Code').click();
  await page.getByPlaceholder('Postal Code').fill('1210');
  await page.getByRole('button', { name: 'Finish' }).click();
  await page.getByText('You store is creating....').click();
  await page.getByText('Please wait paitienly, We will redirect to your store in a moment').click();
  await page.getByText('Logged In Successfully!').click();
  await page.getByRole('heading', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Open user menu' }).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.locator('a').filter({ hasText: 'Settings' }).click();
  await page.getByRole('link', { name: 'General' }).click();
  await page.getByLabel('Marketplace Name').click();
  await page.getByLabel('Email Address').click();
  await page.getByRole('link', { name: 'Business Details' }).click();
  await page.getByRole('link', { name: 'Basic' }).click();
});