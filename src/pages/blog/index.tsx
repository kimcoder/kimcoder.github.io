import cn from 'classnames';
import { Banner } from 'components/Banner';
import { Footer } from 'components/Footer';
import markdownStyles from 'components/markdown.module.css';
import { Nav } from 'components/Nav';
import { Seo } from 'components/Seo';
import { Sticky } from 'components/Sticky';
import fs from 'fs';
import matter from 'gray-matter';
import { blogFilePaths, BLOG_PATH } from 'lib/blog/mdxUtils';
import Link from 'next/link';
import path from 'path';

export default function Index({ posts }: any) {
  return (
    <>
      <div className='h-full min-h-full'>
        <Banner />
        <Sticky>
          <Nav />
        </Sticky>
        <Seo title='Blog' description='The latest Formik news, announcements, articles, and resources.' />
        <div className='container px-4 pt-16 pb-20 mx-auto bg-white lg:pt-24 lg:pb-28'>
          <div className='relative '>
            <div>
              <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 lg:text-5xl sm:text-4xl sm:leading-10 '>
                Blog
              </h1>
              <div className='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center'>
                <p className='text-xl leading-7 text-gray-500'>
                  흘러가는 지식, 학습의 과정, 경험 정리를 위주로 작성되는 글들입니다.
                </p>
              </div>
            </div>
            <div className={markdownStyles['markdown']}>
              {posts.length === 0 && <p>There are no posts yet</p>}
              <div className='grid gap-16 pt-10 mt-6 border-t border-gray-100 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
                {posts.map((post: any) => {
                  return (
                    <div key={post.filePath} className='pb-6 space-y-2'>
                      {post.data.createdAt && (
                        <div className='text-sm leading-5 text-gray-500 posted'>
                          <time dateTime={post.data.createdAt.replaceAll('.', '-')}>{post.data.createdAt}</time>
                        </div>
                      )}
                      <h3 className='mt-2 text-2xl font-semibold leading-7 text-gray-900'>
                        <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`} href={`/blog/[slug]`}>
                          <a className='block'>
                            <span className='cursor-pointer hover:underline'>
                              {!post.data.published && <span className='text-white bg-black rounded-xl'>Draft</span>}
                              {post.data.title}
                            </span>{' '}
                          </a>
                        </Link>
                      </h3>
                      <div className='mt-3 leading-6 text-gray-500 '>
                        <div className={cn(markdownStyles.markdown, 'text-gray-500')}>
                          {!post.data.preview || post.data.preview.length === 0
                            ? 'No preview available'
                            : post.data.preview}
                        </div>
                      </div>

                      <div className='mt-3'>
                        <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`} href={`/blog/[slug]`}>
                          <a className='text-base font-semibold leading-6 text-blue-600 transition duration-150 ease-in-out hover:text-blue-500'>
                            Read More <span aria-hidden='true'>→</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export function getStaticProps() {
  const posts = blogFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(BLOG_PATH, filePath));
      const { content, data } = matter(source);
      return {
        content,
        data,
        filePath,
      };
    })
    .sort((a, b) => Number(new Date(b.data.createdAt)) - Number(new Date(a.data.createdAt)));

  return { props: { posts } };
}
