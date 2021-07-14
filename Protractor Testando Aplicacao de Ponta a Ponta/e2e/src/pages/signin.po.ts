import { by, element } from 'protractor';
export class SignInPage {
    
    public title = 'Sign in';

    // fillField(formControlName: string, value: string) {
    //     return element(by.css(`input[formControlName=${formControlName}]`))
    //         .sendKeys(value)
    // }

    login() {
        return element(by.id('login-button'))
        .click();
    }

    // fillUserNameField(username: string) {
    //     return element(by.css('input[formControlName=userName]'))
    //         .sendKeys(username)
    // }

    // fillPasswordField(password: string) {
    //     return element(by.css('input[formControlName=password]'))
    //         .sendKeys(password)
    // }
}