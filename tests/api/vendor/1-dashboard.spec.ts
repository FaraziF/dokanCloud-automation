import { test, expect, request } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;


test.beforeAll(async () => {
	// apiUtils = new ApiUtils(request);
	apiUtils = new ApiUtils(await request.newContext());
});

test.describe('vendor dashbaord', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Vendor_API_TOKEN)}`, strategy: "vendor" } });

	test('get today report', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getVendorDashbaordTodayReport);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get hourle report', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getVendorDashbaordHourlyReport);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get todos report', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getVendorDashbaordTodosReport);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

    // todo top selling
	
});