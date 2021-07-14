import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VmessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { DirectivesModule } from "src/app/shared/directives/directives.module";
import { ImmediateClickDirective } from "src/app/shared/directives/immediate-click.directive";
import { PhotoModule } from "../photo/photo.module";

import { PhotoFormComponent } from "./photo-form.component";

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        VmessageModule,
        PhotoModule,
        DirectivesModule
    ]
})
export class PhotoFormModule { }