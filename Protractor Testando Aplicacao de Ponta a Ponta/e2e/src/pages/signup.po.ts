import { by, element } from 'protractor';
export class SignUpPage {
    
    public title = 'Sign up';

    // fillField(formControlName: string, value: string) {
    //     return element(by.css(`input[formControlName=${formControlName}]`))
    //         .sendKeys(value)
    // }
        
    register() {
        return element(by.id('submit-button-signup'))
            .click();
    }
    // fillEmailField(email: string) {
    //     return element(by.css('input[formControlName=email]'))
    //         .sendKeys(email)
    // }

    // fillFullNameField(fullname: string) {
    //     return element(by.css('input[formControlName=fullName]'))
    //         .sendKeys(fullname)
    // }

    // fillUserNameField(username: string) {
    //     return element(by.css('input[formControlName=userName]'))
    //         .sendKeys(username)
    // }

    // fillPasswordField(password: string) {
    //     return element(by.css('input[formControlName=password]'))
    //         .sendKeys(password)
    // }
}