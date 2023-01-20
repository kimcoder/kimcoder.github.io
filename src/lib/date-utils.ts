import { format } from 'date-fns';

export const getDateString = (date: Date, formatStr: 'yyyy-MM' | 'yyyy.MM') => format(date, formatStr);
