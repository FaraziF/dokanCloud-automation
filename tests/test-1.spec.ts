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
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('a').filter({ hasText: /^Products$/ }).click();
  await page.getByRole('link', { name: 'All Products' }).click();
  await page.getByRole('link', { name: 'Categories' }).click();
  await page.getByRole('link', { name: 'Brands' }).click();
});