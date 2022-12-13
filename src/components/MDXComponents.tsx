import React, { createElement, HtmlHTMLAttributes } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { CustomLink } from 'components/CustomLink';

const ANCHOR_TITLE = 'Direct link to heading';

const alreadyHasAnchor = (attr: HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return attr.children[1]?.props?.title === ANCHOR_TITLE;
};

export const getHeadingId = (attr: HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return attr.children.toString().replace(/\s/g, '-');
};

const getHeadingChildrenWithAnchor = (attr: HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <>
      {attr.children}
      <a title='Direct link to heading' className='anchor' href={`#${getHeadingId(attr)}`}>
        <span className='icon icon-link'></span>
      </a>
    </>
  );
};

const handleHeadingTags =
  (tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => (attr: HtmlHTMLAttributes<HTMLHeadingElement>) => {
    return alreadyHasAnchor(attr)
      ? createElement(tag, attr)
      : createElement(tag, { ...attr, id: getHeadingId(attr) }, getHeadingChildrenWithAnchor(attr));
  };

export default {
  // default tags
  pre: (p: any) => <div {...p} />,
  code: dynamic(() => import('./Highlight2')),
  a: CustomLink,
  Head,
  h1: handleHeadingTags('h1'),
  h2: handleHeadingTags('h2'),
  h3: handleHeadingTags('h3'),
  h4: handleHeadingTags('h4'),
  h5: handleHeadingTags('h5'),
  h6: handleHeadingTags('h6'),
};
