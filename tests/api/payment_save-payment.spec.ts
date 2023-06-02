import { expect, test } from "@playwright/test";

test("Crete a order", async ({ request, baseURL }) => {
    const _response = await request.post(`http://farazi.mydokan.io:8080/api/v1/payments/`, {
        data: {
            card: {
                number: "5555555555554444",
                exp_month: "6",
                exp_year: "2023",
                cvc: "314",
            },
            orderGroupId: 15455970281517498,
        },
    });

    expect(_response.ok()).toBeTruthy();
    expect(_response.status()).toBe(200);
    console.log(await _response.json());
});