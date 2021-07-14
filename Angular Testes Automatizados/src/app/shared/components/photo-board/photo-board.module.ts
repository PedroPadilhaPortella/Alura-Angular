import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoBoardService } from '../../services/photo-board.service';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoBoardComponent } from './photo-board.component';


@NgModule({
    declarations: [PhotoBoardComponent],
    imports: [
        CommonModule,
        PhotoFrameModule
    ],
    exports: [PhotoBoardComponent],
    providers: [PhotoBoardService]
})
export class PhotoBoardModule { }