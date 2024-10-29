import { Page, expect, Response } from "@playwright/test";
import { data } from "../../../utils/testdata";

export class BasePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    // get base url
    getBaseUrl(): string {
        const url = this.getCurrentUrl();
        return new URL(url).origin;
    }

    // get current page url
    getCurrentUrl(): string {
        return this.page.url();
    }

    //  returns whether the current URL is expected
    isCurrentUrl(subPath: string): boolean {
        const url = new URL(this.getCurrentUrl());
        const currentURL = url.href.replace(/[/]$/, ''); // added to remove last '/',
        return currentURL === (this.createUrl(subPath));
    }

    // Create a New URL
    createUrl(subPath: string): string {
        // let url = new URL(process.env.BASE_URL)
        // url.pathname = url.pathname + subPath + '/'
        // return url.href
        return process.env.BASE_URL + '/' + subPath;
    }

    // goto subPath if not already there
    async goIfNotThere(subPath: string): Promise<void> {
        if (!(await this.isCurrentUrl(subPath))) {
            const url = this.createUrl(subPath);
            await this.page.goto(url, { waitUntil: 'networkidle' });
            const currentUrl = this.getCurrentUrl();
            expect(currentUrl).toMatch(subPath);
        }
    }

    // In every page check error
    async errorCheck() {
        // await this.page.waitForTimeout(1000)
        await expect(this.page.getByRole('alert')).not.toBeVisible()
        await expect(this.page.getByText('Request failed with status code 500')).not.toBeVisible();
        await expect(this.page.getByText('Request failed with status code 404')).not.toBeVisible();
        await expect(this.page.getByText('Sorry! Page not found')).not.toBeVisible();
    }

     // wait for url to be loaded
     async waitForUrl(url: string, options: { timeout?: number | undefined; waitUntil?: 'networkidle' | 'load' | 'domcontentloaded' | 'commit' | undefined } | undefined): Promise<void> {
        await this.page.waitForURL(url, options);
    }

    // click & wait for navigation to complete
    async clickAndWaitForUrl(selector: string, url: string): Promise<void> {
        await Promise.all([
            this.page.waitForURL(url, { waitUntil: 'networkidle' }),
            this.page.locator(selector).click(),
        ]);
    }


    // click & wait for load state to complete
    async clickAndWaitForLoadState(selector: string): Promise<void> {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            // this.page.waitForLoadState( 'domcontentloaded' ),
            this.page.locator(selector).click(),
        ]);
    }

    async linkClickAndWaitForLoadState(linkText: string): Promise<void> {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.page.getByText(linkText, { exact: true }).first().click(), // Targets the link by text
        ]);
    }

    async textClickAndWaitForLoadState(text: string): Promise<void> {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            // this.page.waitForLoadState( 'domcontentloaded' ),
            this.page.getByText(text).click(),
        ]);
    }
    async linkRoleClickAndWaitForLoadState(role: 'link' | 'button', name: string): Promise<void> {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.page.getByRole(role, { name }).click(),
        ]);
    }

    // click & wait for response
	async clickAndWaitForResponse(subUrl: string, selector: string, code = 200): Promise<Response> {
		const [response] = await Promise.all([
			this.page.waitForResponse((resp) => resp.url().includes(subUrl) && resp.status() === code),
			this.page.locator(selector).click()
		]);
		return response;
	}

    // assert element to be visible
    async toBeVisible(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    // returns whether the locator is visible
    async isVisibleLocator(selector: string): Promise<boolean> {
        const locator = this.page.locator(selector);
        return await locator.isVisible();
    }

    // returns whether the element is visible
    async isVisible(selector: string): Promise<boolean> {
        return await this.isVisibleLocator(selector);
        // return await this.isVisibleViaPage(selector);
    }

    // assert element to contain text
    async toContainText(selector: string, text: string) {
        await expect(this.page.locator(selector)).toContainText(text);
    }

    // get element text content
    async getElementTextViaPage(selector: string): Promise<string | null> {
        return await this.page.textContent(selector);
    }


    // get locator text content
    async textContentOfLocator(selector: string): Promise<null | string> {
        const locator = this.page.locator(selector);
        return await locator.textContent();
    }
    // get element text content
    async getElementText(selector: string): Promise<string | null> {
        return await this.textContentOfLocator(selector);
        // return await this.page.textContent(selector);
    }
    // get element text if visible
    async getElementTextIfVisible(selector: string): Promise<void | string | null> {
        const isVisible = await this.isVisible(selector);
        if (isVisible) {
            return await this.getElementText(selector);
        }
    }

    // get element has test or not
    async hasText(selector: string, text: string): Promise<boolean> {
        const elementText = await this.textContentOfLocator(selector);
        return elementText?.trim() === text ? true : false;
    }


    // returns whether the locator is enabled
    async isEnabledLocator(selector: string): Promise<boolean> {
        const locator = this.page.locator(selector);
        return await locator.isEnabled();
    }
    // returns whether the locator is enabled
    async isDisabledLocator(selector: string): Promise<boolean> {
        const locator = this.page.locator(selector);
        return await locator.isDisabled();
    }

}