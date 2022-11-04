import * as React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { CustomLink } from 'components/CustomLink';

export default {
  // default tags
  pre: (p: any) => <div {...p} />,
  code: dynamic(() => import('./Highlight2')),
  a: CustomLink,
  Head,
};
