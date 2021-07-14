import { SignInPage } from './pageObjects/home/signin.po';
import { SignUpPage } from './pageObjects/home/signup.po';

describe("Home Screen from SignIn Component", () => {

    let signinPage: SignInPage;
    let signupPage: SignUpPage;
    let userData = [
        { field: 'email', valor: 'gustavo@alura.com'},
        { field: 'fullName', valor: 'gustavo Oshiro'},
        { field: 'userName', valor: 'gustavoshiro'},
        { field: 'password', valor: '12345678'}
    ];

    beforeEach(() => {
        signinPage = new SignInPage;
        signupPage = new SignUpPage;
    });
    
    it("should redirect to home", () => {
        signinPage.acessHome();
    });
    
    it("should navigate to signup", () => {
        signupPage.acessSignUp();
    });

    it("must verify the url of signup", () => {
        const url = signinPage.verifyUrl()
        expect(url).toMatch("http://localhost:4200/#/home/signup");
    });
    
    it("should register an user", () => {
        userData.forEach(user => signupPage.registrerUser(user.field, user.valor));
        expect(signupPage.getRegisterButton().click())
    });

    it("must verify the url", () => {
        const url = signinPage.verifyUrl()
        expect(url).toMatch("http://localhost:4200/#/home");
    });
    
    it('should validate login', () => {
        expect(signinPage.getInput('userName', 'flavio'));
        expect(signinPage.getInput('password', '123'));
        expect(signinPage.getLoginButton().click());
    });
    
});