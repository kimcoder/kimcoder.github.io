import { WithRouterProps } from 'next/dist/client/with-router';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { PropsWithChildren } from 'react';

const ogImage = '/kimcoder-og.png';
const favicon = '/favicon.png';

type Props = PropsWithChildren<
  { title?: string; description?: string; keywords?: string; image?: string } & WithRouterProps
>;

export const Seo = withRouter(({ title, description, keywords, image = ogImage, router, children }: Props) => (
  <Head>
    {/* DEFAULT */}

    {title != undefined && <title key='title'>{title} | kimcoder</title>}
    {description != undefined && <meta name='description' key='description' content={description} />}
    {keywords != undefined && <meta name='keywords' key='keywords' content={keywords} />}
    <link rel='icon' type='image/x-icon' href={favicon} />
    <link rel='apple-touch-icon' href={favicon} />

    {/* OPEN GRAPH */}
    <meta property='og:type' key='og:type' content='website' />
    <meta property='og:url' key='og:url' content={`https://kimcoder.io`} />
    {title != undefined && <meta property='og:title' content={title} key='og:title' />}
    {description != undefined && <meta property='og:description' key='og:description' content={description} />}
    {image != undefined && <meta property='og:image' key='og:image' content={image} />}

    {/* TWITTER */}
    <meta name='twitter:card' key='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' key='twitter:site' content='@kimcoder' />
    <meta name='twitter:creator' key='twitter:creator' content='@kimcoder' />
    {title != undefined && <meta name='twitter:title' key='twitter:title' content={title} />}
    {description != undefined && <meta name='twitter:description' key='twitter:description' content={description} />}
    {image != undefined && <meta name='twitter:image' key='twitter:image' content={image} />}

    {children}
  </Head>
));
