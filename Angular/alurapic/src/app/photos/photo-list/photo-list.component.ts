import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';


@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit {

    photos: Photo[] = [];
    filter: string = '';
    hasMore: boolean = true;
    currentPage: number = 1;
    userName: string = '';

    constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.userName = this.activatedRoute.snapshot.params.username
            this.photoService.listFromUserPaginated(this.userName, 1).subscribe(photos => this.photos = photos)
            // this.userName = params.userName;
            // this.photos = this.activatedRoute.snapshot.data['photos']
        })
        // this.photos = this.activatedRoute.snapshot.data.photos
        // this.photoService.listFromUser(username).subscribe(photos => this.photos = photos)
    }

    load() {
        this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
            this.filter = ''
            this.photos = this.photos.concat(photos)
            if (!photos.length) this.hasMore = false
        })
        console.log(this.photos);
    }
}