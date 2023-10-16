// global-setup.ts
import { FullConfig, request } from '@playwright/test';
const env = require('./env')

async function globalSetup(config: FullConfig) {

    const context = await request.newContext({ ignoreHTTPSErrors: true });

    console.log(env('URL'));
    // Admin Login
    let adminData = { email: env('ADMIN_USERNAME'), password: env('ADMIN_PASSWORD'), strategy: "admin" };
    const _adminResponse = await context.post(env('URL') + '/api/v1/auth/login', { data: adminData })
    console.log(env('URL'))
    const adminResonseBody = (await _adminResponse.json())
    process.env.Admin_API_TOKEN = adminResonseBody.token

    // Vendor Login
    let vendorData = { email: env('VENDOR_USERNAME'), password: env('VENDOR_PASSWORD'), strategy: "vendor" }
    const _vendorResponse = await context.post(env('URL') + '/api/v1/auth/login', { data: vendorData })
    const vendorResonseBody = (await _vendorResponse.json())
    process.env.Vendor_API_TOKEN = vendorResonseBody.token

    // Customer Login
    let customerData = { email: env('CUSTOMER_USERNAME'), password: env('CUSTOMER_PASSWORD'), strategy: "customer" }
    const _customerResponse = await context.post(env('URL') + '/api/v1/auth/login', { data: customerData })
    const customerResonseBody = (await _customerResponse.json())
    process.env.Customer_API_TOKEN = customerResonseBody.token
}

export default globalSetup;