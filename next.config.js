const path = require('path');
const dotenvLoad = require('dotenv-load');
const optimizedImages = require('next-optimized-images');
dotenvLoad();

const remarkPlugins = [
  require('remark-slug'),
  require('./src/lib/docs/remark-paragraph-alerts'),
  [
    require('remark-autolink-headings'),
    {
      behavior: 'append',
      linkProperties: {
        class: ['anchor'],
        title: 'Direct link to heading',
      },
    },
  ],

  require('remark-emoji'),
  require('remark-footnotes'),
  require('remark-images'),
  [require('remark-github'), { repository: 'https://github.com/kimcoder/kimcoder.github.io' }],
  require('remark-unwrap-images'),
  [
    require('remark-toc'),
    {
      skip: 'Reference',
      maxDepth: 6,
    },
  ],
];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 'md'],
  env: {
    NEXT_PUBLIC_GA_TRACKING_ID: 'UA-122659594-1',
    NEXT_PUBLIC_GTM_ID: 'GTM-MKLQHRB',
    SENTRY_RELEASE: process.env.VERCEL_GITHUB_COMMIT_SHA || '',
  },
  async redirects() {
    return [
      {
        source: '/react-sequence-player',
        destination: 'https://kimcoder.s3.ap-northeast-2.amazonaws.com/demo/react-sequence-player/index.html',
        permanent: true,
      },
      {
        source: '/demo/react-simple-image-slider',
        destination: 'https://kimcoder.s3.ap-northeast-2.amazonaws.com/demo/react-simple-image-slider/index.html',
        permanent: true,
      },
      {
        source: '/react-simple-image-slider',
        destination: 'https://kimcoder.s3.ap-northeast-2.amazonaws.com/demo/react-simple-image-slider/index.html',
        permanent: true,
      },
      {
        source: '/docs/:any*',
        destination: '/:any*', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/overview',
        destination: '/',
        permanent: true,
      },
    ];
  },
  experimental: {
    turbo: {
      rules: {
        // Option format
        '*.md': [
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins,
            },
          },
        ],
        // Option-less format
        '*.mdx': ['@mdx-js/loader'],
      },
    },
  },
};

module.exports = nextConfig;
