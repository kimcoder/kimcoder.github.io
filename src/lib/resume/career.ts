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
  projects: Project[];
};

type Project = {
  title: string;
  beginAt: string;
  endAt?: string;
  description: string;
  role: Role[];
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
    | 'Angular'
    | 'AngularJS'
    | 'gulp'
    | 'Cinder'
    | 'Serverless'
    | 'OpenGL'
    | 'i18n'
  )[];
};

type Role = {
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
        // techStack: [
        //   'React',
        //   'Typescript',
        //   'Redux',
        //   'Redux Saga',
        //   'React Query',
        //   'Express',
        //   'styled-components',
        //   'Gitlab',
        //   'Storybook',
        //   'Jest',
        //   'React Testing Library',
        //   'MSW',
        //   'webpack',
        //   'AWS',
        // ],
        projects: [
          {
            title: '배민사장님 앱 웹뷰 운영',
            beginAt: '2022-10',
            description: '',
            role: [],
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
          },
        ],
      },
      {
        teamName: '배민상회웹프론트개발팀',
        position: '팀원',
        beginAt: '2021-05',
        endAt: '2022-10',
        // techStack: [
        //   'React',
        //   'Typescript',
        //   'Redux Toolkit',
        //   'Redux Saga',
        //   'React Query',
        //   'React Hook Form',
        //   'Next.js',
        //   'Express',
        //   'styled-components',
        //   'Gitlab',
        //   'Storybook',
        //   'Jest',
        //   'React Testing Library',
        //   'MSW',
        //   'Lerna',
        //   'webpack',
        //   'esbuild',
        //   'AWS',
        // ],
        projects: [
          {
            title: '배민상회 쇼핑몰 운영',
            beginAt: '2021.05',
            endAt: '2022.09',
            description: '',
            role: [],
            techStack: [],
          },
          {
            title: '배민상회 셀러어드민 구축 및 운영',
            beginAt: '2022.02',
            endAt: '2022.09',
            description: '',
            role: [],
            techStack: [],
          },
          {
            title: '배민상회 플랫폼어드민 운영',
            beginAt: '2021.05',
            endAt: '2022.09',
            description: '',
            role: [],
            techStack: [],
          },
          {
            title: '배민상회 디자인시스템 운영',
            beginAt: '2021.05',
            endAt: '2022.09',
            description: '',
            role: [],
            techStack: [],
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
        projects: [
          {
            title: '코스피 지수에 따른 인덱스,리버스 펀드 서비스 구축',
            beginAt: '2020.08',
            endAt: '2021.02',
            description: '',
            role: [
              {
                description: '',
              },
            ],
            techStack: [],
          },
          {
            title: 'P2P 서비스 운영',
            beginAt: '2020.11',
            endAt: '2021.02',
            description: '',
            role: [
              {
                description: '',
              },
            ],
            techStack: [],
          },
          {
            title: '펀드 서비스 운영',
            beginAt: '2020.08',
            endAt: '2020.10',
            description: '',
            role: [
              {
                description: '',
              },
            ],
            techStack: [],
          },
          {
            title: '투자홈 운영',
            beginAt: '2020.12',
            endAt: '2021.01',
            description: '',
            role: [
              {
                description: '',
              },
            ],
            techStack: [],
          },
        ],
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
        projects: [
          {
            title: '위버스 웹 운영/개선',
            beginAt: '2020.06',
            endAt: '2020.07',
            description: '위버스 웹 사이트의 운영개선 작업을 진행하였습니다.\n총 3개의 다국어를 지원하였습니다.',
            role: [
              {
                description: '아티스트의 커뮤니티 영역의 멤버십 혜택 페이지 개선 작업 개발',
              },
            ],
            techStack: ['React', 'Typescript', 'Mobx', 'styled-components', 'i18n', 'webpack', 'Storybook', 'Github'],
          },
          {
            title: '타이니탄 상품 프로모션 사이트 구축',
            beginAt: '2020.07',
            endAt: '2020.08',
            description:
              '방탄소년단 멤버들을 모티브 한 타이니탄이라는 캐릭터의 상품을 프로모션하는 사이트를 개발하였습니다.\n저를 포함한 총 2명의 엔지니어가 개발을 진행하였고, 미디어 쿼리를 이용하여 위버스 앱 내 웹뷰 그리고 모바일 & 데스크톱 환경을 지원하였습니다.\n글로벌, 미국, 일본 Shop 설정을 지원하였고 다국어도 지원하였습니다.',
            role: [
              {
                description: '개발 환경 구성',
              },
              {
                description: '타이니탄 컨셉 , 상품 소개 페이지 개발',
              },
              {
                description: '다양한 가게, 언어에서의 상품 처리를 위한 모듈 개발',
              },
            ],
            techStack: ['React', 'Typescript', 'Mobx', 'styled-components', 'i18n', 'webpack', 'Github'],
          },
          {
            title: '위버스샵 어드민 운영',
            beginAt: '2020.07',
            endAt: '2020.07',
            description:
              '위버스샵을 위한 어드민을 잠시 운영하였습니다.\n벡엔드 팀에서 운영하고 있던 애플리케이션이었지만, 부족했던 벡엔드 리소스 상황을 고려해 필요한 기능을 개발하였습니다.',
            role: [
              {
                description: '배송지 권역 설정 페이지 렌더링 성능 개선',
              },
              {
                description: '처리되지 못하고 있는 버그들 수정',
              },
            ],
            techStack: ['Angular', 'webpack'],
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
        projects: [
          {
            title: '배민상회 판매중개플랫폼 구축',
            beginAt: '2020.02',
            endAt: '2020.05',
            description: '',
            role: [
              {
                description: '',
              },
            ],
            techStack: [],
          },
          {
            title: '배민상회 디자인시스템 구축',
            beginAt: '2019.12',
            endAt: '2020.01',
            description: '',
            role: [
              {
                description: '',
              },
            ],
            techStack: [],
          },
          {
            title: '배민상회 구축',
            beginAt: '2018.10',
            endAt: '2019.12',
            description: '',
            role: [
              {
                description: '',
              },
            ],
            techStack: [],
          },
        ],
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
        projects: [
          {
            title: 'PlayAlarms iOS App',
            beginAt: '2013.04',
            endAt: '2013.07',
            description:
              '사내 디자이너와 협의하여 주도적으로 제작한 iOS 유틸리티 앱입니다.\n아침 기상을 위해 알림을 설정하면, 로컬 알림을 받게 하고 사용자가 특정 미션을 수행해야 알림이 종료되도록 하는 아이디어를 구현했습니다.\n광고 없이 중국 지역 애플스토어 유틸리티 카테고리에서 20위를 달성하였고, 앱 제작부터 배포까지의 개발 과정을 모두 혼자 진행하였습니다.',
            role: [
              { description: 'iOS 애플리케이션 아키텍처 설계 및 UI 개발' },
              { description: '데시벨 측정 모듈 개발' },
              { description: '가속도센서를 활용한 흔들기 측정 모듈 개발' },
            ],
            techStack: ['Objective-C', 'Github'],
          },
          {
            title: '아모레퍼시픽 화장품 브랜드 웹사이트',
            beginAt: '2012.01',
            endAt: '2018.03',
            description:
              '다양한 성격의 아모레퍼시픽 화장품 브랜드 사이트들을 개발하였습니다.\n회사 재직기간 동안 가장 많이 진행하였던 업무들이었고, 시기에 따라 적절한 기술들을 사용하였습니다.\n브라우저를 위한 사용 기술 및 언어에 대한 주요 흐름은 아래와 같고, 부가적으로 필요한 환경들을 구성했었습니다.\nActionScript 3.0  ->  jQuery  ->  AngularJS  ->  React\n\nImageMagick, FFmpeg와 같은 라이브러리들은 특수한 프로모션 사이트들에서 이미지와 영상 처리가 필요하여 사용하였습니다.',
            role: [
              {
                description:
                  '라네즈 프로모션 웹사이트 개발 및 9개국 확산(한국, 중국, 대만, 홍콩, 태국, 베트남, 싱가폴, 말레이시아, 인도네시아)',
              },
              { description: '이니스프리 프로모션 웹사이트 개발' },
              { description: '프리메라 프로모션 웹사이트 개발' },
              { description: 'VB프로그램 프로모션 웹사이트 개발' },
              { description: '헤라 프로모션 웹사이트 개발' },
              { description: '한율 프로모션 웹사이트 개발' },
              { description: '설화수 프로모션 웹사이트 개발' },
              { description: '리리코스 마이크로사이트 개발' },
              { description: 'Verite 마이크로사이트 개발' },
              { description: 'VitalBeautie 마이크로사이트 개발' },
              { description: 'VB프로그램 마이크로사이트 개발' },
              { description: '아이오페 마이크로사이트 개발' },
              { description: '유스레볼루션 마이크로사이트 개발' },
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
            title: '이니스프리 iCF App (iOS/Android)',
            beginAt: '2012.07',
            endAt: '2012.10',
            description:
              'Adobe AIR를 활용하여 이니스프리의 cf 영상을 제작해 주는 애플리케이션의 일부 화면을 개발하였습니다.\n사용자들이 제작한 cf 영상들을 볼 수 있는 갤러리 화면을 개발하고, Youtube의 Data API를 연동하여 영상을 게시할 수 있도록 하였습니다.',
            role: [{ description: '영상 갤러리 탭 개발' }, { description: 'Youtube Data API 연동 모듈 개발' }],
            techStack: ['ActionScript 3.0', 'Adobe AIR'],
          },
          {
            title: '제주항공 My Heroine 소셜무비 웹사이트',
            beginAt: '2014.01',
            endAt: '2014.03',
            description:
              '제주항공의 프로모션 캠페인 사이트의 플레이되는 비디오와 이미지 합성 처리를 개발하였습니다.\n영상 화면 중 일부 영역에 크로마키를 처리할 수 있는 모듈을 개발하고, 사용자로부터 입력받은 이미지를 가공해 주는 필터를 만들어 합성 처리를 하였습니다.',
            role: [{ description: '사용자 업로드 사진 필터 개발' }, { description: '크로마키 영상 모듈 개발' }],
            techStack: ['ActionScript 3.0'],
          },
          {
            title: '베트남 하노이 롯데센터 `Fun view walk`',
            beginAt: '2014.06',
            endAt: '2014.09',
            description:
              '롯데센터 전망대에 대형 스크린에서 디스플레이되는 애플리케이션의 일부 화면을 개발했습니다.\nC++로 디자인된 Cinder라는 라이브러리를 활용하였고, 로컬 개발 시에는 실제 스크린보다 10배 작은 해상도의 환경에서 작업했습니다.',
            role: [
              { description: '만화경 테마뷰 개발' },
              { description: '사용자로부터 입력 받은 텍스트 파티클 애니메이션 테마뷰 개발' },
            ],
            techStack: ['Cinder', 'OpenGL', 'Github'],
          },
          {
            title: '하기스 네이처피크닉 시즌5 이미지 프로세싱',
            beginAt: '2016.03',
            endAt: '2016.05',
            description:
              '하기스 네이처피크닉 웹 페이지에서 사용되는 API를 개발하였습니다.\n클라이언트로부터 이미지를 전달받아, 이미지 위에 효과를 입히고 애니메이션이 들어간 gif를 생성하고 반환해 주었습니다.',
            role: [
              { description: '사용자 사진 필터 개발' },
              { description: 'Gif 모션 개발' },
              { description: '이미지 생성을 위한 RestAPI 개발' },
            ],
            techStack: ['FFmpeg', 'ImageMagick', 'Node.js', 'AWS', 'Github'],
          },
        ],
      },
    ],
  },
];
