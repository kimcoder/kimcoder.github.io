import React, { createElement, HtmlHTMLAttributes, ReactNode } from 'react';
import Head from 'next/head';
import { CustomLink } from 'components/CustomLink';
import CodeBlock from 'components/CodeBlock';
import Mermaid from 'components/Mermaid';

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
  code: (props: Parameters<typeof CodeBlock>[0]) =>
    (props.className ?? []).includes('mermaid') ? <Mermaid diagram={props.children} /> : <CodeBlock {...props} />,
  a: CustomLink,
  Head,
  h1: handleHeadingTags('h1'),
  h2: handleHeadingTags('h2'),
  h3: handleHeadingTags('h3'),
  h4: handleHeadingTags('h4'),
  h5: handleHeadingTags('h5'),
  h6: handleHeadingTags('h6'),
} as unknown as Record<string, ReactNode>;
