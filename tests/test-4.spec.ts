import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shop1.staging.dokandev.com/login');
  await page.getByPlaceholder('youremail@example.com').click();
  await page.getByPlaceholder('youremail@example.com').fill('farazi+customer1@wedevs.com');
  await page.getByPlaceholder('Minimum 6 characters').click();
  await page.getByPlaceholder('Minimum 6 characters').fill('farazi+customer1@wedevs.comA1');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.goto('https://shop1.staging.dokandev.com/customers/account');
  
  //Free Shipping
  await page.goto('https://shop1.staging.dokandev.com/products/free-shipping');
  await page.getByRole('button', { name: 'L', exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.waitForTimeout(1000)

  
  //Without Shipping
  await page.goto('https://shop1.staging.dokandev.com/products/withoutshipping');
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.waitForTimeout(10)

  // Digital Product
  await page.goto('https://shop1.staging.dokandev.com/products/digitalsimple');
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.waitForTimeout(10)
  
  //Product(price)
  await page.goto('https://shop1.staging.dokandev.com/products/productprice-vw14b9s6am');
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.waitForTimeout(10)
  
  //Product(weight)
  await page.goto('https://shop1.staging.dokandev.com/products/wewe');
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.waitForTimeout(10)
  
  //Product(carrier)
  await page.goto('https://shop1.staging.dokandev.com/products/productcarrier');
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.waitForTimeout(10)

  await page.goto('https://shop1.staging.dokandev.com/');





  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('Standard');
  await page.getByText('StandardFree(Shipping)$105.00$').click();
  await page.getByRole('button', { name: 'L', exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('without');
  await page.getByText('withoutShipping$').click();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  // await page.goto('https://shop1.staging.dokandev.com/login');
  // await page.getByPlaceholder('youremail@example.com').click();
  // await page.getByPlaceholder('youremail@example.com').fill('farazi+customer1@wedevs.com');
  // await page.getByPlaceholder('youremail@example.com').press('ControlOrMeta+a');
  // await page.getByPlaceholder('youremail@example.com').press('ControlOrMeta+c');
  // await page.getByPlaceholder('Minimum 6 characters').click();
  // await page.getByPlaceholder('Minimum 6 characters').fill('farazi+customer1@wedevs.comA1');
  // await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  // await page.getByRole('link', { name: 'Shop', exact: true }).click();

  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('product()');
  await page.getByPlaceholder('Search...').press('ArrowLeft');
  await page.getByPlaceholder('Search...').fill('product(price)');
  await page.getByText('Product(Price)$190.50$').click();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('product()');
  await page.getByPlaceholder('Search...').press('ArrowLeft');
  await page.getByPlaceholder('Search...').fill('product(weight)');
  await page.getByText('Product(weight)$').click();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.getByRole('button', { name: 'Go to Cart' }).click();
  
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('digital');
  await page.getByText('Digital(simple)$').click();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.getByRole('button', { name: 'Go to Cart' }).click();
  await page.pause();
});