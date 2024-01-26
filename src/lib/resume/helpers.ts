import { diffYearFromNow, getDateString, sortDateAsc } from 'lib/date-utils';
import { CAREER } from 'lib/resume/career';

type careerDurationDate = (typeof CAREER)[0]['beginAt'];

export const getPeriod = (beginAt: careerDurationDate, endAt?: careerDurationDate) => {
  const transformDate = (dateStr: careerDurationDate) => getDateString(new Date(`${dateStr}-01`), 'yyyy.MM');
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
