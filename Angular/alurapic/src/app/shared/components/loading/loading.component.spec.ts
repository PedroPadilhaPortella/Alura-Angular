import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoadingComponent } from "./loading.component";
import { LoadingModule } from "./loading.module";
import { LoadingService } from "./loading.service";

describe(LoadingComponent.name, () => {

    let service: LoadingService;
    let fixture: ComponentFixture<LoadingComponent>;
    let component: LoadingComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoadingModule]
        }).compileComponents();

        service = TestBed.inject(LoadingService);
        fixture = TestBed.createComponent(LoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
})