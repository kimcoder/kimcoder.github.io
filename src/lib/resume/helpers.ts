import { diffYearFromNow, getDateString, sortDateAsc } from 'lib/date-utils';
import { CAREER } from 'lib/resume/career';

export const enrichPeriod = (item: typeof CAREER[0]) => {
  const transformDate = (dateStr: typeof item['beginAt']) => getDateString(new Date(item.beginAt), 'yyyy.MM');
  const endAtStr = item.endAt ? transformDate(item.beginAt) : '재직중';

  return { ...item, period: `${transformDate(item.beginAt)} ~ ${endAtStr}` };
};

export const getCareerDuration = (list: typeof CAREER) => {
  const FIRST_YEAR = CAREER.map((item) => new Date(item.beginAt)).sort(sortDateAsc)[0];
  const ADDITIONAL_YEAR = 1;

  return diffYearFromNow(FIRST_YEAR) + ADDITIONAL_YEAR;
};
