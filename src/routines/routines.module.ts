import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MdToolbarModule,
  MdListModule,
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdFormFieldModule,
  MdCheckboxModule
} from '@angular/material';

import { TodayAwareDateModule } from '../pipes/today-aware-date.module';
import { RoutinesComponent } from './routines.component';
import { AddRoutineComponent } from './add/add-routine.component';

export { RoutinesComponent, AddRoutineComponent };

@NgModule({
  declarations: [
    RoutinesComponent,
    AddRoutineComponent
  ],
  imports: [
    CommonModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    RouterModule,
    TodayAwareDateModule
  ],
  exports: [
    RoutinesComponent,
    AddRoutineComponent
  ]
})
export class RoutinesModule { }
