import * as React from 'react';
import { Route, SidebarNavLink } from './SidebarNavLink';
import cn from 'classnames';

type Props = {
  route: Route;
  isMobile: boolean;
  level: number;
};

export const SidebarPost = ({ isMobile, route, level = 1 }: Props) => {
  const selectedRef = React.useRef<HTMLDivElement>(null);
  const ref = route.selected ? selectedRef : null;
  React.useEffect(() => {
    if (ref && ref.current && !isMobile) {
      const content = document.querySelector('.sidebar-content') as HTMLDivElement; // 32 is the top and bottom margin for `.link`

      const height = ref.current.offsetTop - 32;

      if (content) {
        content.scrollTop = height - content.offsetHeight / 2;
      }
    }
  }, [ref, isMobile]);
  return (
    <div ref={ref} className={cn('link', `level-${level}`)}>
      <SidebarNavLink route={route} level={level} />
      <style jsx>{`
        .link {
          margin: 12px 0;
          display: flex;
          align-items: center;
        }

        .link:first-child {
          margin-top: 0;
        }
        .link:last-child {
          margin-bottom: 0;
        }
        @media screen and (max-width: 950px) {
          .link {
            margin: 24px 0;
          }
        }
      `}</style>
    </div>
  );
};
