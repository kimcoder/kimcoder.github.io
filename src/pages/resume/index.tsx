import { Banner } from 'components/Banner';
import { Nav } from 'components/Nav';
import { Sticky } from 'components/Sticky';

import ResumeCompany from 'components/resume/ResumeCompany';
import { CAREER } from 'lib/resume/career';
import { getCareerDuration } from 'lib/resume/helpers';
import { Seo } from 'components/Seo';
import ResumeSection from 'components/resume/ResumeSection';
import { ETC } from 'lib/resume/etc';
import ResumeEtc from 'components/resume/ResumeEtc';
import { GetStaticProps } from 'next/types';
import { Toc } from 'components/Toc';
import resumeStyles from 'styles/resume.module.css';
import classNames from 'classnames';

type Props = {
  career: typeof CAREER;
  etc: typeof ETC;
};

export default function ResumePage({ career, etc }: Props) {
  return (
    <div className={classNames(resumeStyles.resume, 'h-full min-h-full')}>
      <Banner />
      <Seo
        title='김대현 이력서'
        description='프론트엔드 개발자 김대현의 이력서입니다.'
        keywords='개발자 이력서, 프론트엔드개발자 이력서, FE 이력서, Frontend Engineer Resume, Engineering Resume'
      />
      <div className='container mx-auto bg-white px-4 pt-16 pb-20 lg:pt-24 lg:pb-28 flex'>
        <div className='overflow-hidden bg-white sm:rounded-lg'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl '>
            Hello, I'm Daehyun Kim.
          </h1>
          <div className='lg mt-3 sm:mt-4 lg:grid lg:items-center lg:gap-5'>
            <p className='text-xl leading-7 text-gray-600'>
              I've been working as a front-end developer for {getCareerDuration(career)} years, and I like to use
              different thinking and tools to solve problems.
              <br />
              I strive to solve complex problems efficiently and simply.
              <br />
              <br />
              I prefer to take the initiative in my work,
              <br />
              I try to help my business grow and provide an optimized experience to my users.
              <br />
              Additionally, I consider it important to be considerate of the colleagues I collaborate with.
            </p>
          </div>
          <p className='text-xl mt-3 leading-7 text-gray-600'>
            +82 10 9796 9623
            <br />
            kimcoder@me.com
          </p>
          <ResumeSection title='Experience'>
            {career.map((item, idx) => {
              return <ResumeCompany key={item.team[0].beginAt} company={item} />;
            })}
          </ResumeSection>
          <ResumeSection title='Etc'>
            <ResumeEtc etc={etc} />
          </ResumeSection>
          {/* <ResumeSection title='스킬'></ResumeSection> */}
        </div>
        <div className='ml-10 hidden w-28 flex-shrink-0 xl:block'>
          <div className='on-this-page sticky top-24 overflow-y-auto pb-16'>
            <h4 className='mb-2 mt-2 text-sm font-semibold uppercase text-gray-500'>이력서</h4>
            <Toc title={'자기소개'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = (async () => {
  return {
    props: { career: CAREER, etc: ETC },
  };
}) satisfies GetStaticProps<Props>;
