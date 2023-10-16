import { expect, request, test } from "@playwright/test";
import { endPoints } from "../../../utils/apiEndPoints";

let vendorAuth = { Authorization: `Bearer ${String(process.env.Vendor_API_TOKEN)}` }


test.only("Coupon Required field test @required_field", async ({ request }) => {
    let _response = await request.post(endPoints.createCoupon, { data: {}, headers: vendorAuth })
    console.log(await _response.json())
    const _responseBody = await _response.json()
    expect(_responseBody.errors.title[0]).toMatch('Coupon title must be string')
    expect(_responseBody.errors.type[0]).toMatch('Coupon type is required')
    expect(_responseBody.errors.amount[0]).toMatch('Coupon amount is required')
    expect(_responseBody.errors.freeShipping[0]).toMatch('This field is required')
    expect(_responseBody.errors.codes[0]).toMatch('Coupon codes is required')
})