import { expect, type Page } from "@playwright/test";
import { isVisible } from "../framework/common-actions";
import { selector } from "./selectors";
import { BasePage } from "./basePage";
import { data } from "../../../utils/testdata";
import { endPoints } from "../../../utils/apiEndPoints";

export class CustomerPage extends BasePage{
    // readonly page: Page;

    constructor(page: Page) {
        // this.page = page;
        super(page);
    }
/* export class CustomerPage{
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    } */

    async goToLoginPage(): Promise<void> {
        await this.page.goto(endPoints.customerLoginPage)
    }

    async goToRegisterPage(): Promise<void> {
        // await this.page.goto(endpoint.customerRegistrationPage)
        await this.page.goto(endPoints.customerRegistrationPage)
    }



}