import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { AppComponent } from "./app.component"
import { CoreModule } from "./core/core.module"
import { ErrorsModule } from "./errors/errors.module"
import { PhotosModule } from "./photos/photos.module"
import { VmessageModule } from "./shared/components/vmessage/vmessage.module"

describe('App Component', () => {

    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [
                PhotosModule,
                ErrorsModule,
                VmessageModule,
                CoreModule,
                RouterTestingModule.withRoutes([])
            ],
            declarations: [AppComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    }));

    it('should create the AppComponent', () => {
        expect(component).toBeTruthy();
    });
})