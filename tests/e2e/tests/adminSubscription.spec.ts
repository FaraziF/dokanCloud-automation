// import { test, expect, Page } from '@playwright/test';
// import { LoginPage } from "../../pages/loginPage";
// import { selector } from "../../pages/selectors";
// import { user, data } from "../../../../utils/testdata";
// import { AdminPage } from '../../pages/adminPage';
// import { ApiUtils } from '../../../../utils/apiUtils';
// import { endPoints } from '../../../../utils/apiEndPoints';
// import { request } from 'http';

// test.use({ storageState: data.auth.adminAuthFile });
// let adminAuth = { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" }

// test.beforeAll(async ({ browser, request }) => {
//   // apiUtils = new ApiUtils(request); // no activities this line
//   const context = await browser.newContext();
//   page = await context.newPage();
//   adminPage = new AdminPage(page);
//   // console.log(await context.storageState());
// });

// test.afterAll(async () => {
//   await page.close();
// });

// // Hide For Standalone
// test("Subscription Create @sc @subs", { tag: ['@marketplace']}, async({request}) => {
//   await adminPage.createSubscription({request})
// });
// // Hide For Standalone
// test("Edit Subscription @se @subs", { tag: ['@marketplace']}, async() => {
//   await adminPage.editSubscription()
// });
// // Hide For Standalone
// test("Delete Subscription @sd @subs", { tag: ['@marketplace']}, async() => {
//   await adminPage.deleteSubscription()
// });