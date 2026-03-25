import {Page, Locator, Expect, expect} from '@playwright/test'

export class BasicForm{
    readonly fullName : Locator;
    readonly password : Locator;
    readonly email : Locator;
    readonly phoneNumber : Locator;
    readonly comments : Locator;
    readonly submitButton : Locator;
    readonly formOutputMsg : Locator;

    constructor(private page: Page){
        this.fullName = page.locator('//input[@id="txt-name"]');
        this.password = page.locator('//input[@id="txt-pass"]');
        this.email = page.locator('//input[@id="txt-email"]');
        this.phoneNumber = page.locator('//input[@id="txt-phone"]');
        this.comments = page.locator('//textarea[@id="txt-area"]');
        this.submitButton = page.locator('#btn-submit-form');
        this.formOutputMsg = page.locator('#form-output');
        
    }
    async FormData(fName:string, pass : string, email:string, phNum:string,comn:string){
        await this.fullName.fill(fName);
        await this.password.fill(pass);
        await this.email.fill(email);
        await this.phoneNumber.fill(phNum);
        await this.comments.fill(comn);
        await this.submitButton.click();
    }
    async formOutputMsgValidation()
    {
        await expect(this.formOutputMsg).toBeVisible();
        console.log('Assertion Passed!!!')
    }

}