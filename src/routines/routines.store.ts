import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';

import { Routine, RoutinesViewModel } from './models';

@Injectable()
export class RoutinesStore {
  @observable routines: Routine[] = [];

  constructor() {
    this.loadRoutines();
  }

  loadRoutines() {
    this.routines = [
      {
        name: 'Morning',
        lastCompletedDate: new Date()
      },
      {
        name: 'Social Media',
        lastCompletedDate: new Date(2017, 8, 23, 19, 55)
      },
      {
        name: 'Bedtime',
        lastCompletedDate: new Date(2017, 8, 5, 21, 16)
      }
    ];
  }
}
