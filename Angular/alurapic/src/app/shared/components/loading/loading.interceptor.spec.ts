import { HttpRequest } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { LoadingInterceptor } from "./loading.interceptor";
import { LoadingModule } from "./loading.module";
import { LoadingService } from "./loading.service";

describe(LoadingInterceptor.name, () => {

    let service: LoadingService;
    let interceptor: LoadingInterceptor;
    let httpMock: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoadingModule, HttpClientTestingModule]
        }).compileComponents();

        service = TestBed.inject(LoadingService);
        interceptor = TestBed.inject(LoadingInterceptor);
        httpMock = TestBed.inject(HttpTestingController);
    });

    // it('should call the interceptor', () => {
    //     expect(interceptor.intercept(service.getLoading())).toHaveBeenCalled()
    // });
})