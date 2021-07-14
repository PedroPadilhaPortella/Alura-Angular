import { ComponentFixture, TestBed } from "@angular/core/testing";
import { VmessageComponent } from "./vmessage.component";

describe(VmessageComponent.name, () => {

    let fixture: ComponentFixture<VmessageComponent>;
    let component: VmessageComponent;

    beforeEach( async () => {
        await TestBed.configureTestingModule({
            declarations: [VmessageComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(VmessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it(`Should be created and receive a message`, () => {
        expect(component).toBeTruthy();
        component.text = 'teste'
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement.querySelector('#vmessage');
        expect(element.textContent).toBe('teste');
    });
});