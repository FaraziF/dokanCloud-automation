import { expect, test } from "@playwright/test";
import { endPoints } from "../../utils/apiEndPoints";
import { faker } from "@faker-js/faker";
import { payloads } from "../../utils/payloads";

let category_id: string;
let attribute_id: string;

let adminAuth = { Authorization: `Bearer ${String(process.env.Admin_API_TOKEN)}` }

test.beforeAll( async({ request }) => {
    let _response = await request.post(endPoints.categoryCreate, { data: payloads.categoryCreate(), headers: adminAuth })
    expect(_response.ok()).toBeTruthy();
    const res = await _response.json();
    category_id = res.data.id;
})

test.describe("Category & Attribute API test", () => {

    test("Get all category", async ({ request }) => {
        let _response = await request.get(endPoints.categoryGetAll);
        expect(_response.ok()).toBeTruthy();
    });

    test("Edit Category", async({ request }) => {
        let _response = await request.put(endPoints.categoryUpdate(category_id), {data: payloads.categoryUpdate(), headers: adminAuth } )
        expect(_response.ok()).toBeTruthy()
    })


// ToDo: create category with parent category


    test("Create attribute", async({ request }) => {
        const _response = await request.post(endPoints.attributeCreate(category_id), { data: payloads.attributeCreate(), headers: adminAuth })
        expect(_response.ok()).toBeTruthy();
        const res = await _response.json();
        attribute_id = res.data.attributes[0]._id;
    })

    test("Update attribute", async ({ request }) => {
        const _response = await request.put(endPoints.attributeUpdate(category_id, attribute_id), { data: payloads.attributeUpdate(), headers: adminAuth })
        expect(_response.ok()).toBeTruthy();
    })

    // test("Delete Category", async({ request }) => {
    //     let _response = await request.delete(endPoints.categoryDelete(category_id), {headers: adminAuth})
    //     expect(_response.ok()).toBeTruthy()
    // })

});
