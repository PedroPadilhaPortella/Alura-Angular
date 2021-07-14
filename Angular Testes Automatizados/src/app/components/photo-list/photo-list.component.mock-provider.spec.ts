import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/shared/interfaces/photo';
import { PhotoBoardMockService } from 'src/app/shared/services/photo-board-mock.service';
import { PhotoBoardService } from 'src/app/shared/services/photo-board.service';
import { buildPhotoList } from 'src/app/shared/test/build-photo-list';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(PhotoListComponent.name + ' Mock Provider', () => {

    let component: PhotoListComponent;
    let fixture: ComponentFixture<PhotoListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PhotoListModule,
                HttpClientModule
            ],
            providers: [
                // {
                    // Usando um provider mockado, onde ao invés de chamar o serviço, ele retorna a função buildPhotoList()
                    // provide: PhotoBoardService, 
                    // useValue: {
                    //     getPhotos(): Observable<Photo[]> {
                    //         return of(buildPhotoList())
                    //     }
                    // }
                // },
                {
                    // Usando um provider mockado chamado PhotoBoardMockService(), que é a mesma coisa do anterior
                    provide: PhotoBoardService,
                    useClass: PhotoBoardMockService
                }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(PhotoListComponent);
        component = fixture.componentInstance;
    });

    it(`Should create component --> SMOKE TEST`, () => {
        expect(component).toBeTruthy();
    });

    it(`(D) Should display board when data arrives`, () => {
        fixture.detectChanges();
        const board = fixture.nativeElement.querySelector('app-photo-board');
        const loader = fixture.nativeElement.querySelector('.loader');
        expect(board).withContext('Should display Board').not.toBeNull();
        expect(loader).withContext('Should not display Loader').toBeNull();
    });
});
