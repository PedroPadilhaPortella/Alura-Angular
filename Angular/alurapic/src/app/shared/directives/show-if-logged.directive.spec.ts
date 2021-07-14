import { TestBed } from "@angular/core/testing";
import { ImmediateClickDirective } from "./immediate-click.directive";
import { ShowIfLoggedDirective } from "./show-if-logged.directive";

describe(ShowIfLoggedDirective.name, () => {

    let showIfLoggedDirective: ShowIfLoggedDirective;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [ShowIfLoggedDirective]
        }).compileComponents();

        showIfLoggedDirective = TestBed.inject(ShowIfLoggedDirective);
    });

    // it(`Should be created -> SMOKE TEST`, () => {
    //     expect(showIfLoggedDirective).toBeTruthy()
    // });
});