import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function Anchor({ href, children, ...props }: Props) {
  return (
    <>
      <span>{children}</span>
      <a title='Direct link to heading' className='anchor' href={href} {...props}>
        <span className='icon icon-link'></span>
      </a>
    </>
  );
}
