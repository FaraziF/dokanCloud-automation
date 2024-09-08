import { test, expect, request } from "@playwright/test";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";
import { ApiUtils } from "../../../utils/apiUtils";

let apiUtils: ApiUtils;
let product_id: string;
let productTitle;
let category_id;
/* Scenario:
- In beforeALL, create a new product
- get all product
- Pick the product ID & edit-delete the product
*/

let vendorAuth = { Authorization: `Bearer ${String(process.env.Vendor_API_TOKEN)}`, strategy: "vendor" }
let adminAuth = { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" }

test.beforeAll( async () => {
    // apiUtils = new ApiUtils(request);
    apiUtils = new ApiUtils(await request.newContext());
    /* const [response, responseBody] = await apiUtils.post(endPoints.categoryCreate, { data: payloads.categoryCreate(), headers: adminAuth} )
    expect(response.ok()).toBeTruthy();
    expect(responseBody).toBeTruthy();  
    const res = await response.json();
    category_id = res.data.id;
    console.log("Cat ID: " + category_id) */
})


test.describe("Product Test", () => {

   test("Get all products", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.vendorProductGetAll, { headers: vendorAuth } )
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
   })
   test("Create new products", async() => {
        const [response, responseBody] = await apiUtils.post(endPoints.vendorCreateProduct, { data: {...payloads.productCreate()}, headers: vendorAuth })
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();    
        const res = await response.json()
        product_id = res.data.id;
        productTitle = res.data.title
        console.log("Product ID & Title " + product_id + " " + productTitle)
   })
   test("search individual products", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.vendorSearchIndividualProduct(productTitle), { headers: vendorAuth } )
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
   })
    test("Edit Product", async () => {
        const [response, responseBody] = await apiUtils.put(endPoints.vendorProductUpdate(product_id), { data: { ...payloads.productUpdate() }, headers: vendorAuth })
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
    })

    test("Delete Product", async() => {
        const [response, responseBody] = await apiUtils.delete(endPoints.vendorProductDelete(product_id), { headers: vendorAuth } )
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
        console.log(await response.json());
    })
    // Product delete wrong message appear: message: 'Category deleted successfully.'
    test("get published products", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getVendorPublishedProduct, { headers: vendorAuth } )
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
   })
    test("get draft products", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getVendorDraftProduct, { headers: vendorAuth } )
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
   })
    test("get pagination products", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.getVendorPaginationProduct, { headers: vendorAuth } )
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
   })
})