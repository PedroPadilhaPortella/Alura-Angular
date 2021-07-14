import { by, element } from "protractor";
const path = require('path');
const image = '../../../src/assets/img/home.jpg';

export class PhotoUploadPage {

    public title = 'Photo upload'; ///#/p/add

    fillDescription(description: string) {
        return element(by.css('textarea[formControlName=description]'))
            .sendKeys(description);
    }

    selectImage() {
        const absolutePathImage = path.resolve(__dirname, image);
        return element(by.css('input[formControlName=file]'))
            .sendKeys(absolutePathImage)
    }

    upload() {
        return element(by.css('button[type=submit]'))
            .click();
    }
}