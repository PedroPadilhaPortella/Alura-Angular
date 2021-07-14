import { by, element } from "protractor";

export class PhotoDetailPage {

    public title = 'Photo detail';

    fillComment(comment: string) {
        return element(by.css('textarea.form-control')).sendKeys(comment);
    }

    publishComment() {
        return element(by.css('button[type=submit]')).click();
    }
    
    getNumberOfComments() {
        return element.all(by.css('ap-photo-comments li')).count();
    }
}