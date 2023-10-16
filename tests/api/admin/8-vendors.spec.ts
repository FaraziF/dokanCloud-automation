import { test, expect } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;


test.beforeAll(async ({ request }) => {
	apiUtils = new ApiUtils(request);
});

test.describe('vendors', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" } });

	test('get all vendors', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getAllVendors);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get pending payouts', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getPendingVendors);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get verified payouts', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getVerifiedVendors);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
    // todo: filter & vendor edit
	
});