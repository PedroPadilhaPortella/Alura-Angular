import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ErrorsModule } from "../errors.module";
import { GlobalErrorComponent } from "./global-error.component";

describe(GlobalErrorComponent.name, () => {

    let fixture: ComponentFixture<GlobalErrorComponent>;
    let component: GlobalErrorComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ErrorsModule, RouterTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(GlobalErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`Test Smoke, should instantiate the component`, () => {
        expect(component).toBeTruthy();
    });
})