import { Page } from "@playwright/test";
import { isVisible } from "../framework/common-actions";
import { selector } from "../pages/selectors";

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /* async open() {
        await this.page.goto('');
    } */
    async goToAdminLoginPage() {
        await this.page.goto('/admin/login');
    }
    async goToVendorLoginPage() {
        await this.page.goto('/vendor/login');
    }
    async userisLoggedIn(): Promise<boolean> {
        return await isVisible(this.page, selector.login.userIsLoggedIn);
    }
    async userIsLoggedInFailed(): Promise<boolean> {
        return await isVisible(this.page, selector.login.userIsLoggedInFailed);
    }
    /* async userIsLoggedOut(): Promise<boolean> {
        return await isVisible(this.page, selector.login.userIsLoggedOut);
    } */
   

}