type Career = {
  title: string;
  link: string;
  description: string[];
};

export const ETC: Career[] = [
  {
    title: 'https://www.kimcoder.io',
    link: 'https://www.kimcoder.io',
    description: ['Personal Technology Blog'],
  },
  {
    title: 'https://www.npmjs.com/package/react-simple-image-slider',
    link: 'https://www.npmjs.com/package/react-simple-image-slider',
    description: ['React Carousel Library with 2 DOMs'],
  },
  {
    title: 'https://www.npmjs.com/package/react-sequence-player',
    link: 'https://www.npmjs.com/package/react-sequence-player',
    description: ['React library that implements animation based on Image Sprite'],
  },
  {
    title: 'https://www.serverless.com/examples/serverless-instagram-crawler',
    link: 'https://www.serverless.com/examples/serverless-instagram-crawler',
    description: [
      'Contribute examples to the serverless framework',
      'When you set the hashtag and crawl cycle, crawl the Instagram feed and save it to DynamoDB',
    ],
  },
  {
    title: 'https://www.serverless.com/examples/serverless-nextjs',
    link: 'https://www.serverless.com/examples/serverless-nextjs',
    description: [
      'Contribute examples to the serverless framework',
      'deploy the next.js application to aws in serverless mode',
    ],
  },
];
