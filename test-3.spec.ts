import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://farazi.dokandev.com/checkout/6406ba4fb5196718fa621237');
  await page.getByRole('banner').getByRole('link', { name: 'Shop' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: 'Go to Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByPlaceholder('youremail@example.com').click();
  await page.getByPlaceholder('youremail@example.com').fill('ABC@GMAIL.COM');
  await page.getByRole('button', { name: 'Continue as Guest' }).click();
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByPlaceholder('Enter address').click();
  await page.getByPlaceholder('Enter address').fill('MIRPUR DOHS');
  await page.getByText('Mirpur DOHS Shopping ComplexDhaka, Bangladesh').click();
  await page.getByPlaceholder('Enter address').click({
    clickCount: 4
  });
  await page.getByPlaceholder('Enter address').press('Meta+c');
});