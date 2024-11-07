import { Page } from "@playwright/test";
import { isVisible } from "../../../utils/common-actions";
import { selector } from "../pages/selectors";

export class DashboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToVendorDashboard() {
        await this.page.goto("/vendor")
    }
    async userIsLoggedOut(): Promise<boolean> {
        await this.page.click("#headlessui-menu-button-1")
        await this.page.click("#headlessui-menu-item-6");
        return isVisible(this.page, selector.login.userIsLoggedOut);
    }


}