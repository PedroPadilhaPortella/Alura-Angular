import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from '../../interfaces/photo';
import { buildPhotoList } from '../../test/build-photo-list';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';



@Component({
    template: `<app-photo-board [photos]="photos"></app-photo-board>`
})
export class PhotoBoardTestComponent {
    @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
    public photos: Photo[] = []
}


describe(PhotoBoardTestComponent.name, () => {
    let component: PhotoBoardTestComponent;
    let fixture: ComponentFixture<PhotoBoardTestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PhotoBoardTestComponent],
            imports: [PhotoBoardModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PhotoBoardTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`Should create component --> SMOKE TEST`, () => {
        expect(component).toBeTruthy();
    });

    it(`Should display rows and columns when (@Input photos) has value using a fake component and a fake template to active the ngOnChanges`, () => {
        component.photos = buildPhotoList();
        fixture.detectChanges();

        /* Nesse caso, não precisaremos fazer on OnChanges, porque criamos um componente para poder usar o template fake dele 
            para acionar o OnChanges, pois o OnChanges só detecta alterações no html, então nós demos isso pra ele,
            criamos o html e ele detectou as alterações.
        */

        expect(component.board.rows.length).withContext('Number of Rows').toBe(2);
        expect(component.board.rows[0].length).withContext('Number of Columns').toBe(5);
        expect(component.board.rows[1].length).withContext('Number of Columns').toBe(5);
    });
});

