import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 'md'],
  swcMinify: true,
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
  experimental: {},
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
