import { Page } from "@playwright/test";

export async function isVisible(page: Page, locator: string): Promise<boolean> {
    await page.waitForSelector(locator);
    return await page.isVisible(locator);
}
/* export async function isVisibleText(page: Page, locator: string): Promise<boolean> {
    await page.innerText(locator);
    return await page.isVisible(locator);
} */


