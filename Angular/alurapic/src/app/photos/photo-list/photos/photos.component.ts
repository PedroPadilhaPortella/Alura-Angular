import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnInit, OnChanges
{
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
      this.rows = this.groupColumns(this.photos)
  }

  groupColumns(photos: Photo[]) {
    const newRows = []

    for(let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3));
    }
    
    return newRows
  }

}
