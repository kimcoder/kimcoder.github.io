import { CustomLink } from 'components/CustomLink';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import Badge from 'components/Badge';

type Props = {
  name: string;
  team: string;
  period: string;
  techStack: string[];
};

const ResumeCompany = ({ name, team, period, techStack }: Props) => {
  return (
    <section>
      <div>
        <h2 className='mt-12 text-3xl font-medium leading-6 text-gray-900'>
          <CustomLink href={`#${name}`}>{name}</CustomLink>
        </h2>
        <p className='text-i mt-1 max-w-2xl text-sm text-gray-500'>{team}</p>
        <p className='mt-1 max-w-2xl text-sm text-gray-900'>{period}</p>
      </div>
      <div className='border-t mt-5 border-gray-200'>
        <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
          <dt className='text-sm font-medium text-gray-500'>사용 기술</dt>
          <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
            <ul role='list' className='flex flex-wrap children:mr-2 children:mt-2'>
              {techStack.map((tech) => (
                <li>
                  <Badge name={tech} />
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </div>
      <div className='border-t mt-5 border-gray-200'>
        <dl className='sm:divide-y sm:divide-gray-200'>
          <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-500'>
              코스피 지수에 따른 인덱스/리버스 펀드 매매 서비스 개발
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              <ul className='ml-4 list-disc'>
                <li>
                  sd
                  <ul className='ml-8 list-disc'>
                    <li>
                      <Badge name='asd' />
                    </li>
                    <li>
                      <Badge name='asd' />
                    </li>
                    <li>
                      <Badge name='asd' />
                    </li>
                  </ul>
                </li>
                <li>sdfsdf</li>
                <li>sdfsdf</li>
                <li>sdfsdf</li>
              </ul>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
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
    </section>
  );
};

export default ResumeCompany;
