import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdListModule } from '@angular/material';

import { RoutinesComponent } from './routines.component';

@NgModule({
  declarations: [
    RoutinesComponent
  ],
  imports: [
    CommonModule,
    MdToolbarModule,
    MdListModule
  ],
  exports: [
    RoutinesComponent
  ]
})
export class RoutinesModule { }
