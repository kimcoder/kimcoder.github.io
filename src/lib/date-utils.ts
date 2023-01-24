import { format, compareAsc, differenceInYears } from 'date-fns';

export const getDateString = (date: Date, formatStr: 'yyyy-MM' | 'yyyy.MM') => format(date, formatStr);

export const sortDateAsc = (a: Date, b: Date) => compareAsc(a, b);

export const diffYear = (a: Date, b: Date) => differenceInYears(a, b);

export const diffYearFromNow = (target: Date) => Math.abs(diffYear(target, new Date()));
