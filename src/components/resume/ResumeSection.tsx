import { Anchor } from 'components/Anchor';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  title: string;
}>;

const ResumeSection = ({ title, children }: Props) => {
  return (
    <section className='mt-12 pt-6 grid border-gray-100 border-t first-of-type:border-none'>
      <h2 className='text-4xl font-bold text-gray-900 mb-12'>
        <Anchor href={`#${title}`}>{title}</Anchor>
      </h2>
      {children}
    </section>
  );
};

export default ResumeSection;
