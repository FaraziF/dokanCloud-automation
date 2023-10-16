import { test, expect } from "@playwright/test";
import { ApiUtils } from "../../../utils/apiUtils";
import { endPoints } from "../../../utils/apiEndPoints";
import { payloads } from "../../../utils/payloads";

let apiUtils: ApiUtils;
let menuID: number;
let menuName;


test.beforeAll(async ({ request }) => {
	apiUtils = new ApiUtils(request);
});

test.describe('menus', () => {
test.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" } });

	test('get all menus', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.getAllMenu);
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});

	test('create a new menu', async () => {
		const [response, responseBody] = await apiUtils.post(endPoints.createMenu, { data: payloads.createMenu() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        const _res = await response.json()
        menuID = _res.data.id
        menuName = _res.data.name
	});
	test('search menu', async () => {
		const [response, responseBody] = await apiUtils.get(endPoints.searchMenu(menuName));
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
	});
	test('edit menu', async () => {
		const [response, responseBody] = await apiUtils.put(endPoints.editMenu(menuID), { data: payloads.editMenu() });
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
		
	});
	test('delete page', async () => {
		const [response, responseBody] = await apiUtils.delete(endPoints.deleteMenu(menuID));
		expect(response.ok()).toBeTruthy();
		expect(responseBody).toBeTruthy();
        console.log(await response.json())
	});
});