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
import { MobxAngularModule } from 'mobx-angular';
import { FormsModule } from '@angular/forms';

import { TodayAwareDateModule } from '../pipes/today-aware-date.module';
import { AnimatedPageModule } from '../shared/components/animated-page/animated-page.module';
import { RoutinesComponent } from './routines.component';
import { AddRoutineComponent } from './add/add-routine.component';

import { RoutinesStore } from './routines.store';

export { RoutinesComponent, AddRoutineComponent };

@NgModule({
  declarations: [
    RoutinesComponent,
    AddRoutineComponent
  ],
  imports: [
    AnimatedPageModule,
    FormsModule,
    MobxAngularModule,
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
  ],
  providers: [
    RoutinesStore
  ]
})
export class RoutinesModule { }
