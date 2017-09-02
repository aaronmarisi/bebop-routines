import { Pipe, PipeTransform } from '@angular/core';
import { formatDate, areSameDate, addDays } from '../utility';

@Pipe({ name: 'todayAwareDate' })
export class TodayAwareDatePipe implements PipeTransform {
  transform(date: Date, todayText = 'Today', yesterdayText = 'Yesterday') {
    // TODO: Make today's date mockable, convert to UTC
    const todaysDate = new Date();
    const isToday = areSameDate(todaysDate, date);
    const yesterdaysDate = addDays(new Date(), -1);
    const isYesterday = areSameDate(yesterdaysDate, date);

    const dayText = isToday ? todayText : isYesterday ? yesterdayText : formatDate(date, 'dddd, MMMM, D, YYYY');
    const lastCompletedDate = `${dayText}, ${formatDate(date, 'h:mm A')}`;

    return lastCompletedDate;
  }
}
