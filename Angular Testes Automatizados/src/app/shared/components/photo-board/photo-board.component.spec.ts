import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { buildPhotoList } from '../../test/build-photo-list';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';



describe(PhotoBoardComponent.name, () => {
    let component: PhotoBoardComponent;
    let fixture: ComponentFixture<PhotoBoardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PhotoBoardModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PhotoBoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it(`Should create component --> SMOKE TEST`, () => {
        expect(component).toBeTruthy();
    });
    
    it(`Should display rows and columns when(@Input photos) has value`, () => {
        component.photos = buildPhotoList();
        fixture.detectChanges();

        // Precisa chamar o OnChanges na mão, criando um novo simpleChanges e passando pro metodo
        const changes: SimpleChanges = { photos: new SimpleChange([], component.photos, true) }
        component.ngOnChanges(changes);

        expect(component.rows.length).withContext('Number of Rows').toBe(2);
        expect(component.rows[0].length).withContext('Number of Columns').toBe(5);
        expect(component.rows[1].length).withContext('Number of Columns').toBe(5);
    });

    it(`Should return null if (@Input photos) has no changes`, () => {
        const changes: SimpleChanges = { photos: null }
        fixture.detectChanges();
        expect(component.ngOnChanges(changes)).toBeUndefined();
    });
});
