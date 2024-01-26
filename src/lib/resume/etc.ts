type Career = {
  title: string;
  link: string;
  description: string[];
};

export const ETC: Career[] = [
  {
    title: 'https://www.kimcoder.io',
    link: 'https://www.kimcoder.io',
    description: ['개인 기술 블로그'],
  },
  {
    title: 'https://www.npmjs.com/package/react-simple-image-slider',
    link: 'https://www.npmjs.com/package/react-simple-image-slider',
    description: ['2개의 DOM으로 구현하는 React Carousel 라이브러리'],
  },
  {
    title: 'https://www.npmjs.com/package/react-sequence-player',
    link: 'https://www.npmjs.com/package/react-sequence-player',
    description: ['Image Sprite를 기반으로 애니메이션을 구현시켜주는 React 라이브러리'],
  },
  {
    title: 'https://www.serverless.com/examples/serverless-instagram-crawler',
    link: 'https://www.serverless.com/examples/serverless-instagram-crawler',
    description: [
      'serverless 프레임워크에 예제 기여',
      'hashtag와 크롤링 주기를 설정하면 instagram의 피드를 크롤링하여 DynamoDB에 저장',
    ],
  },
  {
    title: 'https://www.serverless.com/examples/serverless-nextjs',
    link: 'https://www.serverless.com/examples/serverless-nextjs',
    description: ['serverless 프레임워크에 예제 기여', 'next.js 애플리케이션을 aws에 serverless 모드로 배포'],
  },
];
