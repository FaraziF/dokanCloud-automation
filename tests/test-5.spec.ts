import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://farazi.staging.dokandev.com/admin/login');
  await page.getByPlaceholder('yourname@email.com').click();
  await page.getByPlaceholder('yourname@email.com').fill('farazi@wedevs.com');
  await page.getByPlaceholder('yourname@email.com').press('ControlOrMeta+a');
  await page.getByPlaceholder('yourname@email.com').press('ControlOrMeta+c');
  await page.getByPlaceholder('yourname@email.com').press('Tab');
  await page.getByRole('link', { name: 'Forgot your password?' }).press('Tab');
  await page.getByPlaceholder('••••••••').fill('farazi@wedevs.comA1');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('a').filter({ hasText: /^Products$/ }).click();
  await page.getByRole('link', { name: 'All Products' }).click();
  await page.getByRole('columnheader', { name: 'Product' }).click();
  await expect(page.getByRole('columnheader', { name: 'Product' })).toBeVisible();await page.goto('https://farazi.staging.dokandev.com/admin/login');
  await page.getByPlaceholder('yourname@email.com').dblclick();
  await page.getByPlaceholder('yourname@email.com').fill('farazi@wedevs.com');
  await page.getByPlaceholder('yourname@email.com').press('ControlOrMeta+a');
  await page.getByPlaceholder('yourname@email.com').press('ControlOrMeta+c');
  await page.getByPlaceholder('yourname@email.com').press('Tab');
  await page.getByRole('link', { name: 'Forgot your password?' }).press('Tab');
  await page.getByPlaceholder('••••••••').fill('farazi@wedevs.comA1');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('a').filter({ hasText: /^Products$/ }).click();
  await page.getByRole('link', { name: 'Brands' }).click();
  await page.getByRole('row', { name: 'Genderqueer Genderqueer The' }).getByRole('button').click();
});