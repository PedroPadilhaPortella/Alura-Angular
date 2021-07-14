import { TokenService } from "./token.service";

describe("Token Service", () => {

    let token: string;
    let tokenService: TokenService;
    
    beforeEach(() => {
        token = 'Token-de-teste';
        tokenService = new TokenService();
    })

    /* SMOKE TEST */
    it("tokenService should be instantiated", () => {
        expect(tokenService).toBeTruthy();
    });
    
    it("must save a token", () => {
        tokenService.setToken(token);
        expect(tokenService.hasToken()).toBeTruthy();
        expect(tokenService.getToken()).toBe('Token-de-teste');
    });
    
    it("must remove a token", () => {
        tokenService.setToken(token);
        tokenService.removeToken()
        expect(tokenService.hasToken()).toBeFalsy();
        expect(tokenService.getToken()).toBeFalsy();
    });

    afterEach(() => {
        localStorage.clear()
    });
});