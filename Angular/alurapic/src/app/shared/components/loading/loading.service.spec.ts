import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { LoadingType } from "./loading-type";
import { LoadingModule } from "./loading.module";
import { LoadingService } from "./loading.service";

describe(LoadingService.name, () => {

    let service: LoadingService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoadingModule]
        }).compileComponents();

        service = TestBed.inject(LoadingService);
    });

    it(`should be created`, () => {
        expect(service).toBeTruthy();
    });

    it(`${LoadingService.prototype.getLoading.name} should return ${LoadingType.STOPPED} when called first time`, (done) => {
        service.getLoading().subscribe(load => {
            expect(load).toBe(LoadingType.STOPPED);
            done();
        });
    });

    it(`${LoadingService.prototype.getLoading.name} should return ${LoadingType.LOADING} after be started`, (done) => {
        service.start();
        service.loadingSubject.subscribe(load => {
            expect(load).toBe(LoadingType.LOADING);
            done();
        });
    });

    it(`${LoadingService.prototype.getLoading.name} should return ${LoadingType.STOPPED} after be started and stopped`, (done) => {
        service.start();
        service.stop();
        service.loadingSubject.subscribe(load => {
            expect(load).toBe(LoadingType.STOPPED);
            done();
        });
    });
});