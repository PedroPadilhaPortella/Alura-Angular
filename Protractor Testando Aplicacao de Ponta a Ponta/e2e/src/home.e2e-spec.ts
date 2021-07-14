import { browser, element, by, protractor, logging } from 'protractor';
import { AppPage } from './pages/app.po';
import { HomePage } from './pages/home.po';
import { PhotoDetailPage } from './pages/photo-detail.po';

describe('Home Page', () => {

    let homePage: HomePage;
    let appPage: AppPage;
    let photoDetailPage: PhotoDetailPage;

    beforeEach(async() => {
        appPage = new AppPage();
        homePage = new HomePage();
        photoDetailPage = new PhotoDetailPage();
        await appPage.navigateTo(`${browser.baseUrl}/#/user/flavio`);
    });

    afterEach(async() => {
        const logs = await browser.manage().logs()
            .get(logging.Type.BROWSER);

        expect(logs).not.toContain(jasmine.objectContaining({ 
            level: logging.Level.SEVERE
        } as logging.Entry ));
    });

    it('should navigate to user profile', async() => {
        const title = await appPage.getTitle()
        expect(title).toBe(homePage.title);
    });

    it('should display a list of photos', async() => {
        const listSize = homePage.getPhotoListSize()
        expect(listSize).toBeGreaterThan(0);

        // const lista = element.all(by.css('.photo'));
        // const tamanho = await lista.count();
        // expect(tamanho).toBeGreaterThan(0);
    });

    it('should navigate to photo detail when photo navigator is triggered', async() => {
        // const firstElement = await element.all(by.css('ap-photos ap-photo'))
        // await firstElement.click();
        await homePage.getFirstPhotoAndSendKeys()
        const title = await appPage.getTitle();
        expect(title).toBe(photoDetailPage.title);
    });

    it('should filter the photos when the filter input is filled', async() => {
        await homePage.fillSearchInputWithText('farol');
        const photos = await homePage.getPhotoListSize()
        expect(photos).toBe(1);
    });
});