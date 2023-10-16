import { test, expect, request } from "@playwright/test";
import { endPoints } from "../../utils/apiEndPoints";
import { payloads } from "../../utils/payloads";
import { ApiUtils } from "../../utils/apiUtils";

let apiUtils: ApiUtils;
let productId: string;

test.beforeAll(async ({ request }) => {
	apiUtils = new ApiUtils(request);
	[, productId,] = await apiUtils.createProduct(payloads.productCreate());
});

test.describe("Product Test", () => {
    test('create a product', async () => {
        const [response, responseBody] = await apiUtils.post(endPoints.createProduct, { data: payloads.productCreate(), ...payloads.stroreOwner() });
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
    });
 })
/* test.describe("Product Test", () => {
    test('GET a product', async () => {
        const [response, responseBody] = await apiUtils.get(endPoints.productGetAll);
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
    });
 }) */



 /*
 
 import { test, expect, request } from "@playwright/test";
 import { endPoints } from "../../../utils/apiEndPoints";
 import { payloads } from "../../../utils/payloads";
 import { ApiUtils } from "../../../utils/apiUtils";
 
 let product_id: string;
 
 let adminAuth = { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" }
 
 test.beforeAll( async ({ request }) => {
         let _response = await request.post(endPoints.createProduct, { data: {...payloads.productCreate()}, headers: adminAuth })
         // console.log(await _response.json())
         expect(_response.ok()).toBeTruthy()
         const res = await _response.json()
         product_id = res.data.id;
 
 })
 
 test.describe("Product Test", () => {
 
    test("Get all products", async({ request }) => {
         const _response = await request.get(endPoints.productGetAll, { headers: adminAuth } )
         expect(_response.ok()).toBeTruthy()
 
    })
 
     test("Edit Product", async ({ request }) => {
         const _response = await request.put(endPoints.productUpdate(product_id), { data: { ...payloads.productUpdate() }, headers: adminAuth })
         // console.log(await _response.json())
         expect(_response.ok()).toBeTruthy()
     })
 
     test("Delete Product", async({ request }) => {
         let _response = await request.delete(endPoints.productDelete(product_id), { headers: adminAuth } )
         // console.log(await _response.json())
         expect(_response.ok()).toBeTruthy()
     })
     // Product delete wrong message appear: message: 'Category deleted successfully.'
 })

 */