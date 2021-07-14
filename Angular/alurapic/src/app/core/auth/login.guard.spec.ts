import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { LoginGuard } from "./login.guard";

describe("Login Guard", () => {

    let loginGuard: LoginGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [LoginGuard]
        });
        
        loginGuard = TestBed.inject(LoginGuard);
    });

    it("Login Guard should be instantiated", () => {
        expect(loginGuard).toBeTruthy();
    });
});