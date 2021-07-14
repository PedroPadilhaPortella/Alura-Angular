import { TestBed } from "@angular/core/testing";
import { ImmediateClickDirective } from "./immediate-click.directive";

describe(ImmediateClickDirective.name, () => {

    let immediateClickDirective: ImmediateClickDirective;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [ImmediateClickDirective]
        }).compileComponents();

        immediateClickDirective = TestBed.inject(ImmediateClickDirective);
    });

    // it(`Should be created -> SMOKE TEST`, () => {
    //     expect(immediateClickDirective).toBeTruthy()
    // });
});