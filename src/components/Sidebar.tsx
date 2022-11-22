import { PropsWithChildren, useState } from 'react';
import cn from 'classnames';
import { Search } from './Search';

type Props = PropsWithChildren<{
  active?: boolean;
  fixed: boolean;
}>;

export const Sidebar = ({ active = false, children, fixed }: Props) => {
  const [searching, setSearching] = useState(false);
  return (
    <aside
      className={cn('sidebar top-24 flex-shrink-0 bg-white pr-2', {
        active,
        'z-1 sticky flex flex-col pb-0': fixed,
        fixed,
        searching,
      })}>
      <div className='sidebar-search my-2 lg:hidden'>
        <Search />
      </div>
      <div className='sidebar-content overflow-y-auto pb-4'>{children}</div>
      <style jsx>{`
        .sidebar {
          -webkit-overflow-scrolling: touch;
          display: flex;
          flex-direction: column;
        }
        .sidebar.fixed {
          width: 300px;
          padding-right: 2.5rem;
          /* Full page - content margin - header size - banner */
          height: calc(100vh - 1.5rem - 64px - 42px);
        }
        .sidebar.fixed.searching > .sidebar-content {
          display: none;
        }
        .sidebar-search {
          position: relative;
          z-index: 1;
        }
        @media screen and (max-width: 1024px) {
          .sidebar,
          .sidebar.fixed {
            display: none;
          }
          .sidebar.active {
            display: block;
          }
        }
      `}</style>
    </aside>
  );
};
