import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";


test("Create tax class", async ({ request }) => {
    const _response = await request.post("http://farazi.mydokan.io:3001/api/v1/tax/classes", {
        data: {
            name: faker.lorem.word(),
        },
    });  

    expect(_response.ok()).toBeTruthy();
    expect(_response.status()).toBe(201);
    console.log(await _response.json());
});

