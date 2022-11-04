import cn from 'classnames';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  offset?: number;
  shadow?: boolean;
  className?: string;
}>;

export const Sticky = ({ offset = 0, children, shadow = false, className }: Props) => {
  return (
    <div
      style={{ top: offset }}
      className={cn(
        {
          shadow,
        },
        'z-10',
        className,
      )}>
      {children}

      <style jsx>{`
        div {
          background: #fff;
          position: sticky;
        }
        div.shadow {
          box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 20px;
        }
      `}</style>
    </div>
  );
};
Sticky.displayName = 'Sticky';
