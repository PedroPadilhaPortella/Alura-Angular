import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of, throwError } from "rxjs";
import { AuthService } from "src/app/core/auth/auth.service";
import { VmessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { SigninComponent } from "./signin.component";

describe("O formulário SignIn", () => {
    
    let component: SigninComponent;
    let router: Router;
    let authService: AuthService;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [SigninComponent],
            providers: [AuthService],
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
        authService = TestBed.inject(AuthService);
        const fixture = TestBed.createComponent(SigninComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("SignUp Component must be instantiated", () => {
        expect(component).toBeTruthy();
    });

    it("must login the user", () => {
        const navigateSpy = spyOn(router, "navigate");
        spyOn(authService, "authenticate").and.returnValue(of(null));

        component.loginForm.get("userName").setValue("alvaro@alvaro.com");
        component.loginForm.get("password").setValue("Alvaro");
        component.login();
        expect(navigateSpy).toHaveBeenCalledWith(['user', 'alvaro@alvaro.com']);
    });

    it("must log the error when the login fails", () => {
        spyOn(authService, "authenticate").and.returnValue(
            throwError("Erro de Servidor")
        );

        component.loginForm.get("userName").setValue("alvaro@alvaro.com");
        component.loginForm.get("password").setValue("Alvaro");

        const spyLog = spyOn(console, "log");
        component.login();
        expect(spyLog).toHaveBeenCalledWith('Erro de Servidor');
    });
});
