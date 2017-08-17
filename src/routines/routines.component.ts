import { Component, OnInit } from '@angular/core';
import { getDayOfWeek } from '../utility';
import { Routine, RoutinesViewModel, RoutineViewModel } from './models';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html'
})
export class RoutinesComponent implements OnInit {
  private routines: Routine[] = [
    {
      name: 'Morning',
      lastCompletedDate: new Date()
    },
    {
      name: 'Social Media',
      lastCompletedDate: new Date(2017, 8, 14, 19, 55)
    },
    {
      name: 'Bedtime',
      lastCompletedDate: new Date(2017, 8, 5, 21, 16)
    }
  ];

  viewModel: RoutinesViewModel = {
    routines: []
  };

  ngOnInit() {
    this.render();
  }

  trackRoutine(routine: RoutineViewModel) {
    return routine.name;
  }

  private render() {
    const viewModel = {
      routines: this.routines.map(routine => {
        const routineViewModel: RoutineViewModel = {
          name: routine.name,
          lastCompletedDate: getDayOfWeek(routine.lastCompletedDate)
        };

        return routineViewModel;
      })
    };

    this.viewModel = viewModel;
  }
}
