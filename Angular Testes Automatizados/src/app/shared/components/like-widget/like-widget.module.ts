import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DirectivesModule } from "../../directives/directives.module";
import { UniqueIdService } from "../../services/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        DirectivesModule,
    ],
    declarations: [LikeWidgetComponent],
    exports: [LikeWidgetComponent],
    providers: [UniqueIdService]
})
export class LikeWidgetModule { }