import { useRouter } from 'next/router';
import React from 'react';
import { SidebarCategory } from 'components/SidebarCategory';
import { SidebarPost } from 'components/SidebarPost';
import { useIsMobile } from 'components/useIsMobile';
import type { Route } from 'components/SidebarNavLink';

export type Routes = {
  title: string;
  routes?: Route[];
}[];

type Props = {
  routes: Routes;
  level?: number;
};

export const SidebarRoutes = ({ routes, level = 1 }: Props) => {
  const isMobile = useIsMobile();
  const router = useRouter();

  return routes.map(({ title, routes }, idx) => {
    const selected = routes.some(({ pathname }) => pathname === router.asPath);
    const opened = selected || isMobile || false;

    return (
      <SidebarCategory
        key={`${idx}_${title}`}
        isMobile={isMobile}
        level={level}
        title={title}
        selected={selected}
        opened={opened}>
        {routes.map((route) => (
          <SidebarPost
            key={route.title + route.pathname}
            isMobile={isMobile}
            level={level + 1}
            route={{ ...route, selected: route.pathname === router.asPath }}
          />
        ))}
      </SidebarCategory>
    );
  });
};

export default SidebarRoutes;
