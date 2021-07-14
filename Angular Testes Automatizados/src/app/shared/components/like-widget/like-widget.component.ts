import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from "../../services/unique-id.service";

@Component({
    selector: 'app-like-widget',
    templateUrl: './like-widget.component.html',
    styleUrls: ['like-widget.component.css']
})
export class LikeWidgetComponent implements OnInit
{
    public fonts = { faThumbsUp };

    @Output() public liked = new EventEmitter<void>();
    @Input() public likes = 0;
    @Input() public id: string = null;

    constructor(private uniqueIdService: UniqueIdService) {}

    ngOnInit(): void {
        if(!this.id) {
            this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
        }
    }

    public like(): void {
        this.liked.emit();
    }
}