import { Banner } from 'components/Banner';
import { Footer } from 'components/Footer';
import styles from 'components/markdown.module.css';
import MDXComponents from 'components/MDXComponents';
import { Nav } from 'components/Nav';
import { Seo } from 'components/Seo';
import { Sticky } from 'components/Sticky';
import fs from 'fs';
import matter from 'gray-matter';
import { blogFilePaths, BLOG_PATH } from 'lib/blog/mdxUtils';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

export default function PostPage({ source, frontMatter }: any) {
  return (
    <>
      <div className='h-full min-h-full'>
        <Banner />
        <Sticky className='z-20'>
          <Nav />
        </Sticky>
        <Seo title={frontMatter.title + ' | Blog'} />
        <div className='container max-w-3xl px-4 pt-6 pb-12 mx-auto sm:px-6 lg:px-8 max-w-screen'>
          <div className='my-10 space-y-4'>
            <div className='flex items-center '>
              <div className='mr-1 text-gray-700 authors'>By kimcoder</div>
              {frontMatter.createdAt && <div className='text-gray-700 posted'> • {frontMatter.createdAt}</div>}
            </div>
            <h1 className='max-w-3xl text-5xl font-semibold leading-snug tracking-tighter text-gray-900'>
              {frontMatter.title || ''}
            </h1>
          </div>
          <div className='relative'>
            <div className='mx-auto'>
              <div className={styles['markdown']}>
                <MDXRemote {...source} components={MDXComponents} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(BLOG_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
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
