import { test as setup, expect, request } from '@playwright/test';
import TestArgs from '@playwright/test';
import { LoginPage } from "../tests/e2e/pages/loginPage";
import { user, data } from '../utils/testdata';
import { selector } from "../tests/e2e/pages/selectors";
import { TIMEOUT } from 'dns';

import { ApiUtils } from "../utils/apiUtils";
import { payloads } from "../utils/payloads";
import { helpers } from '../utils/helpers';
import { endPoints } from '../utils/apiEndPoints';

// import type { TestArgs as PlaywrightTestArgs } from '@playwright/test';


const fs = require('fs');

// Read and parse the JSON file before the test
// const taxTestData = JSON.parse(fs.readFileSync('testdata.json', 'utf-8'));

let apiUtils: ApiUtils;
let category_id;
let category_name;
let vendorID;
let vendorSlug;
let vendorStoreName;
let country_name;
let tax_name;

const {CATEGORY_ID}= process.env
const { PRODUCT_ID }= process.env
const { VENDOR_ID }= process.env
const { VENDOR_SLUG }= process.env
const { VENDOR_STORE_NAME }= process.env
const { PRODUCT_TITLE }= process.env

let vendorAuth = { Authorization: `Bearer ${String(process.env.Vendor_API_TOKEN)}`, strategy: "vendor" }
let adminAuth = { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" }

const shouldRun = process.env.RUN_SPECIFIC === 'true';

// export async function setupData() {

  setup.beforeAll( async () => {
    // apiUtils = new ApiUtils(request);
    apiUtils = new ApiUtils(await request.newContext());
    console.log("Vendor name", VENDOR_ID)
  })


  setup.describe('Data setup with', () => {
    
    setup('Create Category', async ({ page }) => {
      
        // apiUtils = new ApiUtils(await request.newContext());
        const [, categoryID, categoryName] = await apiUtils.createCategory(payloads.categoryCreate())
        category_id = categoryID
        helpers.createEnvVar('CATEGORY_ID', categoryID)
        helpers.createEnvVar('CATEGORY_NAME', categoryName)
    });

    setup('Get Vendor ID, Slug, Name', async() => {
     
      const [response, responseBody] = await apiUtils.get(endPoints.getIndividualVendorInformation, { headers: vendorAuth });
      expect(response.ok()).toBeTruthy();
	    expect(responseBody).toBeTruthy();
      const res = await response.json()
      vendorID = res.data.id;
      vendorSlug = res.data.slug;
      vendorStoreName = res.data.storeName;
      helpers.createEnvVar('VENDOR_ID', vendorID)
      helpers.createEnvVar('VENDOR_SLUG', vendorSlug)
      helpers.createEnvVar('VENDOR_STORE_NAME', vendorStoreName)
      // console.log("VENDOR_ID Log:", VENDOR_ID)
      // console.log("VENDOR_SLUG Log:", VENDOR_SLUG)
      // console.log("VENDOR_STORE_NAME Log:", VENDOR_STORE_NAME)
      console.log("Vendor name", VENDOR_ID)

    })
    setup('Create Product',{ tag: ['@local'] }, async () => {
        // apiUtils = new ApiUtils(await request.newContext());
        console.log("Vendor name", VENDOR_ID)
        console.log("Vendor name", process.env.VENDOR_STORE_NAME)
        const [, proeuctID, productName] = await apiUtils.createProduct({...payloads.productCreate(process.env.CATEGORY_ID, process.env.VENDOR_ID, process.env.VENDOR_SLUG, process.env.VENDOR_STORE_NAME)})
        helpers.createEnvVar('PRODUCT_ID', proeuctID)
        helpers.createEnvVar('PRODUCT_TITLE', productName)
    });

    setup('Admin Manage Vendor Onboarding Settings', async () => {
        const [ response, responseBody ] = await apiUtils.put(endPoints.vendorOnboardingManage, {data: payloads.updateVendorOnboading()}, { headers: adminAuth });
        expect(response.ok()).toBeTruthy();
        expect(responseBody).toBeTruthy();
    })
});
// setup.describe('Admin settings setup', () => {
  
   
//     // Access data from the JSON file
//     const { name, country } = taxTestData;
//       // setup.use({ extraHTTPHeaders: { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}`, strategy: "admin" } });
//       setup('Create new country tax', async () => {
//         console.log("Admin_API_TOKEN:", process.env.Admin_API_TOKEN);
//         // const _addTaxCountry  = payloads.addTaxCountry();
//         const [response, responseBody] = await apiUtils.post(endPoints.addTaxCountry(name), {data: payloads.addTaxCountry(name, country)}, { headers: adminAuth });
//         expect(response.ok()).toBeTruthy();
//         expect(responseBody).toBeTruthy();
//         // const res = await response.json() as TaxResponseType
//         // tax_name = res.data.name
//         // country_name = res.data.name
//         // helpers.createEnvVar('TAX_NAME', tax_name)
//         // helpers.createEnvVar('COUNTRY_NAME', country_name)  
//       })
    
// });





// }
// export default setupData();
