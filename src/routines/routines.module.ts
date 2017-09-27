import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdListModule, MdButtonModule, MdIconModule } from '@angular/material';

import { TodayAwareDateModule } from '../pipes/today-aware-date.module';
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
    MdButtonModule,
    TodayAwareDateModule
  ],
  exports: [
    RoutinesComponent
  ]
})
export class RoutinesModule { }
