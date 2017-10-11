import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AnimatedPageComponent, PageAnimation } from '../shared/components/animated-page/animated-page.component';
import { Routine, RoutinesViewModel } from './models';
import { RoutinesStore } from './routines.store';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.shared.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutinesComponent implements OnInit {
  store: RoutinesStore;

  @ViewChild('page') page: AnimatedPageComponent;

  constructor(
    private router: Router,
    store: RoutinesStore
  ) {
    this.store = store;
  }

  ngOnInit() {
    this.page.animate(PageAnimation.FadeIn);
  }

  trackRoutine(routine: Routine) {
    return routine.name;
  }

  onAddClick() {
    this.page.animate(PageAnimation.FadeOut).then(() => {
      this.router.navigateByUrl('routine/add');
    });
  }
}
