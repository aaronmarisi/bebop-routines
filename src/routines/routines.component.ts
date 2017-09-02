import { Component, OnInit } from '@angular/core';
import { Routine, RoutinesViewModel } from './models';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {
  private routines: Routine[] = [
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

  viewModel: RoutinesViewModel = {
    routines: []
  };

  ngOnInit() {
    this.render();
  }

  trackRoutine(routine: Routine) {
    return routine.name;
  }

  private render() {
    this.viewModel = {
      routines: this.routines
    };
  }
}
