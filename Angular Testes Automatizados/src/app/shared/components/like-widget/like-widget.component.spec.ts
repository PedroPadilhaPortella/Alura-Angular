import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {

    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent;
    
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
            // imports: [FontAwesomeModule],
            // declarations: [LikeWidgetComponent],
            // providers: [UniqueIdService]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it(`Should create component --> SMOKE TEST`, () => {
        expect(component).toBeTruthy();
    });

    it(`Should auto generate ID during OnInit when (@Input id) is not assigned`, () => {
        fixture.detectChanges();
        expect(component.id).toBeTruthy(); 
    });

    it(`Should Not auto-generate ID during OnInit when (@Input id) is assigned`, () => {
        const id = "random098id"
        component.id = id
        fixture.detectChanges();
        expect(component.id).toBe(id); 
    });

    it(`${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, (done) => {
        component.like(); //Emissao feita antes de se inscrever na output property, não funciona
        component.liked.subscribe(() => {
            expect(true).toBeTrue(); //definindo o que vai acontecer quando houver o subscribe no Observable liked, quando chamar like()
            done();
        })
        component.like(); //Emissao feita depois de se inscrever na output property, funciona
    });

    it(`${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
    });
});