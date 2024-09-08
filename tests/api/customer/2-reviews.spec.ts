import { test, expect, request } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;


test.beforeAll(async () => {
	// apiUtils = new ApiUtils(request);
	apiUtils = new ApiUtils(await request.newContext());
});

test.describe('Reviews', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Customer_API_TOKEN)}`, strategy: "customer" } });

	test('get pending reviews', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetPendingReview);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

	test('get review history', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.customerGetReviewHistory);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	

});