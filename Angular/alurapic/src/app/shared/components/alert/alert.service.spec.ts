import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AlertType } from "./alert";
import { AlertModule } from "./alert.module";
import { AlertService } from "./alert.service";

describe(AlertService.name, () => {

    let service: AlertService;
    let router: Router;
    const message = 'random message';

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AlertModule, RouterTestingModule],
            providers: [AlertService],
        }).compileComponents();

        router = TestBed.inject(Router);
        service = TestBed.inject(AlertService);

    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('', () => {
        let fakeService = new AlertService(router);
    });

    it(`${AlertService.prototype.success.name} should return an success message object`, () => {
        service.success(message, true);
        service.getAlert().subscribe(alert => {
            expect(alert.alertType).toBe(AlertType.SUCCESS);
            expect(alert.message).toBe(message);
        });

        service.success(message);
        service.getAlert().subscribe(alert => {
            expect(alert.alertType).toBe(AlertType.SUCCESS);
            expect(alert.message).toBe(message);
        });
    });

    it(`${AlertService.prototype.warning.name} should return an warning message object`, () => {
        service.warning(message, true);
        service.getAlert().subscribe(alert => {
            expect(alert.alertType).toBe(AlertType.WARNING);
            expect(alert.message).toBe(message);
        });
        
        service.warning(message);
        service.getAlert().subscribe(alert => {
            expect(alert.alertType).toBe(AlertType.WARNING);
            expect(alert.message).toBe(message);
        });
    });

    it(`${AlertService.prototype.danger.name} should return an danger message object`, () => {
        service.danger(message, true);
        service.getAlert().subscribe(alert => {
            expect(alert.alertType).toBe(AlertType.DANGER);
            expect(alert.message).toBe(message);
        });

        service.danger(message);
        service.getAlert().subscribe(alert => {
            expect(alert.alertType).toBe(AlertType.DANGER);
            expect(alert.message).toBe(message);
        });
    });

    it(`${AlertService.prototype.info.name} should return an info message object`, () => {
        service.info(message, true);
        service.getAlert().subscribe(alert => {
            expect(alert.alertType).toBe(AlertType.INFO);
            expect(alert.message).toBe(message);
        });

        service.info(message);
        service.getAlert().subscribe(alert => {
            expect(alert.alertType).toBe(AlertType.INFO);
            expect(alert.message).toBe(message);
        });
    });
});