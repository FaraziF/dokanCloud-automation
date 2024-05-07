import { test, expect } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;


test.beforeAll(async ({ request }) => {
	apiUtils = new ApiUtils(request);
});

test.describe('Customer', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Customer_API_TOKEN)}`, strategy: "customer" } });

	test('get profile', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetAccountDetails);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('update profile', async () => {
		const [response, responseBody] = await apiUtils.patch(endPoints.customerSaveAccountDetails, {data: payloads.customerSaveProfile()});
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

});