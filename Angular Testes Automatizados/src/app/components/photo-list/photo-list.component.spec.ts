import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/services/photo-board.service';
import { buildPhotoList } from 'src/app/shared/test/build-photo-list';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(PhotoListComponent.name, () => {

    let component: PhotoListComponent;
    let fixture: ComponentFixture<PhotoListComponent>;
    let service: PhotoBoardService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PhotoListModule,
                HttpClientModule
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(PhotoBoardService);
        fixture = TestBed.createComponent(PhotoListComponent);
        component = fixture.componentInstance;
    });
    
    it(`Should create component --> SMOKE TEST`, () => {
        expect(component).toBeTruthy();
    });
    
    it(`(D) Should display board when data arrives`, () => {
        const photos = buildPhotoList();
        spyOn(service, 'getPhotos').and.returnValue(of(photos));
        fixture.detectChanges();
        const board = fixture.nativeElement.querySelector('app-photo-board');
        const loader = fixture.nativeElement.querySelector('.loader');
        expect(board).withContext('Should display Board').not.toBeNull();
        expect(loader).withContext('Should not display Loader').toBeNull();
    });

    it(`(D) Should display loader while waiting for data`, () => {
        spyOn(service, 'getPhotos').and.returnValue(null);
        fixture.detectChanges();
        const board = fixture.nativeElement.querySelector('app-photo-board');
        const loader = fixture.nativeElement.querySelector('.loader');
        expect(board).withContext('Should not display Board').toBeNull();
        expect(loader).withContext('Should display Loader').not.toBeNull();
    });
});
