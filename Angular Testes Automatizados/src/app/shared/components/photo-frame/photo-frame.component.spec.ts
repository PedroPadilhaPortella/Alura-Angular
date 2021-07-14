import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LikeWidgetModule } from '../like-widget/like-widget.module';

import { PhotoFrameComponent } from './photo-frame.component';


describe(PhotoFrameComponent.name, () => {

    let component: PhotoFrameComponent;
    let fixture: ComponentFixture<PhotoFrameComponent>;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [PhotoFrameComponent],
            imports: [LikeWidgetModule]
        }).compileComponents;
    });
    
    beforeEach(() => {
        fixture = TestBed.createComponent(PhotoFrameComponent)
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`Should create component --> SMOKE TEST`, () => {
        expect(component).toBeTruthy();
    });

    it(`${PhotoFrameComponent.prototype.like.name} should trigger (@Output liked) 
    once when called multiple times within debounce time`, fakeAsync(() => {
        let times = 0;
        component.liked.subscribe(() => times++);
        component.like();
        component.like();
        component.like();
        component.like();
        tick(500);
        expect(times).toBe(1);
    }));

    it(`${PhotoFrameComponent.prototype.like.name} should
    trigger (@Output liked) two times when called outside debounce time`, fakeAsync(() => {
        let times = 0;
        component.liked.subscribe(() => times++);
        component.like();
        component.like();
        tick(500);
        component.like();
        component.like();
        tick(500);
        expect(times).toBe(2);
    }));
    
    it(`(D) Should display number of likes when (@Input likes) is incremented`, () => {
        component.likes++;
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
        expect(component.likes).toBe(1);
        expect(element.textContent.trim()).toBe('1');
    });
    
    it(`(D) Should update aria-label when likes (@Input likes) is incremented`, () => {
        const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
        for (let i = 1; i < 10; i++) {
            component.likes++;
            fixture.detectChanges();
            expect(element.getAttribute('aria-label')).toBe(`${i}: people liked`);
        }
    });

    it(`(D) Should have aria-label with 0 (@Input likes) for default`, () => {
        const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
        fixture.detectChanges();
        expect(element.getAttribute('aria-label')).toBe(`0: people liked`);
    });

    it(`(D) Should display image with src and description when bound to properties`, () => {
        const description = 'A beautiful image';
        const src = 'url aleatoria';
        component.src = src;
        component.description = description;
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement.querySelector('img.photo');
        expect(element.getAttribute('src')).toBe(src);
        expect(element.getAttribute('alt')).toBe(description);
    });

    it(`(D) Should display number of likes when cliked`, done => {
        component.liked.subscribe(() => {
            component.likes++;
            const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
            fixture.detectChanges();
            expect(counterEl.textContent.trim()).toBe('1');
            done();
        });
        const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
        likeWidgetContainerEl.click();
    });

    it(`(D) Should display number of likes when enter key is pressed`, done => {
        component.liked.subscribe(() => {
            component.likes++;
            const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
            fixture.detectChanges();
            expect(counterEl.textContent.trim()).toBe('1');
            done();
        });
        const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
        const event = new KeyboardEvent('keyup', { key: 'Enter'})
        likeWidgetContainerEl.dispatchEvent(event);
    });
});