import { Banner } from 'components/Banner';
import { Nav } from 'components/Nav';
import { Seo } from 'components/Seo';
import { Sticky } from 'components/Sticky';
import React from 'react';

const Index = () => {
  return (
    <div className='h-full min-h-full'>
      <Banner />
      <Sticky>
        <Nav />
      </Sticky>
      <Seo title='Home' description='Personal blog by kimcoder' keywords='kimcoder, blog, frontend engineer' />
      <div className='max-w-screen container mx-auto max-w-3xl px-4 pt-6 pb-12 sm:px-6 lg:px-8'>
        <h2 id='author' className='mt-12 mb-4 text-2xl font-semibold text-gray-900'>
          Author
          <a title='Direct link to heading' className='anchor' href='#author'>
            <span className='icon icon-link'></span>
          </a>
        </h2>
        <div className='flex items-center'>
          <div className='overview-author-thumbnail h-16 w-16 overflow-hidden rounded-full'>
            <img className='h-16 w-16' src='/assets/images/kimcoder.jpg' alt='kimcoder' />
          </div>
          <div className='overview-author-text ml-4'>
            <p>kimcoder</p>
            <p>
              <a
                href='https://www.woowahan.com/'
                className='font-semibold text-blue-600 transition-colors duration-150 ease-out'>
                woowabros
              </a>{' '}
              frontend engineer
            </p>
          </div>
        </div>
        <h2 id='Contents' className='mt-12 mb-4 text-2xl font-semibold text-gray-900'>
          Contents
          <a title='Direct link to heading' className='anchor' href='#contents'>
            <span className='icon icon-link'></span>
          </a>
        </h2>
        <ul className='ml-8 list-disc'>
          <li>
            <a href='/resume'>경력 기술서.</a>
          </li>
          <li>흘러가는 지식을 정리.</li>
          <li>학습의 과정을 정리.</li>
          <li>경험(행동)의 과정/결과를 정리.</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
