import { browser, by, element } from 'protractor';

export class SignUpPage
{
    acessSignUp() {
        return browser.get('/#/home/signup')
    }

    registrerUser(formControl: string, valor: string) {
        return element(by.css(`input[formControlName="${formControl}"]`)).sendKeys(valor);
    }

    getRegisterButton() {
        return element(by.buttonText('Register'));
    }
}