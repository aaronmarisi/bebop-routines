import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdListModule, MdButtonModule, MdIconModule } from '@angular/material';

import { RoutinesComponent } from './routines.component';

@NgModule({
  declarations: [
    RoutinesComponent
  ],
  imports: [
    CommonModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdButtonModule
  ],
  exports: [
    RoutinesComponent
  ]
})
export class RoutinesModule { }
