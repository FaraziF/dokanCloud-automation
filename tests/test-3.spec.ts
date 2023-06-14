import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://farazi.dokandev.com/');
  await page.getByRole('link', { name: 'Shop', exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: 'Go to Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByPlaceholder('youremail@example.com').click();
  await page.getByPlaceholder('youremail@example.com').fill('farazi@gmail.com');
  await page.getByRole('button', { name: 'Continue as Guest' }).click();
  await page.locator('.css-98q0e7').click();
  await page.locator('#react-select-2-input').fill('ban');
  await page.getByText('Bangladesh', { exact: true }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Uttara');
  await page.getByText('UttaraDhaka, Bangladesh').nth(1).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Uttara ');
  await page.getByText('UttaraDhaka, Bangladesh').nth(1).click();
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Uttara');
  await page.getByText('UttaraDhaka, Bangladesh').nth(1).click();
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('Mirpur');
  await page.getByText('MirpurDhaka, Bangladesh').nth(1).click();
});