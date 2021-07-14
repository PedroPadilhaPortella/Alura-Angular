import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MenuComponent } from "./menu.component";

describe(MenuComponent.name, () => {

    let fixture: ComponentFixture<MenuComponent>;
    let component: MenuComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`Should be created`, () => {
        expect(component).toBeTruthy();
    });

    it(`Should toggle the state of isShow variable`, () => {
        component.isShown = false;
        component.toggle()
        fixture.detectChanges();
        expect(component.isShown).toBeTrue();
    });

    it(`(D) Should toggle the state of isShow variable`, () => {
        component.isShown = false;
        const element: HTMLElement = fixture.nativeElement.querySelector(".fa-window-close");
        element.click();
        fixture.detectChanges();
        expect(component.isShown).toBeTrue();
    });
});