import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkenOnHoverDirective } from './darken-on-hover.directive';
import { ImmediateClickDirective } from './immediate-click.directive';
import { ShowIfLoggedDirective } from './show-if-logged.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [	
      DarkenOnHoverDirective,
      ImmediateClickDirective,
      ShowIfLoggedDirective
   ],
  exports: [
      DarkenOnHoverDirective,
      ImmediateClickDirective,
      ShowIfLoggedDirective
  ]
})
export class DirectivesModule { }
