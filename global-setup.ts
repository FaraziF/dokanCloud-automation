// global-setup.ts
import { FullConfig, request } from '@playwright/test';


async function globalSetup(config: FullConfig) {

    const context = await request.newContext({ ignoreHTTPSErrors: true });

    // Admin Login
    let adminData = { email: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD, strategy: "admin" };
    const _adminResponse = await context.post(process.env.URL + '/api/v1/auth/login', { data: adminData })
    const adminResonseBody = (await _adminResponse.json())
    process.env.Admin_API_TOKEN = adminResonseBody.token

    // Vendor Login
    let vendorData = { email: process.env.VENDOR_EMAIL, password: process.env.VENDOR_PASSWORD, strategy: "vendor" }
    const _vendorResponse = await context.post(process.env.URL + '/api/v1/auth/login', { data: vendorData })
    const vendorResonseBody = (await _vendorResponse.json())
    process.env.Vendor_API_TOKEN = vendorResonseBody.token

    // Customer Login
    let customerData = { email: "farazi@wedevs.com", password: "farazi@wedevs.comA1", strategy: "customer" }
    const _customerResponse = await context.post(process.env.URL + '/api/v1/auth/login', { data: customerData })
    const customerResonseBody = (await _customerResponse.json())
    process.env.Customer_API_TOKEN = customerResonseBody.token

    


    
    
}

export default globalSetup;