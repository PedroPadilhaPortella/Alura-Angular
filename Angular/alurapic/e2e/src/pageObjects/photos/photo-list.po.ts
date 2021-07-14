import { browser, by, element } from 'protractor';

export class PhotoListPage 
{
    navigateToPhotoList() {
        return browser.get('/#/user/flavio')
    }

    searchImage(description: string) {
        return element(by.className('rounded')).sendKeys(description)
    }

    getImage() {
        return element.all(by.css('.no-gutters .col-4')).get(0);
    }
}