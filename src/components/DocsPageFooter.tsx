import * as React from 'react';
import NextLink from 'next/link';

type Route = {
  title: string;
  path: string;
};

type Props = {
  prevRoute?: Route;
  nextRoute?: Route;
};

export default function DocsPageFooter({ prevRoute, nextRoute }: Props) {
  return (
    <>
      <div className='py-8'>
        <div className='space-between flex items-center'>
          {prevRoute ? (
            <NextLink href={prevRoute.path} className='flex-grow block'>
              <span className='mb-1 block text-sm font-semibold text-gray-500'>← Prev</span>
              <span className='block text-xl font-semibold text-blue-600'>{prevRoute.title}</span>
            </NextLink>
          ) : (
            <div />
          )}
          {nextRoute && (
            <NextLink href={nextRoute.path} className='flex-grow block text-right'>
              <span className='mb-1 block text-sm font-semibold text-gray-500'>Next →</span>
              <span className='block text-xl font-semibold text-blue-600'>{nextRoute.title}</span>
            </NextLink>
          )}
        </div>
      </div>
    </>
  );
}
