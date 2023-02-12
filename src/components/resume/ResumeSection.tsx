import { Anchor } from 'components/Anchor';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  title: string;
}>;

const ResumeSection = ({ title, children }: Props) => {
  return (
    <section className='mt-12 pt-6 grid border-gray-100 border-t-2'>
      <h2 className='text-3xl font-bold leading-6 text-gray-900 mb-12'>
        <Anchor href={`#${title}`}>{title}</Anchor>
      </h2>
      {children}
    </section>
  );
};

export default ResumeSection;
