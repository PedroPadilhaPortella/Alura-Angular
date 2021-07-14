import { TestBed } from "@angular/core/testing";
import { DarkenOnHoverDirective } from "./darken-on-hover.directive";

describe(DarkenOnHoverDirective.name, () => {

    let darkenOnHover: DarkenOnHoverDirective;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [DarkenOnHoverDirective]
        }).compileComponents();

        darkenOnHover = TestBed.inject(DarkenOnHoverDirective);
    });

    // it(`Should be created -> SMOKE TEST`, () => {
    //     expect(darkenOnHover).toBeTruthy()
    // });
});