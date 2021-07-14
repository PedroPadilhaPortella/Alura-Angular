import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Photo } from "./photo";
import { PhotoModule } from "./photo.module";
import { PhotoService } from "./photo.service";

describe(PhotoService.name, () => {

    let service: PhotoService;
    const listPhotosByUserMock: Photo[] = [
        {allowComments: true, comments: 0, description: "", id: 53, likes: 0, postDate: new Date("2020-12-29T16:37:20.152Z"), url: "image", userId: 1 },
        {allowComments: false, comments: 4, description: "", id: 65, likes: 3, postDate: new Date("2020-12-29T16:37:20.152Z"), url: "image", userId: 1 }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PhotoModule, HttpClientTestingModule]
        })

        service = TestBed.inject(PhotoService);
    });

    it(`${PhotoService.name} must be instantiated - SMOKE TEST`, () => {
        expect(service).toBeTruthy();
    });

    it(`${PhotoService.prototype.listFromUser.name} should return a Observable with the photos`, () => {
        const spy = spyOn(service, "listFromUser").and.returnValue(of(listPhotosByUserMock));
        expect(spy).not.toBeNull();

        service.listFromUser('flavio').subscribe(photos => {
            expect(photos.length).toBeGreaterThan(1);
        })
    });

    it(`${PhotoService.prototype.listFromUserPaginated.name} must return a Observable with the photos`, () => {
        const spy = spyOn(service, "listFromUserPaginated").and.returnValue(of(listPhotosByUserMock));
        expect(spy).not.toBeNull();

        service.listFromUserPaginated('flavio', 2).subscribe(photos => {
            photos.forEach(photo => {
                expect(photo.userId).toEqual(1);
                console.log(photo)
            })
            expect(photos.length).toBeGreaterThan(0);
        })
    });

});