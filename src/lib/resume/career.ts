type Career = {
  companyName: string;
  beginAt: `${number}-${number}`;
  endAt?: `${number}-${number}`;
  team: Team[];
};

type Team = {
  teamName: string;
  position: string;
  beginAt: `${number}-${number}`;
  endAt?: `${number}-${number}`;
  projects: Project[];
};

type Project = {
  title: string;
  beginAt: `${number}-${number}`;
  endAt?: `${number}-${number}`;
  description: string;
  role: Works[];
  works: Works[];
  techStack: (
    | 'React'
    | 'Next.js'
    | 'Typescript'
    | 'styled-components'
    | 'Node.js'
    | 'Express'
    | 'MSW'
    | 'Mirage JS'
    | 'Lerna'
    | 'Jest'
    | 'React Testing Library'
    | 'Storybook'
    | 'Redux'
    | 'Redux Toolkit'
    | 'Redux Saga'
    | 'Redux Thunk'
    | 'React Hook Form'
    | 'React Query'
    | 'Mobx'
    | 'MobX-state-tree'
    | 'Javascript'
    | 'Github'
    | 'Gitlab'
    | 'AWS'
    | 'ActionScript 3.0'
    | 'Adobe AIR'
    | 'Objective-C'
    | 'PHP'
    | 'Gulp'
    | 'webpack'
    | 'Vite'
    | 'Vitest'
    | 'esbuild'
    | 'Rollup'
    | 'sass'
    | 'jQuery'
    | 'ImageMagick'
    | 'FFmpeg'
    | 'Angular'
    | 'AngularJS'
    | 'gulp'
    | 'Cinder'
    | 'C++'
    | 'Serverless'
    | 'OpenGL'
    | 'i18n'
    | 'nivo'
    | 'TS-Pattern'
    | 'Rspress'
    | 'tsup'
    | 'Turborepo'
    | 'Slack Bolt'
    | 'Docusaurus'
  )[];
};

type Works = {
  description: string;
  subDescription?: string[];
};

export const CAREER: Career[] = [
  {
    companyName: 'Woowa Brothers Corp',
    beginAt: '2021-05',
    team: [
      {
        teamName: 'Seller Web Front-end Team',
        position: 'Team Member',
        beginAt: '2022-10',
        projects: [
          {
            title: 'Woowahan Library',
            beginAt: '2023-05',
            description: `The library's ecosystem was built with TF for the creation of the company-wide front-end library of elegant brothers.\nTF consisted of senior engineers from each front-end team.`,
            role: [
              {
                description: 'Project Lead and Schedule Management',
              },
              {
                description: 'Build a new library',
              },
            ],
            works: [
              {
                description: 'Establish workflow deployment and library maintenance policies',
              },
              {
                description: 'Develop React Custom Hook Library',
                subDescription: ['100% code coverage achieved'],
              },
            ],
            techStack: [
              'React',
              'Typescript',
              'Turborepo',
              'Vite',
              'Vitest',
              'Docusaurus',
              'Storybook',
              'Gitlab',
              'AWS',
            ],
          },
          {
            title: 'BaeMin Ceo app',
            beginAt: '2022-10',
            description: `The BaeMin Ceo app is a service that allows the owner to process orders, set delivery settings, and set up shop operations through the app.\nIt is a service that provides major functions through web view, and the project was carried out as the leader of the app's order reception web view development part.`,
            role: [
              {
                description: 'Project/Tech Lead and Schedule Management',
              },
              {
                description: 'Service enhancement and development of new features',
              },
            ],
            works: [
              {
                description: 'Development of Baedal Minjok commerce order acceptance function',
              },
              {
                description: 'developed a variable font function',
              },
              {
                description: 'WebView Bridge SDK Construction and Guide Documentation',
              },
              {
                description: 'Increase UI development and verification convenience with Storybook and MSW',
                subDescription: [
                  'Introducing a visual review environment by providing preview functionality to Merge Request',
                  'Provides variable font addon in the development environment to simulate font size values received from the app',
                ],
              },
              {
                description: 'Development Environment Improvement',
                subDescription: [
                  'Application Bundler Switching (42x local drive speed ↑ and 1.3x CI build speed ↑)',
                  'Establish a monitoring/metric measurement environment due to Centri and Grafana dashboard configurations',
                  'Improve code complexity and usability by converting unnecessary Redux-related code to ReactQuery',
                ],
              },
              {
                description: 'Improved Web Performance',
                subDescription: [
                  'Improved Overall LCP by approximately 40% or more with code-splitting, tree-shaking, etc. (2.x seconds → 0.8 to 1.2 seconds)',
                  'Improve web server load by changing web server static resource serving method (approximately 90% ↓ )',
                ],
              },
              {
                description: 'Improved code coverage (20% → 60%)',
              },
            ],
            techStack: [
              'React',
              'Typescript',
              'Redux',
              'Redux Saga',
              'React Query',
              'Express',
              'styled-components',
              'TS-Pattern',
              'Gitlab',
              'Storybook',
              'MSW',
              'React Testing Library',
              'Vitest',
              'Vite',
              'AWS',
              'Turborepo',
              'Rspress',
              'tsup',
              'Slack Bolt',
            ],
          },
        ],
      },
      {
        teamName: 'Baemin Restaurant Supply Web Front-end Team',
        position: 'Team Member',
        beginAt: '2021-05',
        endAt: '2022-10',
        projects: [
          {
            title: 'Baemin Restaurant Supply',
            beginAt: '2021-05',
            endAt: '2022-09',
            description: `Baemin Restaurant Supply is a service where the boss can purchase food materials and supplies.\nB2B E-commerce Front, Admin that can manage functions, and Seller Admin that external sellers can enter and use.`,
            role: [
              {
                description: 'Project/Tech Lead and Schedule Management',
              },
              {
                description: 'Service enhancement and development of new features',
              },
            ],
            works: [
              {
                description: 'Marketplace Business Model Transition',
                subDescription: [
                  'Build a Seller Admin service that can be used by outside vendors',
                  'Development of product management/price management/category management functions',
                  'Improvement of mass product image registration process through Excel (approximately 80% API processing time ↓)',
                ],
              },
              {
                description: 'Development of Baemin Restaurant Supply Mobile Main Page Tab Function',
              },
              {
                description: 'Development of customized order form function of Baemin Restaurant Supply',
              },
              {
                description: 'Expanding Baemin Restaurant Supply Admin Services',
                subDescription: [
                  'Expanding the in-house similar services to be managed on one platform enables Baemin Stationery Shopping Mall to be managed by Baemin Restaurant Supply Admin',
                ],
              },
              {
                description: 'Design system maintenance',
                subDescription: [
                  'Package separation of shopping mall and admin components through monorepo',
                  'Establish a per-package versioning and deployment strategy',
                ],
              },
              {
                description: 'Development Environment Improvement',
                subDescription: [
                  'Improve development/distribution of more than 10 development zone environments through the creation of a library called env-launcher',
                  'Improve code complexity by converting Redux-related legacy code to Redux Toolkit and React Query',
                  'Develop easy-to-use Infinite Scroll components to organize code patterns on multiple pages and improve complexity',
                ],
              },
              {
                description: 'Improved Web Performance',
                subDescription: [
                  'Additional Image Rage Load capability reduces the number of unnecessary requests by more than 200 on the main page of the shopping mall alone',
                ],
              },
            ],
            techStack: [
              'React',
              'Typescript',
              'Next.js',
              'React Hook Form',
              'Redux Toolkit',
              'Redux Saga',
              'React Query',
              'Express',
              'styled-components',
              'Gitlab',
              'Storybook',
              'Jest',
              'React Testing Library',
              'Lerna',
              'MSW',
              'AWS',
            ],
          },
        ],
      },
    ],
  },
  {
    companyName: 'Kakao Pay Corp',
    beginAt: '2020-08',
    endAt: '2021-05',
    team: [
      {
        teamName: 'Investment Team',
        position: 'Team Member',
        beginAt: '2020-08',
        endAt: '2021-05',
        projects: [
          {
            title: 'Index/reverse fund investment based on KOSPI index',
            beginAt: '2020-08',
            endAt: '2021-02',
            description:
              'Unlike general fund services, we have established a new fund trading service with entertainment.\nWe proceeded to CBT in-house, but unfortunately, the service was not launched due to compliance issues.\nKakao Pay introduced and developed React Query for the first time, and after that, it spread usability to the company.',
            role: [
              {
                description: 'Project/Tech Lead and Schedule Management',
              },
              {
                description: 'Build new service',
              },
            ],
            works: [
              {
                description:
                  'Build a new development environment including technology stack, convention definition, deployment, monitoring, etc',
              },
              {
                description: 'Product code and test code design using ReactQuery',
              },
              {
                description: 'Development of a number of functions, including index charts/fund buying/user rankings',
              },
              {
                description: 'Increase UI development and verification convenience with Storybook, Mirage JS',
              },
            ],
            techStack: [
              'React',
              'React Query',
              'nivo',
              'Typescript',
              'sass',
              'Jest',
              'React Testing Library',
              'Mirage JS',
              'Storybook',
              'webpack',
              'Github',
            ],
          },
          {
            title: 'P2P Real Estate Investment',
            beginAt: '2020-11',
            endAt: '2021-02',
            description:
              'I have maintained a real estate P2P investment service.\nThe service was accessible in the Kakao Pay service area within the Kakao Talk app, and in the Kakao Pay app.\nUnfortunately, the service is closed now.',
            role: [
              {
                description: 'Project Lead and Schedule Management',
              },
              {
                description: 'Service enhancement',
              },
            ],
            works: [
              {
                description: 'Reduce code complexity on investment history list by introducing ReactQuery',
              },
              {
                description: 'Application of Kakao Pay Integrated Web View SDK',
              },
              {
                description: 'Development and Guide for Kakao Pay Integrated Web View SDK Bridge for Affiliates',
              },
              {
                description: `Improve usability so that the screen you're viewing is maintained when you go behind a web view`,
              },
              {
                description: 'Increase UI development and verification convenience with Storybook, Mirage JS',
              },
              {
                description: 'Development Environment Improvement',
                subDescription: [
                  'Remove libraries that are no longer maintained, such as @babel/polyfill, awesome-ts-loader, tslint',
                  'babel-loader, core-js, eslint, prettier installation and application',
                ],
              },
            ],
            techStack: [
              'React',
              'React Query',
              'Typescript',
              'sass',
              'Jest',
              'React Testing Library',
              'Mirage JS',
              'Storybook',
              'webpack',
              'Github',
            ],
          },
          {
            title: 'Fund Investment',
            beginAt: '2020-08',
            endAt: '2020-10',
            description:
              'I have maintained a fund trading service.The service was accessible in the Kakao Pay service area within the Kakao Talk app, and in the Kakao Pay app.',
            role: [
              {
                description: 'Service enhancement',
              },
            ],
            works: [
              {
                description:
                  'Overall LCP improvement by approximately 30% by splitting js code that was only a single file',
              },
              {
                description: 'Development Environment Improvement',
                subDescription: [
                  'Remove libraries that are no longer maintained, such as @babel/polyfill, awesome-ts-loader, tslint',
                  'babel-loader, core-js, eslint, prettier installation and application',
                ],
              },
            ],
            techStack: ['React', 'Typescript', 'Mobx', 'sass', 'Jest', 'webpack', 'Github'],
          },
          {
            title: 'Investment Home',
            beginAt: '2020-12',
            endAt: '2021-01',
            description:
              'I have maintained a page where you can see Kakao Pay investment services and my investment status.\nIt was provided in the Kakao Pay service area within the Kakao Talk app, and as the main tab page of the Kakao Pay app.',
            role: [
              {
                description: 'Project Lead and Schedule Management',
              },
              {
                description: 'Service enhancement',
              },
            ],
            works: [
              {
                description: 'Application of Kakao Pay Integrated Web View SDK',
              },
              {
                description: 'Dark mode screen correspondence',
              },
              {
                description: 'Development Environment Improvement',
                subDescription: [
                  'Remove libraries that are no longer maintained, such as @babel/polyfill, awesome-ts-loader, tslint',
                  'babel-loader, core-js, eslint, prettier installation and application',
                ],
              },
            ],
            techStack: ['React', 'Typescript', 'sass', 'Jest', 'webpack', 'Github'],
          },
        ],
      },
    ],
  },
  {
    companyName: 'Weverse Company',
    beginAt: '2020-06',
    endAt: '2020-08',
    team: [
      {
        teamName: 'Web Front-end Team',
        position: 'Team Member',
        beginAt: '2020-06',
        endAt: '2020-08',
        projects: [
          {
            title: 'Weverse',
            beginAt: '2020-06',
            endAt: '2020-07',
            description: 'I have maintained the web version of Weverse.',
            role: [
              {
                description: 'Service enhancement and development of new features',
              },
            ],
            works: [
              {
                description: 'Development of membership benefits in the artist community area',
              },
            ],
            techStack: ['React', 'Typescript', 'Mobx', 'styled-components', 'i18n', 'webpack', 'Storybook', 'Github'],
          },
          {
            title: 'Tinytan merchandise promotion',
            beginAt: '2020-07',
            endAt: '2020-08',
            description:
              'It is a site that promotes products with a character called Tinytan that is based on BTS members.\nIt supported webView and mobile & desktop environments within the Weverse app using media queries.\nIt also supported global, US, and Japanese shop settings and subsequent multilingualism.',
            role: [
              {
                description: 'Build new promotions',
              },
            ],
            works: [
              {
                description:
                  'Build new development environments such as technology stack, convention definition, and deployment',
              },
              {
                description: 'Development of Tinytan Concept, Product Introduction Function',
              },
              {
                description:
                  'Development of Deep Link Module for Weverse Shop Products that Support Many Stores and Languages',
              },
            ],
            techStack: ['React', 'Typescript', 'Mobx', 'styled-components', 'i18n', 'webpack', 'Github'],
          },
          {
            title: 'Weverse Shop',
            beginAt: '2020-07',
            endAt: '2020-07',
            description: `I have maintained Weverse Shop's Admin.\nDue to lack of Beckend team resources, I supported tasks such as bug correction and performance improvement.`,
            role: [
              {
                description: 'Service enhancement',
              },
            ],
            works: [
              {
                description: 'Improved rendering performance of the destination area setting ground',
              },
            ],
            techStack: ['Angular', 'webpack'],
          },
        ],
      },
    ],
  },
  {
    companyName: 'Woowa Brothers Corp',
    beginAt: '2018-10',
    endAt: '2020-05',
    team: [
      {
        teamName: 'Baemin Restaurant Supply Development Team',
        position: 'Team Member',
        beginAt: '2018-10',
        endAt: '2020-05',
        projects: [
          {
            title: 'Baemin Restaurant Supply',
            beginAt: '2018-10',
            endAt: '2020-05',
            description:
              'Baemin Restaurant Supply is a service where the boss can purchase food materials and supplies.\nAfter joining the development team as an early member of the development team, we gradually internalized the service that had been maintained at a godo-mall.\nAfter internalization was completed, seller administration was established to transform the service management administration and sales brokerage business model to advance the service.\n In addition, we also established a design system for the Baemin Restaurant Supply so that components can be used in common.',
            role: [
              {
                description: 'Project/Tech Lead and Schedule Management',
              },
              {
                description: 'Service deployment and development of new capabilities',
              },
              {
                description: 'Service enhancement',
              },
            ],
            works: [
              {
                description:
                  'Build a new development environment including technology stack, convention definition, deployment, monitoring, etc',
              },
              {
                description: `Establishment of the Baemin Restaurant Supply service's own platform (100% godo-mall function)`,
                subDescription: [
                  'Main / search / product list and details / shopping basket / order / member / my association / sample, etc. Develop functions',
                  'Design applications to support mobile, desktop browsers',
                  'godo-mall maintenance until service internalization is completed',
                ],
              },
              {
                description:
                  'Development of Admin for Service enhancement and Seller Admin available to external vendors',
                subDescription: [
                  'Development of key functions such as vendor management / product management / price management / order management / delivery management',
                  'Design applications for two services from a single source',
                ],
              },
              {
                description: 'Establishment of Design System of Baemin Restaurant Supply',
                subDescription: [
                  'Development of major components such as Button/Input/Select/Modal/Pagination/Table',
                  'Establishing a strategy for versioning and deployment',
                ],
              },
            ],
            techStack: [
              'React',
              'Next.js',
              'Redux',
              'Redux Saga',
              'Typescript',
              'styled-components',
              'webpack',
              'Rollup',
              'Storybook',
              'Node.js',
              'Express',
              'Github',
              'AWS',
            ],
          },
        ],
      },
    ],
  },
  {
    companyName: 'AnotherRainbow',
    beginAt: '2012-01',
    endAt: '2018-04',
    team: [
      {
        teamName: 'Development Team',
        position: 'Senior Member',
        beginAt: '2012-01',
        endAt: '2018-04',
        projects: [
          {
            title: 'AmorePacific brand website',
            beginAt: '2012-01',
            endAt: '2018-03',
            description: `t is a service that introduces AmorePacific brands.\nIt was the most common task during the company's tenure, and appropriate technologies were used depending on the timing.\nThe main flow of usage technology and language for browsers is as follows, and additionally, necessary environments were constructed.\nActionScript 3.0  ->  jQuery  ->  AngularJS  ->  React\n\nLibraries such as ImageMagick and FFmpeg were used because they needed image and video processing at special promotion sites.`,
            role: [
              {
                description: 'Project Lead and Schedule Management',
              },
              {
                description: 'Project estimate calculation',
              },
              {
                description: 'Development of new features',
              },
            ],
            works: [
              {
                description:
                  'Development of Laneige promotion sites and spread to 9 countries (Korea, China, Taiwan, Hong Kong, Thailand, Vietnam, Singapore, Malaysia, Indonesia)',
              },
              { description: 'Development of Innisfree Promotion Site' },
              { description: 'Development of a Primera promotion site' },
              { description: 'Development of VB Program Promotion Site' },
              { description: 'Development of Hera Promotional Site' },
              { description: 'Development of Hanyul Promotion Site' },
              { description: 'Development of Sulwhasoo Promotion Site' },
              { description: 'Development of Lyricos microsites' },
              { description: 'Development of Verite microsite ' },
              { description: 'Development of VitalBeautie microsite' },
              { description: 'Development of VB Program Microsite' },
              { description: 'Development of IOPE Microsite' },
              { description: 'Development of Youth Revolution Microsite' },
            ],
            techStack: [
              'ActionScript 3.0',
              'PHP',
              'Javascript',
              'jQuery',
              'ImageMagick',
              'FFmpeg',
              'Node.js',
              'Express',
              'gulp',
              'Typescript',
              'AngularJS',
              'React',
              'Redux',
              'Redux Thunk',
              'sass',
              'webpack',
              'AWS',
              'Serverless',
              'Github',
            ],
          },
          {
            title: 'Haggis Nature Picnic Season5',
            beginAt: '2016-03',
            endAt: '2016-05',
            description:
              'We have developed an API used on the Haggis Nature Picnic promotion site.\nI received the image from the client, applied the filter effect to the image, created a gif with animation, and returned it.',
            role: [
              {
                description: 'Project Lead and Schedule Management',
              },
              {
                description: 'Project estimate calculation',
              },
              {
                description: 'API capability development',
              },
            ],
            works: [
              { description: 'Develop image filter module using ImageMagick' },
              { description: 'Develop gif generation module using FFmpeg' },
              { description: 'Configure APIs with AWS Lambda and API Gateway' },
            ],
            techStack: ['FFmpeg', 'ImageMagick', 'Node.js', 'AWS', 'Github'],
          },
          {
            title: 'Jeju Air My Heroine Social Movie',
            beginAt: '2014-01',
            endAt: '2014-03',
            description: `This service allows you to create your own SNS movie on Jeju Air's promotional site.\nBy uploading user images and images of Facebook friends, you were able to create your own SNS movie.`,
            role: [
              {
                description: 'Development of new features',
              },
            ],
            works: [
              { description: 'Development of Image Filter Module' },
              { description: 'Development of image chroma key module' },
            ],
            techStack: ['ActionScript 3.0'],
          },
          {
            title: 'Lotte Center Fun view walk app (Windows)',
            beginAt: '2014-06',
            endAt: '2014-09',
            description: `This service was displayed on the large screen of the Lotte Center Observatory in Hanoi, Vietnam.\nThe text entered by the user at the kiosk was displayed through various interactions, and various themes such as the panoramic view of world cities and the space background were displayed.`,
            role: [
              {
                description: 'Development of new features',
              },
            ],
            works: [
              { description: 'Development of Kaleidoscope Image Theme View' },
              { description: 'Developing a Text Particle Animation Theme View' },
            ],
            techStack: ['Cinder', 'C++', 'OpenGL', 'Github'],
          },
          {
            title: 'PlayAlarms App (iOS)',
            beginAt: '2013-04',
            endAt: '2013-07',
            description: `It is a service that has been led from idation to app launch.\nWhen you set an alarm for the morning wake-up, a push notification is sent to the user to perform a specific mission,\nWe developed it so that the push notification is automatically terminated when the mission is completed.\nIt achieved 20th place in the Apple Store Utility category in China without advertising, and carried out the development process from app production to distribution alone.`,
            role: [
              {
                description: 'Service planning and development',
              },
            ],
            works: [
              { description: 'iOS Application Architecture Design and UI Development' },
              { description: 'Development of Decibel Measurement Module' },
              { description: 'Development of shaking measurement module using acceleration sensor' },
            ],
            techStack: ['Objective-C', 'Github'],
          },
          {
            title: 'Innisfree iCF App (iOS/Android)',
            beginAt: '2012-07',
            endAt: '2012-10',
            description: `The Innisfree iCF app is a service that allows you to produce Innisfree's CF.\nUsers were able to create their own commercials with videos they filmed themselves, and they were able to share them on YouTube.`,
            role: [
              {
                description: 'Development of new features',
              },
            ],
            works: [
              { description: 'Development of a video gallery' },
              { description: 'Development of Youtube Data API Module' },
            ],
            techStack: ['ActionScript 3.0', 'Adobe AIR'],
          },
        ],
      },
    ],
  },
];
