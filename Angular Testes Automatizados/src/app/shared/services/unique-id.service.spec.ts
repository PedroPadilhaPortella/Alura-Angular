import { TestBed } from "@angular/core/testing";
import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

    let uniqueIdService: UniqueIdService;
    let prefix = 'alura';
    let iterator = 50;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UniqueIdService]
        })

        uniqueIdService = TestBed.get(UniqueIdService);
    });

    it(`${UniqueIdService.name} should be instantiated --> SMOKE TEST`, () => {
        expect(uniqueIdService).toBeTruthy();
    });

    it(`Method ${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate a uniqueId and contain the prefix`, () => {
        const uuid = uniqueIdService.generateUniqueIdWithPrefix(prefix);
        expect(uuid).toString();
        expect(uuid).toContain('alura-');
        expect(uuid.startsWith('alura-')).toBeTrue();
    });

    it(`Method ${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate the duplicated unique id`, () => {
        const ids = new Set();
        for (let i = 0; i < iterator; i++) {
            ids.add(uniqueIdService.generateUniqueIdWithPrefix(prefix))
        }
        expect(ids.size).toBe(50);
    });
    
    it(`When a uniqueId is generated 3 times, the ${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should be ${iterator}`, () => {
        for (let i = 0; i < iterator; i++) {
            uniqueIdService.generateUniqueIdWithPrefix(prefix);
        }
        expect(uniqueIdService.getNumberOfGeneratedIds()).toBe(50);
    });

    it(`Method ${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw an error when called without prefix`, () => {
        const errorValues = [null, undefined, '', '0', '1', '8939-app']
        errorValues.forEach(prefix => {
            //withContext() -> gera um contexto para cada elemento a ser testado, possibilitando identificar o elemento do array
            expect(() => uniqueIdService.generateUniqueIdWithPrefix(prefix)).withContext(`Empty value: ${prefix}`).toThrow();
        });
    });
    
    it("Validanting true statements", () => {
        expect(true).toBeTrue(); //expect(true): boolean or Boolean, apenas tipos primitivos
        expect(true).toBe(true); // expect only to be comparable true == true, literal values
        expect(true).toBeTruthy(); //generic
    });
});