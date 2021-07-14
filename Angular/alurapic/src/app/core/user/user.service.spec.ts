import { TestBed } from "@angular/core/testing";
import { TokenService } from "../token/token.service";
import { UserService } from "./user.service";

describe("User Service", () => {

    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService]
        })

        userService = TestBed.inject(UserService);
    });

    it("UserService should be instantiated", () => {
        expect(userService).toBeTruthy();
    });
    
    it("should, through an token, get the user informations", () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYxNTk5NDg3MiwiZXhwIjoxNjE2MDgxMjcyfQ.C0IVMizwleAsYhJ2WKTtXhW4AwVZ0PRKhXiS-BLR7lc';
        
        userService.setToken(token);
        expect(userService.isLogged()).toBeTruthy();
        expect(userService.getUserName()).toBe('flavio');
        
        userService.getUser().subscribe(user => {
            expect(user.name).toBe('flavio');
            expect(user.email).toBe('flavio@alurapic.com.br');
        })
    });
    
    it('should clear the token and user informations', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYxNTk5NDg3MiwiZXhwIjoxNjE2MDgxMjcyfQ.C0IVMizwleAsYhJ2WKTtXhW4AwVZ0PRKhXiS-BLR7lc';
        userService.setToken(token);
        userService.logout();

        expect(userService.isLogged()).toBeFalsy();
        expect(userService.getUserName()).toBe('');
    });
});