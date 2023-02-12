import { PaperClipIcon } from '@heroicons/react/20/solid';
import Badge from 'components/Badge';
import { CAREER } from 'lib/resume/career';
import { getPeriod } from 'lib/resume/helpers';
import { Anchor } from 'components/Anchor';
import { Fragment } from 'react';

type Props = {
  company: typeof CAREER[0];
};

const ResumeCompany = ({ company: { companyName, team, beginAt, endAt } }: Props) => {
  return (
    <section className='mt-12 first-of-type:mt-0'>
      <h2 className='text-2xl font-medium leading-6 text-gray-900'>
        <Anchor href={`#${companyName}`}>{companyName}</Anchor>
      </h2>
      <h3 className='font-medium text-gray-700'>{getPeriod(beginAt, endAt)}</h3>
      {team.map(({ teamName, beginAt, endAt, position, techStack, projects }) => (
        <div className='border-t-2 mt-2 pt-2' key={companyName + teamName}>
          <h3>
            {teamName} / {position}
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-900'>{getPeriod(beginAt, endAt)}</p>
          <div className='mt-5'>
            <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
              <dt className='text-base font-medium'>
                <h4>- 사용 기술</h4>
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                <ul role='list' className='flex flex-wrap children:mr-2 children:mt-2'>
                  {techStack.map((tech) => (
                    <li key={tech}>
                      <Badge name={tech} />
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </div>
          <div className='mt-5'>
            <dl>
              {projects.map(({ title, beginAt, endAt, description }) => (
                <div key={title + beginAt} className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
                  <dt className='text-base font-medium'>
                    <h4>- {title}</h4>
                    <p className='text-i text-sm text-gray-500'>{getPeriod(beginAt, endAt)}</p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                    <ul className='ml-4 list-disc'>
                      {description.map(({ description, subDescription }) => (
                        <Fragment key={description}>
                          <li className='mt-4 first:mt-0'>{description}</li>
                          {subDescription && (
                            <ul className='ml-8 list-disc'>
                              {subDescription.map((txt) => (
                                <li key={txt}>{txt}</li>
                              ))}
                            </ul>
                          )}
                        </Fragment>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ))}
      {/* <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
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
      </div> */}
    </section>
  );
};

export default ResumeCompany;
