import { format } from 'date-fns';

export const getDateString = (date: Date, formatStr: 'yyyy-MM') => format(date, formatStr);
