import { by, element, protractor } from 'protractor';

export class HomePage {

    public title = 'Timeline';

    getPhotoListSize() {
        return element
            .all(by.css('ap-photos ap-photo'))
            .count();
    }

    getFirstPhotoAndSendKeys() {
        return element
            .all(by.css('ap-photos .photo'))
            .first()
            .sendKeys(protractor.Key.ENTER);
    }

    fillSearchInputWithText(text: string) {
        return element(by.css('ap-search input[type=search]'))
            .sendKeys(text);
    }
}