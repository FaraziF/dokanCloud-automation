import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://farazi.dokandev.com/admin');
  await page.goto('https://farazi.dokandev.com/admin/login');
  await page.getByPlaceholder('yourname@email.com').click();
  await page.getByPlaceholder('yourname@email.com').fill('farazi@wedevs.com');
  await page.getByPlaceholder('yourname@email.com').press('Meta+a');
  await page.getByPlaceholder('yourname@email.com').press('Meta+c');
  await page.getByPlaceholder('yourname@email.com').press('Tab');
  await page.getByPlaceholder('••••••••').fill('farazi@wedevs.comA1');
  await page.getByPlaceholder('••••••••').press('Enter');
  await page.locator('a').filter({ hasText: /^Products$/ }).click();
  await page.getByRole('link', { name: 'All Products' }).click();
  await page.getByRole('link', { name: 'Add Product' }).click();
  await page.locator('.mt-5 > div > .react-select > .shadow-sm > .css-10rvzng-control > div > .css-98q0e7').click();
  await page.locator('#react-select-6-input').fill('vig');
  await page.locator('#react-select-6-input').press('Enter');
});