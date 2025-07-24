import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://farazi.staging.dokandev.com/login');
  await page.getByPlaceholder('youremail@example.com').click();
  await page
    .getByPlaceholder('youremail@example.com')
    .fill('farazi+customer1@wedevs.com');
  await page.getByPlaceholder('youremail@example.com').press('ControlOrMeta+a');
  await page.getByPlaceholder('youremail@example.com').press('ControlOrMeta+c');
  await page.getByPlaceholder('youremail@example.com').press('Tab');
  await page
    .getByPlaceholder('Minimum 6 characters')
    .fill('farazi+customer1@wedevs.comA1');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
  await page.getByRole('heading', { name: 'Personal Profile' }).click();
  await page.getByRole('heading', { name: 'Home' }).click();
  await page.getByRole('heading', { name: 'Recent Orders' }).click();
  await expect(
    page.getByRole('heading', { name: 'Personal Profile' })
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Recent Orders' })
  ).toBeVisible();
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.locator('label').filter({ hasText: 'Upload new picture' }).click();
  await page.getByRole('tab', { name: 'Upload Files' }).click();
  await page.getByRole('tab', { name: 'Media Library' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByText('Profile Updated').click();
  await page.getByRole('link', { name: 'My Account' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await expect(
    page.locator('[id="headlessui-dialog-\\:rg4\\:"]')
  ).toContainText('Edit Address');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByText('Address has been updated').click();
});
