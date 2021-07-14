import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TokenService } from "../token/token.service";
import { LoginGuard } from "./login.guard";
import { RequestInterceptor } from "./request.interceptor";

describe("Request Interceptor", () => {

    let interceptor: RequestInterceptor;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RequestInterceptor]
        });
        
        interceptor = TestBed.inject(RequestInterceptor);
    });

    it("Request Interceptor should be instantiated", () => {
        expect(interceptor).toBeTruthy();
    });
});