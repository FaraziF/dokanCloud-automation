import { test, expect, request } from "@playwright/test";
import { endPoints } from "../../utils/apiEndPoints";
import { payloads } from "../../utils/payloads";

let vendorAuth = { Authorization: `Bearer ${String(process.env.Vendor_API_TOKEN)}` }
let customerAuth = { Authorization: `Bearer ${String(process.env.Customer_API_TOKEN)}` }

test.describe("Calculation Test", () => {

    test.skip("create product", async({ request }) => {
        let _response = await request.post(endPoints.productGetAll, { data: payloads.productCreate(), headers:vendorAuth })
        console.log(await _response.json())
        expect(_response.ok()).toBeTruthy()
    })

    test("Add To Cart", async({ request }) => {
        let _response = await request.post(endPoints.addToCart, {data: payloads.addToCart(), headers:customerAuth })
        console.log(await _response.json())
        expect(_response.ok()).toBeTruthy()
    })

    /* test("Calculation", async({ request }) => {
        // console.log(payloads.calculate())
        let _response = await request.post(endPoints.calculation, {data: payloads.calculate(), headers:customerAuth })
        console.log(await _response.json())
        // console.log(request)
        
        expect(_response.ok()).toBeTruthy()
    }) */
})