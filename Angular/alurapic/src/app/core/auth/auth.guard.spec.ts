import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthGuard } from "./auth.guard";

describe("Auth Guard", () => {

    let authGuard: AuthGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [AuthGuard]
        });
        
        authGuard = TestBed.get(AuthGuard);
    });

    it("Auth Guard should be instantiated", () => {
        expect(authGuard).toBeTruthy();
    });
});