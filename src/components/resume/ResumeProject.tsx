import { Fragment, ReactChild } from 'react';

const ResumeProject = {
  Name: ({ title, period }: { title: string; period: string }) => {
    return (
      <dt className='text-xl font-medium'>
        <h4>{title}</h4>
        <p className='text-i text-sm text-gray-500'>{period}</p>
      </dt>
    );
  },
  Description: ({ rows }: { rows: { title: string; description: ReactChild }[] }) => {
    return (
      <dd className='mt-3 sm:mt-1 text-sm text-gray-900 sm:col-span-2'>
        {rows.map(({ title, description }) => {
          return (
            <Fragment key={title}>
              <h5 className='text-lg font-medium mt-6 mb-1 first-of-type:mt-0'>{title}</h5>
              <div className='pl-2'>{description}</div>
            </Fragment>
          );
        })}
      </dd>
    );
  },
};

export default ResumeProject;
