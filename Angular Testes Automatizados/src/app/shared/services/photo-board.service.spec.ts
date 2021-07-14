import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { of } from 'rxjs';
import { buildPhotoList } from "../test/build-photo-list";
import { PhotoBoardService } from "./photo-board.service";

const mockData = {
    api: 'http://localhost:3000/photos',
    data: [
        { id: 1, description: 'description 1', src: "src 1" },
        { id: 2, description: 'description 2', src: "src 2" },
        { id: 3, description: 'description 3', src: "src 3" }
    ]
}


describe(PhotoBoardService.name, () => {
    
    let service: PhotoBoardService;
    let httpController: HttpTestingController;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PhotoBoardService]
        }).compileComponents();

        service = TestBed.inject(PhotoBoardService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it(`${PhotoBoardService.name} should be instantiated --> SMOKE TEST`, () => {
        expect(service).toBeTruthy();
    })

    it(`${PhotoBoardService.prototype.getPhotos.name} should return not null when it is called`, () => {
        const photos = buildPhotoList();
        const spy = spyOn(service, 'getPhotos').and.returnValue(of(photos))
        expect(spy).not.toBeNull();
        expect(service.getPhotos()).not.toBeNull();
    });

    it(`${PhotoBoardService.prototype.getPhotos.name} should return photos with description in upperCase()`, done => {
        service.getPhotos().subscribe(photos => {
            expect(photos[0].description).toBe('DESCRIPTION 1')
            expect(photos[1].description).toBe('DESCRIPTION 2')
            expect(photos[2].description).toBe('DESCRIPTION 3')
            done();
        });

        /* O HttpController, quando for feita uma requisição para 'http://localhost:3000/photos',
        ao invés de retornar o conteúdo da requisição, ele irá retornar um conteúdo mockado. */
        httpController.expectOne(mockData.api).flush(mockData.data);
    });

    afterEach(() => {
        // Verifica se não ficou alguma requisição sem resposta ou sem ser chamada
        httpController.verify();
    }) 
});