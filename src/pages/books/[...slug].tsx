import DocsPageFooter from 'components/DocsPageFooter';
import MDXComponents from 'components/MDXComponents';
import { Nav } from 'components/Nav';
import { Seo } from 'components/Seo';
import { Sidebar } from 'components/Sidebar';
import { SidebarMobile } from 'components/SidebarMobile';
import SidebarRoutes from 'components/SidebarRoutes';
import { Sticky } from 'components/Sticky';
import { Toc } from 'components/Toc';
import markdownStyles from 'styles/markdown.module.css';
import { useIsMobile } from 'components/useIsMobile';
import { getBooks, BookData, getSidebarRoutesWith } from 'lib/books/mdxUtils';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type Props = {
  mdxSource: MDXRemoteSerializeResult<BookMetaData>;
  meta: BookMetaData;
  sidebarRoutes: PropOf<typeof SidebarRoutes, 'routes'>;
  prevRoute?: PropOf<typeof DocsPageFooter, 'prevRoute'>;
  nextRoute?: PropOf<typeof DocsPageFooter, 'nextRoute'>;
};

export default function BooksPage({ mdxSource, meta, sidebarRoutes, prevRoute, nextRoute }: Props) {
  const isMobile = useIsMobile();

  return (
    <>
      <div>
        {isMobile ? (
          <>
            <Nav />
            <Sticky shadow>
              <SidebarMobile>
                <SidebarRoutes routes={sidebarRoutes} />
              </SidebarMobile>
            </Sticky>
          </>
        ) : (
          <Sticky>
            <Nav />
          </Sticky>
        )}
        <Seo title={`${meta.id} - ${meta.title}`} description={meta.description} keywords={meta.keywords} />
        <div className='block'>
          <>
            <div className='content container mx-auto pb-12 pt-6'>
              <div className='relative flex'>
                {!isMobile && (
                  <Sidebar fixed>
                    <SidebarRoutes routes={sidebarRoutes} />
                  </Sidebar>
                )}
                <div className={markdownStyles['markdown'] + ' docs w-full'}>
                  <div>
                    <h1 id='_top'>{meta.title}</h1>
                    {meta.createdAt && <p id='_date'>{meta.createdAt}</p>}
                  </div>
                  <MDXRemote {...mdxSource} components={MDXComponents} />
                  <DocsPageFooter prevRoute={prevRoute} nextRoute={nextRoute} />
                </div>
                <div className='ml-10 hidden w-52 flex-shrink-0 xl:block'>
                  <div className='on-this-page sticky top-24 overflow-y-auto pb-16'>
                    <h4 className='mb-2 mt-2 text-sm font-semibold uppercase text-gray-500'>On this page</h4>
                    <Toc title={meta.title} />
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
      <style jsx>{`
        .docs {
          min-width: calc(100% - 300px - 1rem - 200px);
        }
      `}</style>
    </>
  );
}

export const getStaticProps = (async ({ params }: GetStaticPropsContext<{ slug: string[] }>) => {
  const books = await getBooks();
  const sidebarRoutes = getSidebarRoutesWith(books);
  const currentIdx = books.findIndex(({ slug }) => slug.toString() === params.slug.toString());
  const currentBook = books[currentIdx];
  const prevBook = books[currentIdx - 1];
  const nextBook = books[currentIdx + 1];
  const mdxSource = (await serialize(currentBook.content)) as MDXRemoteSerializeResult<BookMetaData>;
  const getFooterRouter = (book: BookData) => {
    return book ? { path: book.slug.join('/'), title: book.pageTitle } : null;
  };

  return {
    props: {
      mdxSource,
      meta: currentBook.meta,
      sidebarRoutes,
      prevRoute: getFooterRouter(prevBook),
      nextRoute: getFooterRouter(nextBook),
    },
  };
}) satisfies GetStaticProps<Props>;

export const getStaticPaths = (async () => {
  const books = await getBooks();

  return {
    paths: books.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}) satisfies GetStaticPaths;
