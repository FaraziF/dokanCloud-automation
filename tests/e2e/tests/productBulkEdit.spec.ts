import { test, expect, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { data, user } from "../../../utils/testdata";
import { ProductBulkEdit } from "../pages/productBulkEdit";
import { ApiUtils } from '../../../utils/apiUtils';
import { payloads } from "../../../utils/payloads";
import { endPoints } from "../../../utils/apiEndPoints";


let apiUtils: ApiUtils;
let category_name;
let category_id;



test.describe("Product Bulk Edit", ()=> {
    test.use({ storageState: data.auth.adminAuthFile });

    let productBulkEditPage: ProductBulkEdit;
    let page: Page;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext({});
        page = await context.newPage();
        productBulkEditPage = new ProductBulkEdit(page);

        // const [, categoryID, categoryName] = await apiUtils.createCategory(payloads.categoryCreate())
        // category_name = categoryName
        // category_id = categoryID
        // console.log("Category Name: ", categoryName)
    });

    test.afterAll(async () => {
        // const [response, responseBody] = await apiUtils.delete(endPoints.categoryDelete(category_id))
        // expect(response.ok()).toBeTruthy();
	      // expect(responseBody).toBeTruthy();
        await page.close();
    });

    test('bulk edit products and validate changes', async()=>  {

        await productBulkEditPage.productBulkEdit()
    })
})

