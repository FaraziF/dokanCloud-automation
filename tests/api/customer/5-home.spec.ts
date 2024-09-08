import { test, expect, request } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;


test.beforeAll(async () => {
	// apiUtils = new ApiUtils(request);
	apiUtils = new ApiUtils(await request.newContext());
});

test.describe('Home', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Customer_API_TOKEN)}`, strategy: "customer" } });

	test('get categories', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetCategoriesStore);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

	// Hide For Standalone
	test('get popular store',{ tag: ['@marketplace']}, async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetPopularStore);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

	// Hide For Standalone
	test('get best seller store', { tag: ['@marketplace']}, async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetBestSellerStore);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	// Hide For Standalone
	test('get featured store', { tag: ['@marketplace']}, async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetFeaturedStore);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

	// Hide For Standalone
	test('get new store', { tag: ['@marketplace']}, async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetNewStore);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	
	test('get search product', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetSearchProduct);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	

});