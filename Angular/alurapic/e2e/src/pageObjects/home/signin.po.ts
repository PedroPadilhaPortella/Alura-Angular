import { browser, by, element } from 'protractor';

export class SignInPage
{
    acessHome() {
        return browser.get('')
    }

    verifyUrl() {
        return browser.getCurrentUrl();
    }

    // getInputUserName() {
    //     return element(by.css('input[formControlName="userName"]')).sendKeys('flavio');
    // }

    // getInputPassword() {
    //     return element(by.css('input[formControlName="password"]')).sendKeys('123');
    // }
    
    getInput(formControl: string, valor: string) {
        return element(by.css(`input[formControlName="${formControl}"]`)).sendKeys(valor);
    }

    getLoginButton() {
        return element(by.buttonText('Login'));
    }
}