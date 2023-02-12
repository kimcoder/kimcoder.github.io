type Career = {
  companyName: string;
  beginAt: string;
  endAt?: string;
  team: Team[];
};

type Team = {
  teamName: string;
  position: string;
  beginAt: string;
  endAt?: string;
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
    | 'esbuild'
    | 'sass'
    | 'jQuery'
    | 'ImageMagick'
    | 'FFmpeg'
    | 'AngularJS'
    | 'gulp'
    | 'Cinder'
    | 'Serverless'
  )[];
  projects: Project[];
};

type Project = {
  title: string;
  beginAt: string;
  endAt?: string;
  description: Description[];
};

type Description = {
  description: string;
  subDescription?: string[];
};

export const CAREER: Career[] = [
  {
    companyName: '우아한형제들',
    beginAt: '2021-05',
    team: [
      {
        teamName: '셀러웹프론트개발팀',
        position: '팀원',
        beginAt: '2022-10',
        techStack: [
          'React',
          'Typescript',
          'Redux',
          'Redux Saga',
          'React Query',
          'Express',
          'styled-components',
          'Gitlab',
          'Storybook',
          'Jest',
          'React Testing Library',
          'MSW',
          'webpack',
          'AWS',
        ],
        projects: [{ title: '배민사장님 앱 웹뷰 운영', beginAt: '2022-10', description: [] }],
      },
      {
        teamName: '배민상회웹프론트개발팀',
        position: '팀원',
        beginAt: '2021-05',
        endAt: '2022-10',
        techStack: [
          'React',
          'Typescript',
          'Redux Toolkit',
          'Redux Saga',
          'React Query',
          'React Hook Form',
          'Next.js',
          'Express',
          'styled-components',
          'Gitlab',
          'Storybook',
          'Jest',
          'React Testing Library',
          'MSW',
          'Lerna',
          'webpack',
          'esbuild',
          'AWS',
        ],
        projects: [
          {
            title: '배민상회 쇼핑몰 운영',
            beginAt: '2021.05',
            endAt: '2022.09',
            description: [],
          },
          {
            title: '배민상회 셀러어드민 구축 및 운영',
            beginAt: '2022.02',
            endAt: '2022.09',
            description: [],
          },
          {
            title: '배민상회 플랫폼어드민 운영',
            beginAt: '2021.05',
            endAt: '2022.09',
            description: [],
          },
          {
            title: '배민상회 디자인시스템 운영',
            beginAt: '2021.05',
            endAt: '2022.09',
            description: [],
          },
        ],
      },
    ],
  },
  {
    companyName: '카카오페이',
    beginAt: '2020-08',
    endAt: '2021-05',
    team: [
      {
        teamName: '금융사업클랜 투자파티',
        position: '팀원',
        beginAt: '2020-08',
        endAt: '2021-05',
        techStack: [],
        projects: [],
      },
    ],
  },
  {
    companyName: '위버스컴퍼니',
    beginAt: '2020-06',
    endAt: '2020-08',
    team: [
      {
        teamName: '웹개발팀',
        position: '팀원',
        beginAt: '2020-06',
        endAt: '2020-08',
        techStack: [],
        projects: [
          {
            title: '위버스샵 어드민 사이트 운영',
            beginAt: '2020.07',
            endAt: '2020.07',
            description: [],
          },
        ],
      },
    ],
  },
  {
    companyName: '우아한형제들',
    beginAt: '2018-10',
    endAt: '2020-05',
    team: [
      {
        teamName: '배민상회개발팀',
        position: '팀원',
        beginAt: '2018-10',
        endAt: '2020-05',
        techStack: ['React', 'Next.js', 'Typescript', 'styled-components', 'webpack', 'Node.js', 'Github', 'AWS'],
        projects: [],
      },
    ],
  },
  {
    companyName: '어나더레인보우',
    beginAt: '2012-01',
    endAt: '2018-04',
    team: [
      {
        teamName: '개발팀',
        position: '책임연구원',
        beginAt: '2012-01',
        endAt: '2018-04',
        techStack: [
          'ActionScript 3.0',
          'Adobe AIR',
          'Objective-C',
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
          'Cinder',
          'AWS',
          'Serverless',
          'Github',
        ],
        projects: [
          {
            title: 'PlayAlarms iOS Ap',
            beginAt: '2013.04',
            endAt: '2013.07',
            description: [
              { description: 'iOS 애플리케이션 아키텍처 설계 및 UI 개발' },
              { description: '데시벨 측정 모듈 개발' },
              { description: '가속도센서를 활용한 흔들기 측정 모듈 개발' },
            ],
          },
          {
            title: '아모레퍼시픽 화장품 브랜드 웹사이트 개발',
            beginAt: '2012.01',
            endAt: '2018.03',
            description: [
              {
                description:
                  '라네즈 프로모션 웹사이트 개발 및 9개국 확산(한국, 중국, 대만, 홍콩, 태국, 베트남, 싱가폴, 말레이시아, 인도네시아)',
              },
              { description: '이니스프리 프로모션 웹사이트 개발 및 운영' },
              { description: '프리메라 프로모션 웹사이트 개발 및 운영' },
              { description: 'VB프로그램 프로모션 웹사이트 개발 및 운영' },
              { description: '헤라 프로모션 웹사이트 개발 및 운영' },
              { description: '한율 프로모션 웹사이트 개발 및 운영' },
              { description: '설화수 프로모션 웹사이트 개발 및 운영' },
              { description: '리리코스 마이크로사이트 개발 및 운영' },
              { description: 'Verite 마이크로사이트 개발 및 운영' },
              { description: 'VitalBeautie 마이크로사이트 개발 및 운영' },
              { description: 'VB프로그램 마이크로사이트 개발 및 운영' },
              { description: '아이오페 마이크로사이트 개발 및 운영' },
              { description: '유스레볼루션 마이크로사이트 개발 및 운영' },
            ],
          },
          {
            title: '이니스프리 iCF App (iOS/Android) 개발',
            beginAt: '2012.07',
            endAt: '2012.10',
            description: [{ description: '영상 갤러리 탭 개발' }, { description: 'Youtube Data API 연동 모듈 개발' }],
          },
          {
            title: '제주항공 My Heroine 소셜무비 웹사이트 개발',
            beginAt: '2014.01',
            endAt: '2014.03',
            description: [{ description: '사용자 업로드 사진 필터 개발' }, { description: '크로마키 영상 모듈 개발' }],
          },
          {
            title: '베트남 하노이 롯데센터 `Fun view walk`',
            beginAt: '2014.06',
            endAt: '2014.09',
            description: [
              { description: '만화경 테마뷰 개발' },
              { description: '사용자로부터 입력 받은 텍스트 파티클 테마뷰 개발' },
            ],
          },
          {
            title: '하기스 네이처피크닉 시즌5 이미지처리 API 개발',
            beginAt: '2016.03',
            endAt: '2016.05',
            description: [
              { description: '사용자 사진 필터 개발' },
              { description: 'Gif 모션 개발' },
              { description: '이미지 생성을 위한 RestAPI 개발' },
            ],
          },
        ],
      },
    ],
  },
];
