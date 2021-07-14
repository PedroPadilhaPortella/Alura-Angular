import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";

describe("Auth Service", () => {

    let authService: AuthService;
    let userService: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        //Modulo de testes, injeção dos providers que serão usados no teste
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]
        });
        
        authService = TestBed.inject(AuthService);
        userService = TestBed.inject(UserService);
        httpMock = TestBed.inject(HttpTestingController);
    })

    it("Auth Service should be instantiated", () => {
        expect(authService).toBeTruthy();
    });

    
    it("Should authenticate the user", fakeAsync(() => {
        //FakeAsync -> teste com assincronia
        const fakeBody = { id: 1, name: 'alvaro', email: 'alvaro.@alura.com'}
        const spy = spyOn(userService, 'setToken').and.returnValue(null); //Cria uma função fake, mockada, que retorna o valor null

        //chamando a função authenticate, testando os casos de retorno da função no subscribe
        authService.authenticate('alvaro', 'test-password').subscribe(response => {
            expect(response.body).toEqual(fakeBody);
            expect(spy).toHaveBeenCalledWith('token-test');
        })

        const testRequest = httpMock.expectOne((req) =>  req.method === 'POST');
        testRequest.flush(fakeBody, { headers: {'x-access-token': 'token-test' }});
        tick();
    }));
});