import { PhotoFormPage } from './pageObjects/photos/photo-form.po';
import { PhotoListPage } from './pageObjects/photos/photo-list.po';

describe("Photo List from Photo Component", () => {

    let photoFormPage: PhotoFormPage;
    let photoListPage: PhotoListPage;
    let comment = 'paisagem';

    beforeEach(() => {
        photoFormPage = new PhotoFormPage();
        photoListPage = new PhotoListPage();
    });

    it('should navigate to p/add', () => {
        photoFormPage.navigateToPhotoForm()
    });

    it('should add a new Image', () => {
        photoFormPage.loadImage()
        photoFormPage.describeImage(comment)
        photoFormPage.getUploadButton().click()
    });

    it('search the Image', () => {
        photoListPage.navigateToPhotoList()
        photoListPage.searchImage(comment)
        photoListPage.getImage()
    });
});