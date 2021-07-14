import { async, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AlertModule } from "src/app/shared/components/alert/alert.module";
import { LoadingModule } from "src/app/shared/components/loading/loading.module";
import { MenuModule } from "src/app/shared/components/menu/menu.module";
import { UserService } from "../user/user.service";
import { HeaderComponent } from "./header.component";

describe("Header Component", () => {

    let component: HeaderComponent;
    let userService: UserService;
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [UserService],
            imports: [
                RouterTestingModule.withRoutes([]),
                MenuModule,
                AlertModule,
                LoadingModule
            ],
            declarations: [HeaderComponent]
        }).compileComponents;
    });

    beforeEach(() => {
        userService = TestBed.inject(UserService);
        router = TestBed.inject(Router);
        spyOn(userService, 'getUser').and.returnValue(of({
            id: 1,
            name: 'almeida',
            email: 'almeida@alurapic.com.br'
        }))

        const fixture = TestBed.createComponent(HeaderComponent)
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /* SMOKE TEST */
    it("Header Component should be instantiated", () => {
        expect(component).toBeTruthy();
    });

    it("should do Logout", () => {
        // Este teste dá um spy na funcao logout, que retorna null e valida se ela foi chamada ou não 
        // e se chamou a rota de logout
        const spy = spyOn(userService, 'logout').and.returnValue(null);
        const navigateSpy = spyOn(router, 'navigate');
        component.logout();
        expect(spy).toHaveBeenCalled();
        expect(navigateSpy).toHaveBeenCalledWith(['']);
    })
});