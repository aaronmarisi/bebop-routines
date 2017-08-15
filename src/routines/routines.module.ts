import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';

import { RoutinesComponent } from './routines.component';

@NgModule({
  declarations: [
    RoutinesComponent
  ],
  imports: [
    MdToolbarModule
  ],
  exports: [
    RoutinesComponent
  ]
})
export class RoutinesModule { }
