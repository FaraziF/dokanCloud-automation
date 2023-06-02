import { expect, test } from "@playwright/test";

test("Crete a order", async({ request, baseURL }) => {
    const _response = await request.post(`${baseURL}/api/v1/orders`, {
        data: {
            cartId: "62de64aaa1f5bd90d9420fee",
            note: "This is new order",
        },
    });
    let responseBody = await _response.json()
    console.log(responseBody)

    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    console.log(await _response.json());
});