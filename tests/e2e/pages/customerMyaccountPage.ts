import { expect, type Page } from '@playwright/test';
import { BasePage } from './basePage';
import { faker } from '@faker-js/faker';
import { endPoints } from '../../../utils/apiEndPoints';
import { readFileSync } from 'fs';

export class CustomerMyaccountPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goToCustomerMyaccountPage() {
    await this.page.getByRole('link', { name: 'My Account ' }).click();
    await expect(
      this.page.getByRole('heading', { name: 'My Account' })
    ).toBeVisible();
  }
}
