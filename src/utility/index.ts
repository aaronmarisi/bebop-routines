import * as moment from 'moment';

export function getDayOfWeek(date: Date): string {
  const dayOfWeekFormatString = 'dddd';
  const dayOfWeek = moment(date).format(dayOfWeekFormatString);

  return dayOfWeek;
}
