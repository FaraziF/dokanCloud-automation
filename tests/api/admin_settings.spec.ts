import { test, expect, request } from "@playwright/test";
import { endPoints } from "../../utils/apiEndPoints";
import { payloads } from "../../utils/payloads";

test.describe("Admin setting API test", () => {
    test("General Settings", async({ request }) => {})
    test("Payment Settings", async({ request }) => {})
    test("Payout Settings", async({ request }) => {})
    test("Shipping Settings", async({ request }) => {})
    test("Notification Settings", async({ request }) => {})
    // test("Notification Settings", async({ request }) => {})
    test("Tax Settings", async({ request }) => {})
    test("Appearance Settings", async({ request }) => {})
    test("SEO Settings", async({ request }) => {})
    test("Snippets Settings", async({ request }) => {})
})