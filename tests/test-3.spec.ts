import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://farazi.staging.dokandev.com/admin/login');
  await page.getByPlaceholder('yourname@email.com').click();
  await page.getByPlaceholder('yourname@email.com').fill('farazi@wedevs.com');
  await page.getByPlaceholder('yourname@email.com').press('ControlOrMeta+a');
  await page.getByPlaceholder('yourname@email.com').press('ControlOrMeta+c');
  await page.getByPlaceholder('yourname@email.com').press('Tab');
  await page.getByPlaceholder('••••••••').click();
  await page.getByPlaceholder('••••••••').fill('farazi@wedevs.comA1');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('a').filter({ hasText: /^Products$/ }).click();
  await page.getByRole('link', { name: 'All Products' }).click();
  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.locator('.shadow-sm > .css-1bxtwbf-control > .text-sm > .css-17wv8nz').click();
  await page.locator('#react-select-2-input').nth(1).fill('vendor one');
  await page.getByRole('option', { name: 'vendor one' }).click();
});