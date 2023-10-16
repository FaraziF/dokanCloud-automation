import { test, expect } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;
let customerID: number;
let customerEmail;


test.beforeAll(async ({ request }) => {
	apiUtils = new ApiUtils(request);
});

test.describe('customers', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" } });

	test('get all customers', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getAllCustomer);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get pagination customers data', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getPaginationPageCustomerData);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get active customers', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getActiveCustomer);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('get inActive customers', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getInactiveCustomer);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

	test('create a new customer', async () => {
		const [response, responseBody] = await apiUtils.post(endPoints.createNewCustomer, { data: payloads.createCustomers() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        const _res = await response.json()
        customerID = _res.data.id
		customerEmail = _res.data.email
	});
	test('search customer', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.searchCustomer(customerEmail));
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        const _res = await response.json()
	});
	test('edit customer', async () => {
		const [response, responseBody] = await apiUtils.patch(endPoints.editCreatedCustomer(customerID), { data: payloads.editCustomers() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        const _res = await response.json()
	});
	test('reset customer password', async () => {
		const [response, responseBody] = await apiUtils.patch(endPoints.resetCreatedCustomer(customerID), { data: payloads.resetPassword() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        const _res = await response.json()
	});
	test('deactivate customer', async () => {
		const [response, responseBody] = await apiUtils.patch(endPoints.deactivatedCreatedCustomer(customerID));
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        console.log(await response.json())
	});
});