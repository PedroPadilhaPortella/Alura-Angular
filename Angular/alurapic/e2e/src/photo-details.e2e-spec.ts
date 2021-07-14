import { PhotoDetailPage } from "./pageObjects/photo-details/photo-detail.po";

describe("Photo Details from PhotoDetails Component", () => {

    let photoDetailPage: PhotoDetailPage;
    let comment = 'bela paisagem';

    beforeEach(() => {
        photoDetailPage = new PhotoDetailPage
    });

    it('should navigate to /p/1', () => {
        photoDetailPage.navigateToPhotoDetails()
    });

    it('should add a new Comment', () => {
        photoDetailPage.commentImage(comment)
        photoDetailPage.getCommentButton().click()
    });
});