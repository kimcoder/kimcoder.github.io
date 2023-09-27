import * as React from 'react';
import NextLink from 'next/link';
import { removeFromLast } from '../lib/docs/utils';

type Route = {
  title: string;
  path?: string;
};

type Props = {
  prevRoute: Route;
  nextRoute: Route;
};

function areEqual(prevProps, props) {
  return prevProps.route?.path === props.route?.path;
}

export const DocsPageFooter = React.memo(({ prevRoute, nextRoute }: Props) => {
  return <>
    <div className='py-8'>
      <div className='space-between flex items-center'>
        {prevRoute && prevRoute.path ? (
          (<NextLink href={removeFromLast(prevRoute.path, '.')} className='flex-grow  block'>

            <span className='mb-1 block text-sm font-semibold text-gray-500'>← Prev</span>
            <span className='block text-xl font-semibold text-blue-600'>{prevRoute.title}</span>

          </NextLink>)
        ) : (
          <div />
        )}
        {nextRoute && nextRoute.path && (
          (<NextLink
            href={removeFromLast(nextRoute.path, '.')}
            className='flex-grow block text-right'>

            <span className='mb-1 block text-sm font-semibold text-gray-500'>Next →</span>
            <span className='block text-xl font-semibold text-blue-600'>{nextRoute.title}</span>

          </NextLink>)
        )}
      </div>
    </div>
  </>;
}, areEqual);
DocsPageFooter.displayName = 'DocsPageFooter';
