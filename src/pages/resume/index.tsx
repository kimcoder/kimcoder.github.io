import { Banner } from 'components/Banner';
import { Nav } from 'components/Nav';
import { Sticky } from 'components/Sticky';

import { PaperClipIcon } from '@heroicons/react/20/solid';
import ResumeCompany from 'components/resume/ResumeCompany';
import { CAREER } from 'lib/resume/career';

// getDateString(new Date(joinDate), 'yyyy-MM');

type Props = {
  career: typeof CAREER;
};

const Resume = ({ career }: Props) => {
  return (
    <div className='h-full min-h-full'>
      <Banner />
      <Sticky>
        <Nav />
      </Sticky>
      <div className='container mx-auto bg-white px-4 pt-6'>
        <div className='shadow overflow-hidden bg-white sm:rounded-lg'>
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-xl font-medium leading-6 text-gray-900'>Skills</h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>Personal details and application.</p>
          </div>
          <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
            <dl className='sm:divide-y sm:divide-gray-200'>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>Full name</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>Margot Foster</dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>Application for</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>Backend Developer</dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>Email address</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>margotfoster@example.com</dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>Salary expectation</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>$120,000</dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>About</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                  Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident.
                  Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>Attachments</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                  <ul role='list' className='divide-y border divide-gray-200 rounded-md border-gray-200'>
                    <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                      <div className='flex w-0 flex-1 items-center'>
                        <PaperClipIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                        <span className='truncate ml-2 w-0 flex-1'>resume_back_end_developer.pdf</span>
                      </div>
                      <div className='ml-4 flex-shrink-0'>
                        <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                          Download
                        </a>
                      </div>
                    </li>
                    <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                      <div className='flex w-0 flex-1 items-center'>
                        <PaperClipIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                        <span className='truncate ml-2 w-0 flex-1'>coverletter_back_end_developer.pdf</span>
                      </div>
                      <div className='ml-4 flex-shrink-0'>
                        <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {career
          .map(({ team, beginAt, endAt, ...item }) => ({ ...item, period: 'asdf', team: 'sdf' }))
          .map(({ name, team, period, techStack }) => {
            return (
              <ResumeCompany key={period} name={name} team={team.toString()} period={period} techStack={techStack} />
            );
          })}
        <ResumeCompany
          name={'카카오페이'}
          team={'금용사업클랜 투자파티 / 팀원'}
          period={'2020-08-01 - 2020-08-01'}
          techStack={[
            'react',
            'typescript',
            'redux-toolkit',
            'redux-saga',
            'react-query',
            'react-hook-form',
            'next.js',
            'express',
            'styled-components',
            'gitlab',
            'storybook',
            'jest',
            'react-testing-library',
            'msw',
            'lerna',
            'webpack',
            'esbuild',
          ]}
        />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: { career: CAREER },
  };
};

export default Resume;
