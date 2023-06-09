import { Page, expect } from "@playwright/test";
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

     // wait for url to be loaded
     async waitForUrl(url: string, options?: any): Promise<void> {
        await this.page.waitForURL(url, options);
    }

    // click & wait for navigation to complete
    async clickAndWaitForUrl(selector: string, url: string): Promise<void> {
        await Promise.all([
            this.page.waitForURL(url, { waitUntil: 'networkidle' }),
            this.page.locator(selector).click(),
        ]);
    }

}