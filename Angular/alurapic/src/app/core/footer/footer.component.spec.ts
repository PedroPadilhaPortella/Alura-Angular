import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { UserService } from "../user/user.service";
import { FooterComponent } from "./footer.component";

describe("Footer Component", () => {

    let component: FooterComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [UserService],
            declarations: [FooterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        /* 
         * Para usar o footer, é preciso ter um usuário logado, ou instanciado, nesse caso, vamos instanciar o userService,
         * e usar o spyOn, no metodo getUser() para retornar uma Observable<User> mockado.
        */
        const userService = TestBed.inject(UserService)
        spyOn(userService, 'getUser').and.returnValue(of({
            id: 1,
            name: 'almeida',
            email: 'almeida@alurapic.com.br'
        }))

        const fixture = TestBed.createComponent(FooterComponent)
        component = fixture.componentInstance;
        fixture.detectChanges(); //detectar mudanças para os metodos de ciclo de vida do angular
    });

    it("Footer Component should be instantiated", () => {
        expect(component).toBeTruthy();
    });
});