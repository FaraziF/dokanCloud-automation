import { expect, Page } from "@playwright/test";
import { selector } from "../pages/selectors";
import { isVisible } from "../framework/common-actions";

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /* async adminLoginPage(): Promise<boolean> {
        return await isVisible(this.page, selector.admin.loginPage.validation);
    } */

    async credentialsErrorMessageIsVisible( ): Promise<boolean> {
        return await isVisible(this.page, selector.login.loginCredentialsErrorMessage);
        
    }
    async emailErrorMessageIsVisible( ): Promise<boolean> {
            await this.page.locator(selector.login.eamilAddress).fill('');
            await this.page.locator(selector.login.password).fill('');
            await this.page.click(selector.login.signIn);
            await this.page.waitForTimeout(1000);
        return await isVisible(this.page, selector.login.loginEmailErrorMessage);
    }
    async passwordErrorMessageIsVisible( ): Promise<boolean> {
        return await isVisible(this.page, selector.login.loginPasswordErrorMessage);
    }

    
    
   async login(email: string, password: string) {        
        await this.page.type(selector.login.eamilAddress, email);
        await this.page.type(selector.login.password, password);
        await this.page.locator(selector.login.keepMeSignIn).check();
        await this.page.click(selector.login.signIn);
   }
}