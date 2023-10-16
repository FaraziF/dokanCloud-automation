import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.locator('a').filter({ hasText: /^Products$/ }).click();
  await page.getByRole('link', { name: 'All Products' }).click();
  await page.goto('https://farazi.dokandev.com/admin/products');
  await page.getByRole('heading', { name: 'Products' }).click();

  await page.getByRole('link', { name: 'Categories' }).click();
  await page.getByRole('heading', { name: 'Categories' }).click();

  await page.getByRole('link', { name: 'Brands' }).click();
  await page.getByRole('heading', { name: 'Brands' }).click();

  await page.locator('a').filter({ hasText: /^Orders$/ }).click();
  await page.getByRole('link', { name: 'All Orders' }).click();
  await page.getByRole('heading', { name: 'Orders' }).click();
  await page.getByText('AllCompletedProcessingPendingFailedCanceledRefunded').click();
  await page.getByRole('button', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Processing' }).click();
  await page.getByRole('button', { name: 'Pending' }).click();
  await page.getByRole('button', { name: 'Failed' }).click();
  await page.getByRole('button', { name: 'Canceled' }).click();
  await page.getByRole('button', { name: 'Refunded' }).click();

  await page.getByRole('link', { name: 'Subscriptions' }).click();
  await page.getByRole('heading', { name: 'Subscription Plans' }).click();
  await page.getByRole('button', { name: 'Published' }).click();
  await page.getByRole('button', { name: 'Draft' }).click();
  await page.getByRole('link', { name: 'New Plan' }).click();
  await page.getByRole('heading', { name: 'Create Subscription Plan' }).click();
  
  await page.locator('a').filter({ hasText: 'Requests' }).click();
  await page.getByRole('link', { name: 'Payouts' }).click();
  await page.getByRole('heading', { name: 'Payout Requests' }).click();
  await page.getByRole('button', { name: 'Pending' }).click();
  await page.getByRole('button', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Cancelled' }).click();
  await page.getByRole('button', { name: 'Rejected' }).click();
  await page.getByRole('button', { name: 'Upcoming' }).click();
  await page.getByRole('button', { name: 'Rejected' }).click();
  await page.getByRole('button', { name: 'Upcoming' }).click();
  await page.getByRole('alert').click();

  await page.getByRole('link', { name: 'Vendors' }).click();
  await page.getByRole('link', { name: 'Vendors' }).click();
  await page.getByRole('heading', { name: 'Vendors' }).click();
  await page.getByRole('button', { name: 'Verified' }).click();
  await page.getByRole('button', { name: 'Pending' }).click();

  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('heading', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Active', exact: true }).click();
  await page.getByRole('button', { name: 'Inactive' }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.locator('div').filter({ hasText: /^Filters$/ }).click();
  await page.getByRole('button', { name: 'Country' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByRole('button', { name: 'Close sidebar' }).click();
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Export' }).click();
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Export' }).click();
  await page.getByRole('link', { name: 'Add Customer' }).click();
  await page.getByRole('heading', { name: 'New Customer' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Customers' }).click();

  await page.locator('a').filter({ hasText: 'Designs' }).click();
  await page.getByRole('link', { name: 'Pages' }).click();
  await page.getByRole('heading', { name: 'Pages' }).click();
  await page.getByRole('link', { name: 'New Page' }).click();
  await page.getByRole('heading', { name: 'New Page' }).click();
  await page.getByRole('button', { name: 'Builder Mode' }).click();

  await page.locator('a').filter({ hasText: 'Settings' }).click();
  await page.getByRole('link', { name: 'General' }).click();
  await page.getByRole('heading', { name: 'Marketplace Details' }).click();
  await page.getByRole('heading', { name: 'General Settings' }).click();
  await page.getByRole('link', { name: 'Business Details' }).click();
  await page.getByRole('heading', { name: 'Business Details' }).click();
  await page.getByRole('link', { name: 'Domain' }).click();
  await page.getByRole('heading', { name: 'Custom Domain' }).click();
  await page.getByRole('link', { name: 'Brand', exact: true }).click();
  await page.getByRole('heading', { name: 'Brand Elements' }).click();

  await page.getByRole('link', { name: 'Team' }).click();
  await page.getByRole('heading', { name: 'Team' }).click();
  await page.getByRole('button', { name: 'Active', exact: true }).click();
  await page.getByRole('button', { name: 'Inactive' }).click();
  await page.getByRole('button', { name: 'Invited' }).click();
  await page.getByPlaceholder('Press enter to search team members...').click();
  await page.getByRole('link', { name: 'Invite New Member' }).click();
  await page.getByRole('heading', { name: 'Inviting team member' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Team' }).click();
  await page.locator('a').filter({ hasText: 'Settings' }).click();

  await page.getByRole('link', { name: 'Payment' }).click();
  await page.getByRole('heading', { name: 'Payment Settings' }).click();
  await page.getByText('Credit Card', { exact: true }).click();
  await page.getByText('Alternative Payment Methods').click();
  await page.getByText('Manual Payments').click();
  await page.locator('a').filter({ hasText: 'Settings' }).click();

  await page.getByRole('link', { name: 'Payout', exact: true }).click();
  await page.getByText('Payout SettingConfigure the payout settings to offer your vendor easy payouts.').click();
  await page.getByText('Payout Options').click();

  await page.getByRole('link', { name: 'Shipping' }).click();
  await page.getByRole('heading', { name: 'Shipping Settings' }).click();
  await page.getByText('Shipping Types').click();
  await page.getByRole('link', { name: 'Notification' }).click();
  await page.getByRole('link', { name: 'Shipping' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Shipping Settings updated.').click();
  await page.getByRole('button', { name: 'Add Shipping Type' }).click();
  await page.getByText('Create Shipping Type').click();
  await page.getByRole('button', { name: '✕' }).click();

  await page.getByRole('link', { name: 'Notification' }).click();
  await page.getByRole('heading', { name: 'Notifications' }).click();
  await page.getByRole('heading', { name: 'Orders' }).click();
  await page.getByRole('heading', { name: 'Orders' }).click();
  await page.getByRole('tab', { name: 'Branding' }).click();
  await page.getByText('Logo', { exact: true }).click();
  await page.getByText('Logo', { exact: true }).click();
  await page.getByText('Logo Width').click();
  await page.getByText('Base Color').click();
  await page.getByText('Base Color').click();

  await page.getByRole('link', { name: 'Tax' }).click();
  await page.getByRole('heading', { name: 'Tax' }).click();
  await page.getByRole('tab', { name: 'Tax Class' }).click();
  await page.getByRole('button', { name: 'Create Tax Class' }).click();
  await page.getByText('New Tax Class').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('tab', { name: 'Country' }).click();
  await page.getByRole('button', { name: 'Import' }).click();
  await page.getByText('Import Tax Rates').click();
  await page.getByRole('button', { name: 'Cancel' }).click();

  await page.getByRole('link', { name: 'SEO' }).click();
  await page.getByRole('heading', { name: 'SEO Settings' }).click();
  await page.getByRole('heading', { name: 'Search Engine Preview' }).click();
  await page.getByRole('heading', { name: 'Search Engine Preview' }).click();
  await page.getByRole('tab', { name: 'Social Share' }).click();
  await page.getByText('og:title').click();
  await page.getByText('og:title').click();
  await page.getByRole('tab', { name: 'Advance' }).click();
  await page.getByRole('heading', { name: 'Structured Data Markup' }).click();
  await page.getByRole('heading', { name: 'Structured Data Markup' }).click();
  await page.getByRole('tab', { name: 'Site Verification' }).click();
  await page.getByText('Google Verification ID').click();
  await page.getByText('Bing Webmaster ID').click();
  await page.getByRole('tab', { name: 'Sitemaps' }).click();
  await page.getByRole('heading', { name: 'Sitemaps' }).click();
  await page.getByRole('heading', { name: 'Sitemaps' }).click();
  await page.getByRole('heading', { name: 'Submit your sitemap index to Google' }).click();

  await page.getByRole('link', { name: 'Policies' }).click();
  await page.getByRole('heading', { name: 'Policies' }).click();
  await page.getByRole('button', { name: 'Open user menu' }).click();
  await page.getByRole('menuitem', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Open user menu' }).click();
  await page.getByRole('menuitem', { name: 'Sign Out' }).click();
  await page.getByText('Admin Login').click();


// Error handling
  await page.getByRole('link', { name: 'All Orders' }).click();
  await page.locator('td').first().click();
  await page.locator('td').first().click();
  await page.getByRole('cell', { name: '1164' }).click();
  await page.getByRole('alert').click();
  await page.getByRole('alert').click();
  await page.getByText('Request failed with status code 404').click();
  await page.getByText('404', { exact: true }).click();
});