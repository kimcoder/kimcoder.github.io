import { CustomLink } from 'components/CustomLink';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  title: string;
}>;

const ResumeSection = ({ title, children }: Props) => {
  return (
    <section className='mt-12 pt-6 grid border-gray-100 border-t-2'>
      <h2 className='text-3xl font-bold leading-6 text-gray-900'>
        <CustomLink href={`#${title}`}>{title}</CustomLink>
      </h2>
      {children}
    </section>
  );
};

export default ResumeSection;
