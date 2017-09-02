import { NgModule } from '@angular/core';

import { TodayAwareDatePipe } from './today-aware-date.pipe';

@NgModule({
  exports: [TodayAwareDatePipe],
  declarations: [TodayAwareDatePipe]
})
export class TodayAwareDateModule { }


