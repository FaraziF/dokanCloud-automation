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

let adminAuth = { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" }

test.beforeAll( async ({ request }) => {
    apiUtils = new ApiUtils(request);
    const [response, responseBody] = await apiUtils.post(endPoints.categoryCreate, { data: payloads.categoryCreate(), headers: adminAuth} )
    expect(response.ok()).toBeTruthy();
    expect(responseBody).toBeTruthy();  
    const res = await response.json();
    category_id = res.data.id;
    console.log("Cat ID: " + category_id)
})
test.afterAll(async ({}) => {
        const [response, responseBody] = await apiUtils.delete(endPoints.categoryDelete(category_id), {headers: adminAuth})
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
        console.log(await response.json())
});



test.describe("Product Test", () => {

   test("Get all products", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.productGetAll, { headers: adminAuth } )
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
   })
   test("Create new products", async() => {
        const [response, responseBody] = await apiUtils.post(endPoints.createProduct, { data: {...payloads.productCreate(category_id )}, headers: adminAuth })
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();    
        const res = await response.json()
        product_id = res.data.id;
        productTitle = res.data.title
        console.log("Product ID & Title " + product_id + " " + productTitle)
   })
   test("search individua all products", async() => {
        const [response, responseBody] = await apiUtils.get(endPoints.searchIndividualProduct(productTitle), { headers: adminAuth } )
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();

   })

    test("Edit Product", async () => {
        const [response, responseBody] = await apiUtils.put(endPoints.productUpdate(product_id), { data: { ...payloads.productUpdate(category_id) }, headers: adminAuth })
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
    })

    test("Delete Product", async() => {
        const [response, responseBody] = await apiUtils.delete(endPoints.productDelete(product_id), { headers: adminAuth } )
        expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
        console.log(await response.json());
    })
    // Product delete wrong message appear: message: 'Category deleted successfully.'
})