import { expect, request, test } from "@playwright/test";
import { endPoints } from "../../../utils/apiEndPoints";
import { ApiUtils } from "../../../utils/apiUtils";
import { payloads } from "../../../utils/payloads";
import { data } from "../../../utils/testdata";

let apiUtils: any;
let coupon_id: string;
let title: string;

let vendorAuth = { Authorization: `Bearer ${String(process.env.Vendor_API_TOKEN)}` }

test.beforeAll( async ({ request }) => {
    // Create a new coupon
    let _response = await request.post(endPoints.createCoupon, { data: payloads.createCoupon(), headers: vendorAuth })
    // console.log(request)
    // console.log(await _response.text())
    console.log(await _response.json())
    expect(_response.ok()).toBeTruthy()

    const res = await _response.json();
    coupon_id = res.data.id;
    title = res.data.title;
    console.log(await coupon_id)
})

test.describe("Coupon API test", () => {

    test("Get all coupon", async({ request }) => {
        let response = await request.get(endPoints.getAllCoupon, { headers: vendorAuth })
        // let _responseBody = await apiUtils.getResponseBody(response) // ToDo: Need to discuss with raj bhai
        expect(response.ok()).toBeTruthy()
        // expect(response.status()).toBe(200)
        console.log(await response.json())
    })
    test.skip("Get single Coupon", () => {})  // ToDo: Thought crating time automatic view single coupon

   /*  test("Create a new coupon", async({ request }) => {
        let _response = await request.post(endPoints.createCoupon, { data: payloads.createCoupon(), headers: vendorAuth })
        console.log(await _response.json())
        expect(_response.ok()).toBeTruthy()
        expect(_response.status()).toBe(200)
    }) */

    test("Update Coupon", async({ request }) => {
        const _response = await request.patch(endPoints.updateCoupon(coupon_id), { data: {...payloads.updateCoupon(), title: title}, headers: vendorAuth })
        console.log(await _response.json())
        expect(_response.ok()).toBeTruthy()
        expect(_response.status()).toBe(200)
    })

    test("Delete Coupon", async({ request }) => {
        const couponID = coupon_id;
        let _response = await request.delete(endPoints.deleteCoupon(couponID))
        expect(_response.ok()).toBeTruthy()
        expect(_response.status()).toBe(200)
        // expect(_responseBody.message).toMatch('This coupon has been deleted')
        // expect(_response.json()).toContainEqual(expect.objectContaining({ message: 'This coupon has been deleted', })) //Not working
    })
    
})