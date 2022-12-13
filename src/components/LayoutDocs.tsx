import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Nav } from 'components/Nav';
import { Sidebar } from 'components/Sidebar';
import { SidebarMobile } from 'components/SidebarMobile';
import SidebarRoutes from 'components/SidebarRoutes';
import { Sticky } from 'components/Sticky';
import { useIsMobile } from 'components/useIsMobile';
import { findRouteByPath } from 'lib/docs/findRouteByPath';
import { removeFromLast } from 'lib/docs/utils';
import { getRouteContext } from 'lib/get-route-context';
import { useRouter } from 'next/router';
import { Toc } from './Toc';
import markdown from './markdown.module.css';
import { Footer } from './Footer';
import { DocsPageFooter } from './DocsPageFooter';
import { Seo } from './Seo';
import MDXComponents from './MDXComponents';
import Head from 'next/head';
import { getManifest } from 'manifests/getManifest';

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

export const LayoutDocs = (props) => {
  const router = useRouter();
  const { slug, tag } = getSlugAndTag(router.asPath);
  const { routes } = getManifest(tag);

  const _route = findRouteByPath(removeFromLast(slug, '#'), routes); // @ts-ignore

  const isMobile = useIsMobile();
  const { route, prevRoute, nextRoute } = getRouteContext(_route, routes);
  const title = route && `${route.title}`;
  const seoMetaTitle = router.pathname.includes('books') ? `${props.meta.id} - ${props.meta.title}` : props.meta.title;
  const seoTitle = seoMetaTitle || title;

  return (
    <>
      {tag && (
        <Head>
          <meta name='robots' content='noindex' />
        </Head>
      )}
      <div>
        {isMobile ? (
          <>
            <Nav />
            <Sticky shadow>
              <SidebarMobile>
                <SidebarRoutes isMobile={true} routes={routes} />
              </SidebarMobile>
            </Sticky>
          </>
        ) : (
          <Sticky>
            <Nav />
          </Sticky>
        )}
        <Seo title={seoTitle} description={props.meta.description} keywords={props.meta.keywords} />
        <div className='block'>
          <>
            <div className='content container mx-auto pb-12 pt-6'>
              <div className='relative flex'>
                {!isMobile && (
                  <Sidebar fixed>
                    <SidebarRoutes isMobile={false} routes={routes} />
                  </Sidebar>
                )}
                <div className={markdown['markdown'] + ' docs w-full'}>
                  <div>
                    <h1 id='_top'>{props.meta.title}</h1>
                    {props.meta.createdAt && <p id='_date'>{props.meta.createdAt}</p>}
                  </div>
                  <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
                  <DocsPageFooter prevRoute={prevRoute} nextRoute={nextRoute} />
                </div>
                {props.meta.toc === false ? null : (
                  <div className='ml-10 hidden w-52 flex-shrink-0 xl:block'>
                    <div className='on-this-page sticky top-24 overflow-y-auto pb-16'>
                      <h4 className='mb-2 mt-2 text-sm font-semibold uppercase text-gray-500'>On this page</h4>
                      <Toc title={props.meta.title} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .docs {
          min-width: calc(100% - 300px - 1rem - 200px);
        }
      `}</style>
    </>
  );
};

LayoutDocs.displayName = 'LayoutDocs';
