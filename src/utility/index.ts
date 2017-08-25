import * as moment from 'moment';

export function formatDate(date: Date, formatString: string) {
    const formattedDate = moment(date).format(formatString);
    return formattedDate;
}

export function addDays(date: Date, amount: number): Date {
  const result = moment(date).add(amount, 'days').toDate();
  return result;
}

export function areSameDate(original: Date, comparison: Date): boolean {
  const areSame = moment(original).isSame(comparison, 'date');
  return areSame;
}
