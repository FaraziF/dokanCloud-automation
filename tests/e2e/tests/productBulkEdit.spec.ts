import { test, expect,request, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { data, user } from "../../../utils/testdata";
import { ProductBulkEdit } from "../pages/productBulkEdit";
import { ApiUtils } from '../../../utils/apiUtils';
import { payloads } from "../../../utils/payloads";
import { endPoints } from "../../../utils/apiEndPoints";


const { PRODUCT_TITLE }= process.env
const { CATEGORY_NAME }= process.env
const { VENDOR_ID }= process.env
const { VENDOR_SLUG }= process.env
const { VENDOR_STORE_NAME }= process.env

let apiUtils: ApiUtils;
let category_name;
let category_id;
let product_id;
let productTitle: string;
let productTitleUpdate: string= faker.commerce.productName();
let regular = '100';
let sale = '70';
let cost = '45';
let newSKU = 'new-sku';
let newBarcode = 'new-barcode';
let newStockQuantity = '100';
let newLowStockThreshold= '50';
let newTag = 'new-tag';
let updateSEOTitle = 'updated-seo-title';
let newSEOTitle: string = 'new-seo-title';



test.describe("Product Bulk Edit", ()=> {
    test.use({ storageState: data.auth.adminAuthFile });

    let productBulkEdit: ProductBulkEdit;
    let page: Page;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext({});
        page = await context.newPage();
        productBulkEdit = new ProductBulkEdit(page);
        apiUtils = new ApiUtils(await request.newContext());

        const [responseBody, productId, productName] = await apiUtils.createProduct({...payloads.productGenerate(process.env.CATEGORY_ID, process.env.VENDOR_ID, process.env.VENDOR_SLUG, process.env.VENDOR_STORE_NAME)}, payloads.adminAuth)
        product_id = productId
        productTitle = productName
    });

    test.afterAll(async () => {
        await apiUtils.deleteProduct(product_id)
        await page.close();

    });

    test('bulk edit products and validate changes', async()=>  {

        await productBulkEdit.naviagateToProductBulkEditPage(productTitle)
        await productBulkEdit.selectAllColumns()
        await productBulkEdit.updateProductBasicInfo(productTitle, productTitleUpdate)
        // await productBulkEdit.updateProductPricingDetails(regular, cost, sale)
        await productBulkEdit.updateInventoryDetails(newSKU, newBarcode, newStockQuantity, newLowStockThreshold)
        await productBulkEdit.updateBrandTags(newTag)
        await productBulkEdit.updateProductSEO(productTitle, updateSEOTitle)
        await productBulkEdit.saveChangesBulkEdit()
        await productBulkEdit.verifyProductBulkEdit(productTitleUpdate, newSKU, newBarcode, newStockQuantity, updateSEOTitle) 


        // await productBulkEditPage.productBulkEdit() // ignore now   
    })
})

