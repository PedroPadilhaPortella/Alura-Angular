import { browser, element, by, protractor, logging } from 'protractor';
import { AppPage } from './pages/app.po';
import { HomePage } from './pages/home.po';
import { PhotoUploadPage } from './pages/photo-upload.po';

describe('Photo Upload', () => {

    let appPage: AppPage;
    let homePage: HomePage;
    let photoUploadPage: PhotoUploadPage;

    beforeEach(async() => {
        appPage = new AppPage();
        homePage = new HomePage();
        photoUploadPage = new PhotoUploadPage();
        await appPage.navigateTo(`${browser.baseUrl}/#/p/add`);
    });

    afterEach(async() => {
        const logs = await browser.manage().logs()
            .get(logging.Type.BROWSER);

        expect(logs).not.toContain(jasmine.objectContaining({ 
            level: logging.Level.SEVERE
        } as logging.Entry ));
    });

    it('should navigate to a photo upload page', async() => {
        const title = await appPage.getTitle()
        expect(title).toBe(photoUploadPage.title);
    });
    
    it('should upload a photo upload with a comment', async() => {
        await photoUploadPage.selectImage();
        await photoUploadPage.fillDescription('A beautiful place!');
        await photoUploadPage.upload();

        const title = await appPage.getTitle()
        expect(title).toBe(homePage.title);
    });

});