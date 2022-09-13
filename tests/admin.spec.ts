import { test, expect } from "@playwright/test";

test('Admin login validation', async ({ page }) => {
    await page.goto('https://testing.dokandev.com/admin/login');
    await expect(page.locator("//span[text()='Sign In']")).toBeVisible();
    await page.locator('input[name="email"]').fill('');
    await page.locator('input[name="password"]').fill('');
    await page.locator("input[type='checkbox']").check();
    await page.locator("//span[text()='Sign In']").click();
    const dashboard = await page.innerText("//h1[text()='Dashboard']");
    expect(dashboard).toBe('Dashboard');
})