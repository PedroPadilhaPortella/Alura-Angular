import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AlertComponent } from "./alert.component";
import { AlertModule } from "./alert.module";
import { AlertService } from "./alert.service";

describe(AlertComponent.name, () => {

    let service: AlertService;
    let fixture: ComponentFixture<AlertComponent>;
    let component: AlertComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AlertModule, RouterTestingModule]
        }).compileComponents();

        service = TestBed.inject(AlertService);
        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
})