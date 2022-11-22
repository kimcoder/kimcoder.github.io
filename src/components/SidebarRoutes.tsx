import { useRouter } from 'next/router';
import React from 'react';
import { removeFromLast } from 'lib/docs/utils';
import { SidebarCategory } from 'components/SidebarCategory';
import { SidebarHeading } from 'components/SidebarHeading';
import { SidebarPost } from 'components/SidebarPost';
import { findRouteByPath } from 'lib/docs/findRouteByPath';
import { getManifest } from 'manifests/getManifest';
import { getRouteContext } from 'lib/get-route-context';

const getSlugAndTag = (path) => {
  const parts = path.split('/');

  if (parts[2] === '1.5.8' || parts[2] === '2.1.4') {
    return {
      tag: parts[2],
      slug: `/docs/${parts.slice(2).join('/')}`,
    };
  }

  return {
    slug: path,
  };
};

const addTagToSlug = (slug, tag) => {
  return tag ? `/docs/${tag}/${slug.replace('/docs/', '')}` : slug;
};

const getCategoryPath = (routes) => {
  const route = routes.find((r) => r.path);
  return route && removeFromLast(route.path, '/');
};

export const SidebarRoutes = ({ isMobile, routes = undefined, level = 1 }) => {
  // const { asPath } = useRouter();
  // let { slug, tag } = getSlugAndTag(asPath);
  const router = useRouter();
  const { slug, tag } = getSlugAndTag(router.asPath);
  const { routes: currentRoutes } = getManifest(tag);
  const _route = findRouteByPath(removeFromLast(slug, '#'), currentRoutes); // @ts-ignore
  const { route, prevRoute, nextRoute } = getRouteContext(_route, routes);

  return (routes ?? currentRoutes).map(({ path, title, routes, heading, open }, idx) => {
    const key = `${idx}_${title}_${heading}`;

    if (routes) {
      const pathname = getCategoryPath(routes);
      const selected = slug.startsWith(pathname);
      const opened = selected || isMobile ? false : open;

      if (heading) {
        return (
          <SidebarHeading key={key} title={title}>
            <SidebarRoutes isMobile={isMobile} routes={routes} level={level + 1} />
          </SidebarHeading>
        );
      }

      return (
        <SidebarCategory key={key} isMobile={isMobile} level={level} title={title} selected={selected} opened={opened}>
          <SidebarRoutes isMobile={isMobile} routes={routes} level={level + 1} />
        </SidebarCategory>
      );
    }

    const pagePath = removeFromLast(path, '.');
    const pathname = addTagToSlug(pagePath, tag);
    const selected = slug === pagePath;
    const route = {
      href: pagePath,
      path,
      title,
      pathname,
      selected,
    };
    return <SidebarPost key={key} isMobile={isMobile} level={level} route={route} />;
  });
};

export default SidebarRoutes;
