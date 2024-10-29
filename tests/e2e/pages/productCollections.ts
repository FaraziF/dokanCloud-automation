import { expect, Page } from "@playwright/test";
import { isVisible } from "../framework/common-actions";
import { selector } from "./selectors";
import { BasePage } from "./basePage";
import { data } from "../../../utils/testdata";
import { endPoints } from "../../../utils/apiEndPoints";
import { faker } from "@faker-js/faker";
import path from 'path';

let product: string;
let collectionName: string;
let updateCollection: string;



export class ProductCollecitonsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }


    async navigateToProductCollectionsPage() {
      await this.page.goto(endPoints.productCollectionsPage);
      await this.page.getByRole('link', { name: 'Collections' }).click();
    }
    async imageUploaded() {
      await this.page.getByRole('button', { name: 'Upload Image' }).click();
      await this.page.getByRole('button', { name: 'Upload Files' }).click();
      const imageFile = path.resolve(__dirname, '../../../utils/images/apple.png');
      await this.page.setInputFiles('//input[@type="file"]', imageFile);

      const isChatVisible = this.page.getByLabel('Open chat').getByRole('button').first();
        const isVisible = await isChatVisible.isVisible();
        if (isVisible) {
          await isChatVisible.click();
        }
        await this.page.getByRole('button', { name: 'Select' }).click();
    }
    async createNewProductCollection() {
      collectionName = `Test Collection ${faker.random.word()}`;
      const productSearchTerm = 'Ergonomic Steel Ball';
      await this.page.getByRole('link', { name: 'Create Collection' }).click();
      await this.page.getByPlaceholder('Collection Name').fill(collectionName);
      await this.page.getByLabel('Description').fill(faker.lorem.paragraph());
      //image upload
      await this.imageUploaded();

      await this.page.getByPlaceholder('Search Product').click();
      await this.page.keyboard.type(productSearchTerm, { delay: 20 });
      await this.page.getByRole('checkbox').first().check(); // can't add product with search result
      await this.page.getByRole('button', { name: 'Add' }).click();
      await this.page.getByRole('button', { name: 'Edit Collection SEO' }).click();
      await this.page.getByLabel('Title').fill('SEO Optimized Collection');
      await this.page.locator('#seo-description').fill('This is an SEO optimized collection description');
      await this.page.getByRole('button', { name: 'Save and Publish' }).click();
      await expect(this.page.getByText('Collection created successfully.')).toBeVisible();
    }

    async editProductCollection() {
      const updateCollection = `Updated Test Collection ${faker.random.word()}`;
      const productSearchTerm = 'Handcrafted Soft';
      // await this.page.getByPlaceholder('Search Collections...').fill(collectionName);
      // await this.page.keyboard.press('Enter');
      // await this.page.getByRole('row', { name: collectionName }).getByRole('button').first().click();
      //(//div[@class='relative inline-block'])[1]
      await this.page.locator("(//div[@role='button'])[1]").click();
      await this.page.getByText('Edit', { exact: true }).click();
      await this.page.getByPlaceholder('Collection Name').fill(updateCollection);
      await this.page.getByLabel('Description').fill(faker.lorem.paragraph());
      // await this.page.getByPlaceholder('Search Product').click();
      // await this.page.keyboard.type(productSearchTerm, { delay: 20 });
      // await this.page.getByRole('checkbox').first().check();
      // await this.page.getByRole('button', { name: 'Add' }).click();

      // await this.page.getByRole('button', { name: 'Edit Collection SEO' }).click();
      // await this.page.getByLabel('Title').fill('Updated SEO Optimized Collection');
      // await this.page.locator('#seo-description').fill('Updated This is an SEO optimized collection description');
      await this.page.getByRole('button', { name: 'Save and Publish' }).click();
      await expect(this.page.getByText('Collection updated successfully.')).toBeVisible();
    }

    async deleteProductCollection() {
       // Navigate to the edited product collection
       await this.page.goto(endPoints.productCollectionsPage);
      // const searchCollectionInput = this.page.getByPlaceholder('Search Collections...');
      // await searchCollectionInput.fill(updateCollection);
      // await searchCollectionInput.press('Enter');
      // const collectionRow = this.page.getByRole('row', { name: 'Test Collection' });
      // await collectionRow.getByRole('button').first().click();
      await this.page.locator("(//div[@class='relative inline-block'])[1]").click();
      await this.page.getByText('Delete', { exact: true }).click();
      await expect(this.page.getByRole('heading', { name: 'Are you sure want to delete this collection?' })).toBeVisible();
      await this.page.getByRole('button', { name: 'Yes' }).click();
      await expect(this.page.getByText('Collection deleted')).toBeVisible();
    }}