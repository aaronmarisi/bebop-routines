import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimatedPageComponent, PageAnimation } from '../../shared/components/animated-page/animated-page.component';

import { Task } from '../models';

@Component({
  selector: 'app-add-routine',
  templateUrl: './add-routine.component.html',
  styleUrls: ['./add-routine.component.css', '../routines.shared.css']
})

export class AddRoutineComponent implements OnInit {
  addingTask = false;
  name: string = null;
  taskName: string = null;
  // tasks: Task[] = [];
  tasks: Task[] = [{ name: 'Do Something'}, {name: 'Do Something Else'}];

  @ViewChild('page') page: AnimatedPageComponent;

  constructor(private router: Router) { }

  ngOnInit() {
    this.page.animate(PageAnimation.SlideInUp);
    this.reset();
  }

  onAddTask(event: UIEvent) {
    event.preventDefault();
    this.addingTask = true;
  }

  onAddTaskBlur(name: string) {
    this.tasks = [
      {name},
      ... this.tasks
    ];

    this.addingTask = false;
    this.taskName = null;
  }

  onClearClick() {
    this.page.animate(PageAnimation.SlideOutDown).then(() => {
      this.router.navigateByUrl('routines');
    });
  }

  onSaveClick() {
    this.page.animate(PageAnimation.SlideOutDown).then(() => {
      this.router.navigateByUrl('routines');
    });
  }

  reset() {
    this.name = '';
    this.tasks = [];
    this.addingTask = false;
  }
}
