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

type Props = {
  career: typeof CAREER;
  etc: typeof ETC;
};

const Resume = ({ career, etc }: Props) => {
  return (
    <div className='h-full min-h-full'>
      <Banner />
      <Sticky>
        <Nav />
      </Sticky>
      <Seo
        title='김대현 이력서'
        description='프론트엔드 개발자 김대현의 이력서입니다.'
        keywords='개발자 이력서, 프론트엔드개발자 이력서, FE 이력서'
      />
      <div className='container mx-auto bg-white px-4 pt-16 pb-20 lg:pt-24 lg:pb-28'>
        <div className='overflow-hidden bg-white sm:rounded-lg'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl '>
            안녕하세요. 김대현입니다.
          </h1>
          <div className='lg mt-3 sm:mt-4 lg:grid lg:items-center lg:gap-5'>
            <p className='text-xl leading-7 text-gray-600'>
              저는 {getCareerDuration(career)}년 차 프론트엔드 개발자로 일하고 있으며, 다양한 사고와 도구들을 사용하여
              문제를 해결하는 것을 좋아합니다.
              <br />
              복잡한 문제들을 효율적이고 단순하게 해결하고자 노력합니다.
              <br />
              <br />
              주도적으로 업무를 진행하는 것을 선호하며,
              <br />
              비즈니스의 성장을 돕고 사용자에게 최적화된 경험을 제공하는 데 높은 가치를 두고 있습니다.
              <br />
              또한, 같이 협업하는 동료들에 대한 배려도 중요하게 생각합니다.
            </p>
          </div>
          <ResumeSection title='업무 경력'>
            {career.map((item) => {
              return <ResumeCompany key={item.team[0].beginAt} company={item} />;
            })}
          </ResumeSection>
          <ResumeSection title='그 외 경력'>
            <ResumeEtc etc={etc} />
          </ResumeSection>
          <ResumeSection title='스킬'></ResumeSection>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: { career: CAREER, etc: ETC },
  };
};

export default Resume;
