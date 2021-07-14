import { browser, logging } from 'protractor';
import { AppPage } from './pages/app.po';
import { HomePage } from './pages/home.po';
import { SignInPage } from './pages/signin.po';
import { SignUpPage } from './pages/signup.po';

describe('SignUp Page', () => {

    let appPage: AppPage;
    let signupPage: SignUpPage;
    let signinPage: SignInPage;
    let homePage: HomePage;

    beforeEach(async() => {
        appPage = new AppPage();
        signupPage = new SignUpPage();
        signinPage = new SignInPage();
        homePage = new HomePage();

        await appPage.navigateTo(`${browser.baseUrl}/#/home/signup`)
    });

    afterEach(async() => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);

        expect(logs).not.toContain(jasmine.objectContaining({ 
            level: logging.Level.SEVERE
        } as logging.Entry ));
    });

    it('Should navigate to SignUp Page', async() => {
        const title = await appPage.getTitle();
        expect(title).toBe(signupPage.title);
    });

    it('Should SignUp as a new User and then Login', async() => {
        const prefix = Math.round(Math.random() * 1000000);
        const username = `user_${prefix}`;
        const password = '1234567890';

        let title = await appPage.getTitle();
        expect(title).toBe(signupPage.title);

        await appPage.fillField('email', `usuario${prefix}@gmail.com`);
        await appPage.fillField('fullName', `Usuario ${prefix}`);
        await appPage.fillField('userName', username);
        await appPage.fillField('password', password);
        await signupPage.register();

        title = await appPage.getTitle();
        expect(title).toBe(signinPage.title);
        
        await appPage.fillField('userName', username);
        await appPage.fillField('password', password);
        await signinPage.login();
        
        title = await appPage.getTitle();
        expect(title).toBe(homePage.title);
    });
});