import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://farazi.staging.dokandev.com/login');
  await page.getByPlaceholder('youremail@example.com').click();
  await page
    .getByPlaceholder('youremail@example.com')
    .fill('farazi+customer1@wedevs.com');
  await page.getByPlaceholder('youremail@example.com').press('Shift+ArrowLeft');
  await page.getByPlaceholder('youremail@example.com').press('Shift+ArrowLeft');
  await page.getByPlaceholder('youremail@example.com').press('Shift+ArrowLeft');
  await page.getByPlaceholder('youremail@example.com').press('Shift+ArrowLeft');
  await page.getByPlaceholder('youremail@example.com').press('Shift+ArrowLeft');
  await page.getByPlaceholder('youremail@example.com').dblclick();
  await page.getByPlaceholder('youremail@example.com').press('ControlOrMeta+c');
  await page.getByPlaceholder('Minimum 6 characters').click();
  await page.getByPlaceholder('Minimum 6 characters').fill('com');
  await page.getByPlaceholder('youremail@example.com').dblclick();
  await page.getByPlaceholder('youremail@example.com').press('ControlOrMeta+a');
  await page.getByPlaceholder('youremail@example.com').press('ControlOrMeta+c');
  await page.getByPlaceholder('Minimum 6 characters').dblclick();
  await page
    .getByPlaceholder('Minimum 6 characters')
    .fill('farazi+customer1@wedevs.comA1');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.goto('https://farazi.staging.dokandev.com/customers/account');
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.getByText('Upload new picture').click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
});
