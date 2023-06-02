import { expect, request, test } from "@playwright/test";

let _order_group_id: number;

test.describe("Order Processing", async() => {
    test("Order> Crete a order", async ({ request, baseURL }) => {
        const _response = await request.post(`${baseURL}/api/v1/orders`, {
            data: {
                cartId: "62de64aaa1f5bd90d9420fee",
                note: "This is new order",
            },
        });

        expect(_response.status()).toBe(200);
        expect(_response.ok()).toBeTruthy();
        // console.log(await _response.json());

        const res = await _response.json();
        _order_group_id = res.data[0].groupId;
        console.log(_order_group_id);
        
    });

    test("Payment> Crete a payment", async ({ request, baseURL }) => {
        const _response = await request.post(`http://farazi.mydokan.io:8080/api/v1/payments/`, {
            data: {
                card: {
                    number: "5555555555554444",
                    exp_month: "6",
                    exp_year: "2023",
                    cvc: "314",
                },
                orderGroupId: _order_group_id,
            },
        });

        expect(_response.ok()).toBeTruthy();
        expect(_response.status()).toBe(200);
        console.log(await _response.json());
    });

    test("Payment> Fund Transfer", async({ request }) => {
        const _response = await request.post(`http://farazi.mydokan.io:8080/api/v1/payments/transfer`, {
            data: {
                orderGroupId: _order_group_id,
            },
        });

        expect(_response.ok()).toBeTruthy();
        expect(_response.status()).toBe(200);
        console.log(await _response.json());
    })
});

