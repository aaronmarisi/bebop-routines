import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutinesComponent } from './routines.component';

@NgModule({
  declarations: [
    RoutinesComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    RoutinesComponent
  ]
})
export class RoutinesModule { }
