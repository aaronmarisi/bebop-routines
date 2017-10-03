import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimatedPageComponent, PageAnimation } from '../shared/components/animated-page/animated-page.component';
import { Routine, RoutinesViewModel } from './models';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.shared.css']
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

  @ViewChild('page') page: AnimatedPageComponent;

  constructor(private router: Router) { }

  ngOnInit() {
    this.page.animate(PageAnimation.FadeIn);
    this.render();
  }

  trackRoutine(routine: Routine) {
    return routine.name;
  }

  onAddClick() {
    this.page.animate(PageAnimation.FadeOut).then(() => {
      this.router.navigateByUrl('routine/add');
    });
  }

  private render() {
    this.viewModel = {
      routines: this.routines
    };
  }
}
