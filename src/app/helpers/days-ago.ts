import * as moment from 'moment';

export const daysAgo = (value: number): Date =>
  moment()
    .subtract(value, 'd')
    .toDate();
