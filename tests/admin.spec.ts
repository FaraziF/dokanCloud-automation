import { test, expect } from "@playwright/test";
import config from '../config.json';

test('Admin login validation', async ({ page }) => {
    await page.goto('/admin/login');
    await expect(page.locator("//span[text()='Sign In']")).toBeVisible();
    await page.locator('input[name="email"]').fill(config.username_field);
    await page.locator('input[name="password"]').fill(config.password_field);
    await page.locator("input[type='checkbox']").check();
    await page.locator("//span[text()='Sign In']").click();
    const dashboard = await page.innerText("//h1[text()='Dashboard']");
    expect(dashboard).toBe('Dashboard');
})