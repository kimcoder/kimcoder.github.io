import { Anchor } from 'components/Anchor';
import Badge from 'components/Badge';
import { ETC } from 'lib/resume/etc';
import Link from 'next/link';

type Props = {
  etc: typeof ETC;
};

const ResumeEtc = ({ etc }: Props) => {
  return (
    <ul className='list-outside list-disc'>
      {etc.map((item) => (
        <li key={item.link} className='mt-4'>
          -&nbsp;
          <a href={item.link} target='_blank' className='hover:underline'>
            {item.title}
          </a>
          <ul className='ml-4 text-gray-500'>
            {item.description.map((description) => (
              <li className='ml-4 list-disc' key={description}>
                {description}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ResumeEtc;
