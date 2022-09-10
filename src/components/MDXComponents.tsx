import * as React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { CustomLink } from 'components/CustomLink';
import Image from 'next/image';

const Img = (props: any) => (
  // height and width are part of the props, so they get automatically passed here with {...props}
  <Image {...props} layout='responsive' loading='lazy' />
);

export default {
  // default tags
  pre: (p: any) => <div {...p} />,
  img: Img,
  code: dynamic(() => import('./Highlight2')),
  a: CustomLink,
  Head,
};
