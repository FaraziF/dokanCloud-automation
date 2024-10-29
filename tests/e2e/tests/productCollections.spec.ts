import { test, expect, Page } from '@playwright/test';
import { user, data } from "../../../utils/testdata";
import { ProductCollecitonsPage } from '../../../tests/e2e/pages/productCollections';
import { ApiUtils } from '../../../utils/apiUtils';
import { endPoints } from '../../../utils/apiEndPoints';
import { request } from 'http';

const { VENDOR_ID }= process.env

let apiUtils: ApiUtils;


test.use({ storageState: data.auth.adminAuthFile });
let adminAuth = { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" }

let productCollectionsPage: ProductCollecitonsPage;
let page: Page;

test.beforeAll(async ({ browser, request }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    productCollectionsPage = new ProductCollecitonsPage(page);
});

test.afterAll(async () => {
    await page.close();
});


test.describe("Product Collections", ()=> {

  test('Create a new collection', async () => {
    await productCollectionsPage.navigateToProductCollectionsPage();
    await productCollectionsPage.createNewProductCollection();
  });

  test('Edit an existing collection', async () => {
    await productCollectionsPage.navigateToProductCollectionsPage();
    await productCollectionsPage.editProductCollection();
  });

  test('Delete a collection', async () => {
   await productCollectionsPage.navigateToProductCollectionsPage();
   await productCollectionsPage.deleteProductCollection();
  });
})
