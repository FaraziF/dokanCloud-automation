import { test, expect } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;


test.beforeAll(async ({ request }) => {
	apiUtils = new ApiUtils(request);
});

test.describe('Home', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Customer_API_TOKEN)}`, strategy: "customer" } });

	test('get categories', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetCategoriesStore);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

	test('get popular store', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetPopularStore);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

	test('get best seller store', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetBestSellerStore);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

	test('get featured store', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetFeaturedStore);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

	test('get new store', async () => {
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