import { test, expect, Locator, Page } from '@playwright/test';
import { PlaywrightPage } from "../../playwrightPage"

export class UserSignInPage extends PlaywrightPage {
    public readonly inputPassword : Locator;
    public readonly btnSignIn: Locator;
    public readonly lnkForgotPassword: Locator;
    
    constructor(page : Page){
        super(page);
        this.inputPassword = this.page.getByRole("textbox", { name: "Password"})
        this.btnSignIn = this.page.getByRole("button", { name: "Sign In"})
        this.lnkForgotPassword = this.page.getByRole("link", { name: "Forgot Your Password?"})
    }
}