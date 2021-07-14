import { browser, by, element } from "protractor";

export class AppPage {
    
    async navigateTo(url: string, id?: number) {
        if(id != undefined) {
            return await browser.get(`${url}/${id}`);
        }
        return await browser.get(url);
    }

    async getTitle() {
        return await browser.getTitle();
    }

    fillField(formControlName: string, value: string) {
        return element(by.formControlName(formControlName))
            .sendKeys(value)
    }

    // fillField(formControlName: string, value: string) {
    //     return element(by.css(`input[formControlName=${formControlName}]`))
    //         .sendKeys(value)
    // }
}