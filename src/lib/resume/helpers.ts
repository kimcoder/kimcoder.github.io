import { diffYearFromNow, getDateString, sortDateAsc } from 'lib/date-utils';
import { CAREER } from 'lib/resume/career';

export const getPeriod = (beginAt: string, endAt?: string) => {
  const transformDate = (dateStr: string) => getDateString(new Date(dateStr), 'yyyy.MM');
  const endAtStr = endAt ? transformDate(endAt) : '재직중';

  return `${transformDate(beginAt)} ~ ${endAtStr}`;
};

export const getCareerDuration = (list: typeof CAREER) => {
  const FIRST_YEAR = CAREER.map(({ team }) => team)
    .flat()
    .map((item) => new Date(item.beginAt))
    .sort(sortDateAsc)[0];
  const ADDITIONAL_YEAR = 1;

  return diffYearFromNow(FIRST_YEAR) + ADDITIONAL_YEAR;
};
