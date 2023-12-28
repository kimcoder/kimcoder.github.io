import Badge from 'components/Badge';
import { CAREER } from 'lib/resume/career';
import { getPeriod } from 'lib/resume/helpers';
import { Anchor } from 'components/Anchor';
import { Fragment } from 'react';
import ResumeProject from 'components/resume/ResumeProject';

type Props = {
  company: (typeof CAREER)[0];
};

const ResumeCompany = ({ company: { companyName, team, beginAt, endAt } }: Props) => {
  const id = companyName + beginAt.split('-')[0];

  return (
    <section className='mt-12 first-of-type:mt-0'>
      <h3 className='text-3xl font-bold leading-6 text-gray-900' id={`${id}`}>
        <Anchor href={`#${id}`}>{companyName}</Anchor>
      </h3>
      <h3 className='mt-1 font-medium text-gray-700'>{getPeriod(beginAt, endAt)}</h3>
      {team.map(({ teamName, beginAt, endAt, position, projects }) => (
        <div className='border-t mt-2 pt-2' key={companyName + teamName}>
          <h4>
            {teamName} / {position}
          </h4>
          <p className='mt-1 max-w-2xl text-sm text-gray-900'>{getPeriod(beginAt, endAt)}</p>
          <div className='mt-5'>
            <dl>
              {projects.map(({ title, beginAt, endAt, description, role, techStack }) => (
                <div key={title + beginAt} className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 mt-5'>
                  <ResumeProject.Name title={title} period={getPeriod(beginAt, endAt)} />
                  <ResumeProject.Description
                    rows={[
                      {
                        title: '설명',
                        description: (
                          <p className='' dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>') }} />
                        ),
                      },
                      {
                        title: '한 일',
                        description: (
                          <ul className='ml-4 list-disc'>
                            {role.map(({ description, subDescription }) => (
                              <Fragment key={description}>
                                <li key={description} className='mt-1 first:mt-0'>
                                  {description}
                                </li>
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
                        ),
                      },
                      {
                        title: '사용 기술',
                        description: (
                          <>
                            <ul role='list' className='flex flex-wrap children:mr-2 children:mt-2'>
                              {techStack.map((tech) => (
                                <li key={tech}>
                                  <Badge name={tech} />
                                </li>
                              ))}
                            </ul>
                          </>
                        ),
                      },
                    ]}
                  />
                </div>
              ))}
            </dl>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResumeCompany;
