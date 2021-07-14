import { browser, by, element } from 'protractor';

export class PhotoDetailPage 
{
    navigateToPhotoDetails() {
        return browser.get('/#/p/1')
    }

    commentImage(comment: string) {
        return element(by.css('textarea[formControlName=comment]')).sendKeys(comment)
    }

    getCommentButton() {
        return element(by.buttonText('Publish'))
    }
}