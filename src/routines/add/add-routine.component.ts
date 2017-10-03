import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimatedPageComponent, PageAnimation } from '../../shared/components/animated-page/animated-page.component';

@Component({
  selector: 'app-add-routine',
  templateUrl: './add-routine.component.html',
  styleUrls: ['./add-routine.component.css', '../routines.shared.css']
})

export class AddRoutineComponent implements OnInit {
  @ViewChild('page') page: AnimatedPageComponent;

  constructor(private router: Router) { }

  ngOnInit() {
    this.page.animate(PageAnimation.SlideInUp);
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
}
