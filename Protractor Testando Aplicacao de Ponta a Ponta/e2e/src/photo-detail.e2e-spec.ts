import { browser } from "protractor";
import { AppPage } from "./pages/app.po";
import { HomePage } from "./pages/home.po";
import { PhotoDetailPage } from "./pages/photo-detail.po";

describe('Photo Detail Page', () => {

    let homePage: HomePage;
    let appPage: AppPage;
    let photoDetailPage: PhotoDetailPage;

    beforeEach(async() => {
        appPage = new AppPage();
        homePage = new HomePage();
        photoDetailPage = new PhotoDetailPage();

        await appPage.navigateTo(`${browser.baseUrl}/#/p`, 14);
    });

    afterEach(async() => {

    });

    it('should be on photo detail page', async() => {
        const title = await appPage.getTitle();
        expect(title).toBe(photoDetailPage.title);
    });

    it('should publish a comment', async() => {
        debugger
        await photoDetailPage.fillComment('Beautiful place');
        await photoDetailPage.publishComment();
        let numberOfComments = await photoDetailPage.getNumberOfComments();
        expect(numberOfComments).toBeGreaterThan(0);
    });
});