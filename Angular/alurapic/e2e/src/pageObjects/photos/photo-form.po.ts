import { browser, by, element } from 'protractor';
const path = require('path')
const image = '../../../../src/assets/images/home.jpg';

export class PhotoFormPage 
{
    navigateToPhotoForm() {
        return browser.get('/#/p/add')
    }

    loadImage() {
        const dirImage = path.resolve(__dirname, image)
        element(by.css('input[type=file]')).sendKeys(dirImage);
    }

    describeImage(description: string) {
        return element(by.css('textarea[formControlName=description]')).sendKeys(description)
    }

    getUploadButton() {
        return element(by.buttonText('Upload'))
    }
}