import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/shared/interfaces/photo';
import { PhotoBoardService } from 'src/app/shared/services/photo-board.service';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

    title = "Alurapic";
    public fa = { faCircleNotch }
    public photos$: Observable<Photo[]>;

    constructor(private photoBoardService: PhotoBoardService) { }

    ngOnInit(): void {
        this.photos$ = this.photoBoardService.getPhotos();
    }
}