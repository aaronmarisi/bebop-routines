import { Component, OnInit } from '@angular/core';
import { formatDate, areSameDate, addDays } from '../utility';
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

  trackRoutine(routine: RoutineViewModel) {
    return routine.name;
  }

  // TODO: move to own filter or directive
  private mapToDisplayDateText(date: Date): string {
    // TODO: Mock today's date, convert to UTC
    const todaysDate = new Date();
    const isToday = areSameDate(todaysDate, date);
    const yesterdaysDate = addDays(new Date(), -1);
    const isYesterday = areSameDate(yesterdaysDate, date);

    const dayText = isToday ? 'Today' : isYesterday ? 'Yesterday' : formatDate(date, 'dddd, MMMM, D, YYYY');
    const lastCompletedDate = `${dayText}, ${formatDate(date, 'h:mm A')}`;

    return lastCompletedDate;
  }

  private render() {
    const viewModel = {
      routines: this.routines.map(routine => {
        const routineViewModel: RoutineViewModel = {
          lastCompletedDate: this.mapToDisplayDateText(routine.lastCompletedDate),
          name: routine.name
        };

        return routineViewModel;
      })
    };

    this.viewModel = viewModel;
  }
}
