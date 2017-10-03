import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum PageAnimation {
  None = '',
  FadeIn = 'fadeIn',
  FadeOut = 'fadeOut',
  SlideInUp = 'slideInUp',
  SlideOutDown = 'slideOutDown',
}

@Component({
  selector: 'app-animated-page',
  templateUrl: 'animated-page.component.html',
  styleUrls: ['animated-page.component.css']
})
export class AnimatedPageComponent {
  animationClass: PageAnimation = PageAnimation.None;
  animationInProgress: Promise<void> = null;
  animationResolver: () => void = null;

  constructor() { }

  onAnimationEnd() {
    this.animationClass = PageAnimation.None;
    this.animationResolver();

    this.animationInProgress = null;
    this.animationResolver = null;
  }

  animate(animation: PageAnimation) {
    if (this.animationInProgress) {
      return this.animationInProgress;
    }

    this.animationClass = animation;
    this.animationInProgress = new Promise((resolve, reject) => {
      this.animationResolver = resolve;
    });

    return this.animationInProgress;
  }
}
