import { Component, Directive } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ActionDirective } from "./action.directive";
import { DirectivesModule } from "./directives.module";

describe(ActionDirective.name, () => {

    let fixture: ComponentFixture<ActionDirectiveTestComponent>;
    let component: ActionDirectiveTestComponent;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [ActionDirectiveTestComponent],
            imports: [DirectivesModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ActionDirectiveTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`(D) (@Output appAction) Should emit event with payload when ENTER key is pressed`, () => {
        //const divEl: HTMLElement = fixture.nativeElement.querySelector(".dummy-component");
        const divEl = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
        const event = new KeyboardEvent('keyup', {key: 'Enter'})
        divEl.dispatchEvent(event);
        expect(component.hasEvent()).toBeTrue();
    });
    
    it(`(D) (@Output appAction) Should emit event with payload when is clicked`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector(".dummy-component");
        // divEl.click();
        const event = new Event('click')
        divEl.dispatchEvent(event);
        expect(component.hasEvent()).toBeTrue();
    });

    it(`(D) (@Output appAction) Should emit event with payload when ENTER key is pressed OR when is clicked`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector(".dummy-component");

        const keyboardEvent = new KeyboardEvent('keyup', {key: 'Enter'})
        divEl.dispatchEvent(keyboardEvent);
        expect(component.hasEvent()).withContext('Keyboard event "enter keyup"').toBeTrue();

        component.resetForNewExpectation()

        const clickEvent = new Event('click')
        divEl.dispatchEvent(clickEvent);
        expect(component.hasEvent()).withContext('Click event').toBeTrue();
    });

    it('Testing if debugElement.nativeElement() is the same as nativeElement()', () => {
        expect(fixture.debugElement.nativeElement).toBe(fixture.nativeElement);
    })
});


// Fake Component
@Component({
    template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})
class ActionDirectiveTestComponent {
    private event: Event = null;

    public actionHandler(event: Event): void {
        this.event = event;
    }

    public hasEvent(): boolean {
        return !!this.event;
    }

    public resetForNewExpectation(): void {
        this.event = null;
    }
}