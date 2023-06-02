import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://temp-mail.org/');
  await page.getByRole('button').filter({ hasText: 'Copy' }).first().click();
  await page1.goto('https://app.dokandev.com/login');
  await page1.getByRole('link', { name: 'Sign up' }).click();
  await page1.getByPlaceholder('john@example.com').click();
  await page1.getByPlaceholder('john@example.com').click({
    button: 'right'
  });
  await page1.getByPlaceholder('john@example.com').fill('tejaha8324@laserlip.com');
  await page1.locator('#reg-password').click();
  await page1.locator('#reg-password').fill('tejaha8324@laserlip.comA');
  await page1.getByLabel('Confirm Password').click();
  await page1.getByLabel('Confirm Password').fill('tejaha8324@laserlip.comA');
  await page1.getByRole('button', { name: 'Create Account' }).click();
  await page1.getByText('A verification email has been sent to your email with verification link. Please ').click();
  await page.getByRole('listitem').filter({ hasText: 'Dokan Cloud noreply@dokan.co Verify Email Address Verify Email Address' }).getByRole('link').nth(2).click();
  await page.goto('https://temp-mail.org/en/view/63ee12e55060d40239190d31');
  await page.goto('https://temp-mail.org/en/view/');
  await page.goto('https://temp-mail.org/en');
});
