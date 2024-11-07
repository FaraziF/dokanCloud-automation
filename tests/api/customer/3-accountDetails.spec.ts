import { test, expect, request } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;


test.beforeAll(async () => {
	// apiUtils = new ApiUtils(request);
	apiUtils = new ApiUtils(await request.newContext());
});

test.describe('Customer', { tag: ['@local']}, () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Customer_API_TOKEN)}`, strategy: "customer" } });

	test('get profile', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetAccountDetails);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test.skip('update profile', async () => {
		const [response, responseBody] = await apiUtils.patch(endPoints.customerSaveAccountDetails, {data: payloads.customerSaveProfile()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

});