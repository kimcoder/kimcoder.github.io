import { Banner } from 'components/Banner';
import { Footer } from 'components/Footer';
import styles from 'components/markdown.module.css';
import MDXComponents from 'components/MDXComponents';
import { Nav } from 'components/Nav';
import { Seo } from 'components/Seo';
import { Sticky } from 'components/Sticky';
import { Toc } from 'components/Toc';
import fs from 'fs';
import matter from 'gray-matter';
import { blogFilePaths, BLOG_PATH } from 'lib/blog/mdxUtils';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

type Props = {
  mdxSource: MDXRemoteSerializeResult<BlogMetaData>;
  blogMetadata: BlogMetaData;
};

export default function PostPage({ mdxSource, blogMetadata }: Props) {
  return <>
    <div className='h-full min-h-full'>
      <Banner />
      <Sticky className='z-20'>
        <Nav />
      </Sticky>
      <Seo
        title={blogMetadata.title + ' | Blog'}
        description={blogMetadata.description}
        keywords={blogMetadata.keywords}
      />
      <div className='content container mx-auto flex pb-12 pt-6'>
        <div className='w-full max-w-4xl xl:ml-52'>
          <div className='my-10 space-y-4'>
            <div className='flex items-center '>
              <div className='authors mr-1 text-gray-700'>By kimcoder</div>
              {blogMetadata.createdAt && <div className='posted text-gray-700'> • {blogMetadata.createdAt}</div>}
            </div>
            <h1
              id={blogMetadata.title.replace(/\s/g, '-')}
              className='text-5xl font-semibold leading-snug tracking-tighter text-gray-900'>
              {blogMetadata.title || ''}
              <a href={`#${blogMetadata.title.replace(/\s/g, '-')}`} />
            </h1>
          </div>
          <div className='relative'>
            <div className='mx-auto'>
              <div className={styles['markdown']}>
                <MDXRemote {...mdxSource} components={MDXComponents} />
              </div>
            </div>
          </div>
        </div>
        <div className='ml-10 hidden w-52 flex-shrink-0 xl:block'>
          <div className='on-this-page sticky top-24 overflow-y-auto pb-16'>
            <h4 className='mb-2 mt-2 text-sm font-semibold uppercase text-gray-500'>On this page</h4>
            <Toc title={blogMetadata.title} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>;
}

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(BLOG_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      mdxSource,
      blogMetadata: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = blogFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
