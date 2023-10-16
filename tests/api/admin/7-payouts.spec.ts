import { test, expect } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;


test.beforeAll(async ({ request }) => {
	apiUtils = new ApiUtils(request);
});

test.describe('payouts', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" } });

	test('get all payouts', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getAllPayouts);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get pending payouts', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getPendingPayouts);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get completed payouts', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getCompletedPayouts);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get cancelled payouts', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getCancelledPayouts);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get rejected payouts', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getRejectedPayouts);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get upcomming payouts', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getUpcommingPayouts);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
});