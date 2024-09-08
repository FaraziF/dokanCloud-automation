import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://farazi.staging.dokandev.com/admin');
  await page.goto('https://farazi.staging.dokandev.com/admin/login');
  await page.getByPlaceholder('yourname@email.com').click();
  await page.getByPlaceholder('yourname@email.com').fill('farazi@wedevs.com');
  await page.getByPlaceholder('yourname@email.com').press('ControlOrMeta+a');
  await page.getByPlaceholder('yourname@email.com').press('ControlOrMeta+c');
  await page.getByPlaceholder('yourname@email.com').press('Tab');
  await page.getByRole('link', { name: 'Forgot your password?' }).press('Tab');
  await page.getByPlaceholder('••••••••').fill('farazi@wedevs.comA1');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Settings' }).click();
  await page.getByRole('link', { name: 'Tax' }).click();
  await page.getByRole('tab', { name: 'Tax Class' }).click();
  await page.locator('button').filter({ hasText: 'Create Tax Class' }).first().click();
  await page.getByPlaceholder('e.g Standard').click();
  await page.getByPlaceholder('e.g Standard').fill('stand');
  await page.getByRole('button', { name: 'Create' }).click();
});