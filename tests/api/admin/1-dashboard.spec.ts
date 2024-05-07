import { test, expect } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;


test.beforeAll(async ({ request }) => {
	apiUtils = new ApiUtils(request);
});

test.describe('admin dashbaord', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" } });

	test('get set up guide', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getSetupGuide);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get today report', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getadminDashbaordTodayReport);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get hourle report', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getadminDashbaordHourlyReport);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get todos report', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getadminDashbaordTodosReport);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

    // todo top selling
	
});