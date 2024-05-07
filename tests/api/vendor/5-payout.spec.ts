import { test, expect } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";
import { data } from "../../../utils/testdata";

let apiUtils: ApiUtils;
let shippingProfileID;
let weightRuleID;


test.beforeAll(async ({ request }) => {
	apiUtils = new ApiUtils(request);
});

test.describe('Payout', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Vendor_API_TOKEN)}`, strategy: "vendor" } });

	test('Get Payout', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.vendorGetPayout);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('Get Payout Summary', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.vendorGetPayoutSummary);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('Get Payout Compare Balance', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.vendorGetCompare);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('Get Payout Dashboard Balance', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.vendorGetDashboardBalance);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('Get Payout Dashboard Withdraw', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.vendorGetDashboardWithdraw);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('Get Payout Balance in', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.vendorGetBalanceIN);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('Get Payout Withdraw', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.vendorGetWithdraws);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
		
});