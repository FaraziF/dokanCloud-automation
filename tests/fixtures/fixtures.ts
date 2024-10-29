import {test as base } from "@playwright/test";
import { CategoryCreateAPI } from './api/category.api';

export const test = base.extend<{
  categoryCreateAPI: CategoryCreateAPI;
  // productCreateAPI: ProductCreateAPI;
}>({
  categoryCreateAPI: async ({ request }, use) => {
    await use(new CategoryCreateAPI(request));
  },
  // productCreateAPI: async ({ request }, use) => {
  //   await use(new ProductCreateAPI(request));
  // },
});