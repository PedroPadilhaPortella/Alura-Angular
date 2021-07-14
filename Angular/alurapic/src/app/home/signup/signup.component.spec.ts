import { async, TestBed } from "@angular/core/testing";
import { SignupComponent } from "./signup.component";
import { SignUpService } from "./signup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { of, throwError } from "rxjs";
import { VmessageModule } from "src/app/shared/components/vmessage/vmessage.module";

describe("SignUp Component", () => {

    let component: SignupComponent;
    let router: Router;
    let signupService: SignUpService;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [SignupComponent],
            providers: [SignUpService, UserNotTakenValidatorService],
            imports: [
                HttpClientTestingModule,
                VmessageModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([])
            ]
        }).compileComponents;
    });

    beforeEach(() => {
        router = TestBed.inject(Router);
        signupService = TestBed.inject(SignUpService);
        const fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("SignUp Component must be instantiated", () => {
        expect(component).toBeTruthy();
    });

    it("must register a new user", () => {
        const navigateSpy = spyOn(router, "navigate");
        spyOn(signupService, "signup").and.returnValue(of(null));

        component.signupForm.get("email").setValue("alvaro@alvaro.com");
        component.signupForm.get("fullName").setValue("Alvaro");
        component.signupForm.get("userName").setValue("alvaro");
        component.signupForm.get("password").setValue("123");
        component.signup();
        expect(navigateSpy).toHaveBeenCalledWith([""]);
    });

    it("must log an error", () => {
        spyOn(signupService, "signup").and.returnValue(
            throwError("Erro de Servidor")
        );

        component.signupForm.get("email").setValue("alvaro@alvaro.com");
        component.signupForm.get("fullName").setValue("Alvaro");
        component.signupForm.get("userName").setValue("alvaro");
        component.signupForm.get("password").setValue("123");

        const spyLog = spyOn(console, "log");
        component.signup();
        expect(spyLog).toHaveBeenCalledWith("Erro de Servidor");
    });
});
