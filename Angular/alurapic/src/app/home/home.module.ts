import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        VmessageModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ],
    declarations: [
        // HomeRoutingModule,
        SigninComponent,
        SignupComponent,
        HomeComponent
    ],
    providers: [
        SignUpService
    ]
})
export class HomeModule { }
