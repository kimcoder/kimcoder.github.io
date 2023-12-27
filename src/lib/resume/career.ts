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
        projects: [
          {
            title: '우아한라이브러리 구축',
            beginAt: '2023-05',
            description:
              '우아한형제들의 전사 FE 라이브러리 제작을 위한 워킹 그룹에 참여하여 라이브러리를 구축하였습니다.\n워킹 그룹 리드 역할을 맡아 그룹 활동을 이끌고 전반적인 환경 구성 및 라이브러리 배포까지 담당하였습니다.',
            role: [
              {
                description: '개발 환경 구축',
                subDescription: ['기술 스택 정의', 'CI/CD 구성', '코드 컨벤션 정의', '브랜치 전략 정의'],
              },
              {
                description: '라이브러리 운영 가이드 수립 및 문서화',
              },
              {
                description: 'React Custom Hook 라이브러리 개발',
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
            title: '배민사장님 앱 웹뷰 라이브러리 구축',
            beginAt: '2023-02',
            description:
              '배민사장님앱 웹뷰 개발 및 운영에 필요한 다양한 기능들을 모듈화하여 라이브러리로 구성했습니다.\n주도적으로 아이디어를 내고, 필요한 모듈들과 앱을 모노레포로 구성하여 제공하였습니다.',
            role: [
              {
                description: '개발 환경 구축',
                subDescription: ['기술 스택 정의', 'CI/CD 구성', '코드 컨벤션 정의', '브랜치 전략 정의'],
              },
              {
                description: '배민사장님 앱 웹뷰 브릿지 SDK 개발',
                subDescription: [
                  'WebViewData, WebViewVersion, WebViewScheme, WebViewInterface 등 모듈 구성',
                  'SDK 문서화 및 정적 문서 개발 환경 구성',
                  '배민사장님 웹뷰, 주문접수 튜토리얼, 셀프서비스에 SDK 제공',
                ],
              },
              {
                description: '배민사장님 앱 웹뷰 슬랙 앱 개발',
              },
              {
                description: 'GitLab MR 스토리북 프리뷰어 개발',
              },
              {
                description: '배민사장님 앱 가변폰트 스토리북 애드온 개발',
              },
            ],
            techStack: [
              'React',
              'Typescript',
              'Turborepo',
              'Rspress',
              'tsup',
              'Slack Bolt',
              'Storybook',
              'Gitlab',
              'AWS',
            ],
          },
          {
            title: '배민사장님 앱 웹뷰 운영',
            beginAt: '2022-10',
            description:
              '배민사장님앱 웹뷰를 운영하고 있습니다.\n주문, 배달 관련된 지면, 가게를 관리하고 매출 데이터를 조회할 수 있는 셀프 지면 등을 웹뷰로 제공하고 있습니다.\n많은 레거시들과 기술부채들을 안정적으로 개선하였고, 개발 환경 또한 많이 개선하였습니다.\n또한, 팀내 주문접수파트의 리더 역할을 맡고 있습니다.',
            role: [
              {
                description: '각 페이지 유지보수 및 추가 기능 구현',
                subDescription: [
                  '배민스토어 주문 접수 처리 기능 구현',
                  '가변폰트(100%, 125%, 150%) 기능 구현',
                  '광장 페이지 개발',
                  '기타',
                ],
              },
              {
                description: '개발 환경 개선',
                subDescription: [
                  '새로운 기술 스택 도입',
                  '레거시 코드/기술 개선',
                  '사내 배포플랫폼 적용',
                  'CI/CD 개선',
                  '모니터링 대시보드 설정',
                  '센트리 대시보드 설정',
                  '스토리북, MSW 등을 활용한 로컬 작업 환경 개선',
                  'MR(Merge Request)에 스토리북을 통해 미리보기 기능 구현',
                ],
              },
              {
                description: '웹 성능 개선',
                subDescription: ['웹 바이탈 메트릭 개선'],
              },
              {
                description: '코드커버리지 개선',
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
            ],
          },
        ],
      },
      {
        teamName: '배민상회웹프론트개발팀',
        position: '팀원',
        beginAt: '2021-05',
        endAt: '2022-10',
        projects: [
          {
            title: '배민상회 쇼핑몰 운영',
            beginAt: '2021-05',
            endAt: '2022-09',
            description:
              '배민상회 쇼핑몰을 운영하였습니다.\n배민상회 전시팀 소속으로 전시 영역 도메인의 작업들을 진행했으며, 기능 조직으로 변경 후에는 전반적인 영역의 작업들을 진행하였습니다.',
            role: [
              {
                description: '각 페이지 유지보수 및 추가 기능 구현',
                subDescription: ['발주서 페이지 개발', '난수 쿠폰 기능 구현', '메인화면 AB테스트 탭 기능 구현', '기타'],
              },
              {
                description: '개발 환경 개선',
                subDescription: [
                  '새로운 기술 스택 도입',
                  '레거시 코드/기술 개선',
                  '도메인 기반 아키텍처로의 변경',
                  '사내 배포플랫폼 버전 마이그레이션',
                  'CI/CD 개선',
                  '모니터링 대시보드 설정',
                ],
              },
              {
                description: '웹 성능 개선',
                subDescription: ['이미지 지연 로드 처리', '웹 바이탈 메트릭 개선'],
              },
            ],
            techStack: [
              'React',
              'Typescript',
              'Redux Toolkit',
              'Redux Saga',
              'React Query',
              'Express',
              'styled-components',
              'Gitlab',
              'Storybook',
              'Jest',
              'React Testing Library',
              'MSW',
              'AWS',
            ],
          },
          {
            title: '배민상회 셀러어드민 구축 및 운영',
            beginAt: '2022-02',
            endAt: '2022-09',
            description:
              '배민상회가 판매중개로 비지니스 모델이 변경되면서 외부 셀러들을 위한 관리자 서비스를 구축하고 운영하였습니다.\n배민상회 전시팀 소속으로 전시 영역 도메인의 작업들을 진행하고 이끌었으며, 애플리케이션이 서비스되기 위한 여러가지 부분들을 주도하여 처리하였습니다.',
            role: [
              {
                description: '배민상회 전시팀 프론트 리소스 및 일정 관리',
              },
              {
                description: '공통 UI 컴포넌트 개발',
              },
              {
                description: '전시 페이지 개발',
                subDescription: ['상품 관리', '가격 관리', '카테고리 관리', '기타'],
              },
              {
                description: '개발 환경 구축',
                subDescription: ['기술 스택 선정', 'CI/CD 구성', '도메인 기반 아키텍처 정의', '모니터링 대시보드 설정'],
              },
            ],
            techStack: [
              'React',
              'Next.js',
              'Typescript',
              'React Query',
              'React Hook Form',
              'styled-components',
              'Node.js',
              'Github',
              'AWS',
            ],
          },
          {
            title: '배민상회 플랫폼어드민 운영',
            beginAt: '2021-05',
            endAt: '2022-09',
            description:
              '배민상회 쇼핑몰을 관리하기 위한 플랫폼 어드민을 운영하였습니다.\n또한, 배민상회 이커머스 플랫폼을 활용하여 배민문방구 쇼핑몰도 구축되어 서비스가 되었는데, 이를 서포트하기 위해 플랫폼 어드민 운영까지 진행하였습니다.',
            role: [
              {
                description: '쇼핑몰 타입 분기에 따른 배민상회, 배민문방구 전환 기능 구현',
              },
              {
                description: '각 페이지 유지보수',
                subDescription: ['상품 관리', '가격 관리', '카테고리 관리', '수수료 관리', '기타'],
              },
              {
                description: '개발 환경 개선',
                subDescription: ['새로운 기술 스택 도입', '레거시 코드/기술 개선', '도메인 기반 아키텍처로의 변경'],
              },
            ],
            techStack: [
              'React',
              'Next.js',
              'Typescript',
              'React Query',
              'React Hook Form',
              'styled-components',
              'Node.js',
              'Github',
              'AWS',
            ],
          },
          {
            title: '배민상회 디자인시스템 운영',
            beginAt: '2021-05',
            endAt: '2022-09',
            description:
              '배민상회 쇼핑몰, 플랫폼어드민, 셀러어드민에서 사용하는 디자인시스템을 운영하였습니다.\n비대해지는 패키지와 서비스별 컴포넌트 사용 방식이 달라짐에 따라 패키지를 분할하여 운영하였습니다.',
            role: [
              {
                description: '신규 컴포넌트 개발',
              },
              {
                description: '모노레포 전환',
                subDescription: ['쇼핑몰 패키지, 어드민 패키지 분할', 'CI/CD 구성'],
              },
            ],
            techStack: [
              'React',
              'Typescript',
              'styled-components',
              'React Hook Form',
              'Rollup',
              'Lerna',
              'Storybook',
              'Github',
              'AWS',
            ],
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
            title: '코스피 지수에 따른 인덱스/리버스 펀드 서비스 구축',
            beginAt: '2020-08',
            endAt: '2021-02',
            description:
              '게임성이 가미된 펀드 매매를 위한 신규 서비스를 구축하였습니다.\n사내 CBT까지 진행하였지만, 아쉽게도 컴플라이언스 이슈로 인해 서비스가 런칭되지는 못하였습니다.\n카카오페이에서 React Query를 처음으로 도입하였고, 그 후에 사용성 등을 전사에 전파하였습니다.',
            role: [
              {
                description: '개발 환경 구축',
                subDescription: ['기술 스택 정의', '코드 컨벤션 정의', '애플리케이션 아키텍처 정의'],
              },
              {
                description: '메인 페이지 일부 영역 개발',
                subDescription: ['지수영역', '지수 차트 영역'],
              },
              {
                description: '펀드 매수 기능 개발',
              },
              {
                description: '사용자 랭킹 페이지 개발',
              },
              {
                description: '최근 라운드 페이지 개발',
              },
            ],
            techStack: ['React', 'React Query', 'nivo', 'Typescript', 'sass', 'Jest', 'Storybook', 'webpack', 'Github'],
          },
          {
            title: 'P2P 서비스 운영',
            beginAt: '2020-11',
            endAt: '2021-02',
            description:
              '지금은 더 이상 서비스되지 않고 있는 부동산 P2P 투자 서비스를 운영하였습니다.\n레거시들을 개선하던 중 React Query를 도입하여 적극 사용하였습니다.\n이 서비스는 카카오톡 앱 내의 카카오페이 서비스 영역, 그리고 카카오페이 앱에서 접근할 수 있었습니다.',
            role: [
              {
                description: '레거시 개발 환경 개선',
                subDescription: [
                  '@babel/polyfill, awesome-ts-loader, tslint와 같은 더 이상 유지되지 않는 라이브러리 제거 및 전환',
                  'babel-loader, core-js, eslint, prettier 설치 및 적용',
                  'husky, lint-staged를 활용한 코드 포맷팅 및 컨벤션 준수',
                ],
              },
              {
                description: '투자내역 목록 개선',
                subDescription: ['React Query를 적용하여 기존 코드의 복잡도 감소 및 사용성 개선'],
              },
              {
                description: '카카오페이 통합웹뷰 SDK 적용',
              },
              {
                description: '제휴사용 카카오페이 통합웹뷰 SDK 구현 및 가이드',
              },
            ],
            techStack: ['React', 'React Query', 'Typescript', 'sass', 'Jest', 'Storybook', 'webpack', 'Github'],
          },
          {
            title: '펀드 서비스 운영',
            beginAt: '2020-08',
            endAt: '2020-10',
            description:
              '펀드 매매 서비스를 운영하였습니다.\n이 서비스는 카카오톡 앱 내의 카카오페이 서비스 영역, 그리고 카카오페이 앱에서 접근할 수 있었습니다.',
            role: [
              {
                description: '레거시 개발 환경 개선',
                subDescription: [
                  '@babel/polyfill, awesome-ts-loader, tslint와 같은 더 이상 유지되지 않는 라이브러리 제거 및 전환',
                  'babel-loader, core-js, eslint, prettier 설치 및 적용',
                  'husky, lint-staged를 활용한 코드 포맷팅 및 컨벤션 준수',
                ],
              },
              {
                description: '코드 분할 처리로 웹뷰 성능 개선',
              },
            ],
            techStack: ['React', 'Typescript', 'Mobx', 'sass', 'Jest', 'webpack', 'Github'],
          },
          {
            title: '투자홈 운영',
            beginAt: '2020-12',
            endAt: '2021-01',
            description:
              '카카오페이 투자 서비스들과 나의 투자 현황을 볼 수 있는 페이지를 운영하였습니다.\n이 페이지는 카카오톡 앱 내의 카카오페이 서비스 영역, 그리고 카카오페이 앱의 하단 탭의 페이지로 제공되었습니다.',
            role: [
              {
                description: '레거시 개발 환경 개선',
                subDescription: [
                  '@babel/polyfill, awesome-ts-loader, tslint와 같은 더 이상 유지되지 않는 라이브러리 제거 및 전환',
                  'babel-loader, core-js, eslint, prettier 설치 및 적용',
                  'husky, lint-staged를 활용한 코드 포맷팅 및 컨벤션 준수',
                ],
              },
              {
                description: '카카오페이 통합웹뷰 SDK 적용',
              },
              {
                description: '다크모드 화면 대응',
              },
            ],
            techStack: ['React', 'Typescript', 'sass', 'Jest', 'webpack', 'Github'],
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
            beginAt: '2020-06',
            endAt: '2020-07',
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
            beginAt: '2020-07',
            endAt: '2020-08',
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
            beginAt: '2020-07',
            endAt: '2020-07',
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
            beginAt: '2020-02',
            endAt: '2020-05',
            description:
              '판매중개를 위한 플랫폼 사이트를 구축하였습니다.\n애플리케이션은 외부 셀러들과 내부 관리자를 위한 2가지 유형의 사용자로 분기되어 구동시킬 수 있었습니다.',
            role: [
              {
                description: '개발 환경 구축',
                subDescription: ['기술 스택 정의', '코드 컨벤션 정의', '애플리케이션 아키텍처 정의'],
              },
              {
                description: '애플리케이션 기본 동작을 위한 모듈 개발',
                subDescription: ['사용자 권한에 따른 메뉴 구현', 'API 프록시 구현', 'isomorphic 유틸 작성'],
              },
              {
                description: '기능별 다수 페이지 개발',
                subDescription: [
                  '로그인',
                  '판매사 운영 관리',
                  '전시상품 관리',
                  '주문 관리',
                  '배송 관리',
                  '정산 관리',
                  '기타',
                ],
              },
            ],
            techStack: ['React', 'Next.js', 'Typescript', 'styled-components', 'Node.js', 'Github', 'AWS'],
          },
          {
            title: '배민상회 디자인시스템 구축',
            beginAt: '2019-12',
            endAt: '2020-01',
            description:
              '배민상회 쇼핑몰 구축 후, 판매중개를 준비하는 상황을 맞이하여 배민상회 프론트 전역에서 사용할 수 있는 디자인시스템을 구축하였습니다.\n디자이너와 협업하여 가이드를 만들고 다양한 컴포넌트들을 제작하였습니다.\n프리랜서 개발자들과 협업하여 구축을 하였는데, 개발에 대한 전반적인 가이드도 제공하였습니다.',
            role: [
              {
                description: '개발 환경 구축',
                subDescription: ['기술 스택 정의', '코드 컨벤션 정의', '브랜치 전략 정의'],
              },
              {
                description: 'Github Action을 활용한 CI/CD 구축',
                subDescription: [
                  '버저닝된 패키지를 사내 Nexus에 배포되도록 처리',
                  '스토리북 빌드 결과물을 S3에 업로드 처리',
                ],
              },
              {
                description: '컴포넌트 개발',
                subDescription: ['Button', 'Input', 'Textarea', 'Select', 'Modal', 'Table', 'Etc'],
              },
            ],
            techStack: ['React', 'Typescript', 'styled-components', 'Rollup', 'Storybook', 'Github', 'AWS'],
          },
          {
            title: '배민상회 쇼핑몰 구축',
            beginAt: '2018-10',
            endAt: '2019-12',
            description:
              '배민상회 개발팀이 세팅될 때부터 합류하여, 배민상회 쇼핑몰 구축 과정 모든 부분을 참여하였습니다.\n기존에 고도몰을 통해 운영되고 있었던 배민상회 서비스를 점진적으로 내재화시켰고, 고도화를 위한 발판을 마련하였습니다.\nUI/UX 구현뿐만 아니라, 웹 애플리케이션 서버도 구현하여 배민상회 쇼핑몰 프론트의 전반을 담당하였습니다.',
            role: [
              {
                description: '개발 환경 구축',
                subDescription: [
                  '기술 스택 정의',
                  '코드 컨벤션 정의',
                  '브랜치 전략 정의',
                  '애플리케이션 아키텍처 정의',
                ],
              },
              {
                description: '디자인 가이드에 따른 코어 컴포넌트 개발',
              },
              {
                description: '기능별 페이지 전환 프로젝트 진행',
                subDescription: ['메인', '검색', '상품 목록/상세', '장바구니', '주문서', 'My상회', '샘플', '기타'],
              },
            ],
            techStack: [
              'React',
              'Redux',
              'Redux Saga',
              'Typescript',
              'styled-components',
              'webpack',
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
            beginAt: '2013-04',
            endAt: '2013-07',
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
            beginAt: '2012-01',
            endAt: '2018-03',
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
            beginAt: '2012-07',
            endAt: '2012-10',
            description:
              'Adobe AIR를 활용하여 이니스프리의 cf 영상을 제작해 주는 애플리케이션의 일부 화면을 개발하였습니다.\n사용자들이 제작한 cf 영상들을 볼 수 있는 갤러리 화면을 개발하고, Youtube의 Data API를 연동하여 영상을 게시할 수 있도록 하였습니다.',
            role: [{ description: '영상 갤러리 탭 개발' }, { description: 'Youtube Data API 연동 모듈 개발' }],
            techStack: ['ActionScript 3.0', 'Adobe AIR'],
          },
          {
            title: '제주항공 My Heroine 소셜무비 웹사이트',
            beginAt: '2014-01',
            endAt: '2014-03',
            description:
              '제주항공의 프로모션 캠페인 사이트의 플레이되는 비디오와 이미지 합성 처리를 개발하였습니다.\n영상 화면 중 일부 영역에 크로마키를 처리할 수 있는 모듈을 개발하고, 사용자로부터 입력받은 이미지를 가공해 주는 필터를 만들어 합성 처리를 하였습니다.',
            role: [{ description: '사용자 업로드 사진 필터 개발' }, { description: '크로마키 영상 모듈 개발' }],
            techStack: ['ActionScript 3.0'],
          },
          {
            title: '베트남 하노이 롯데센터 `Fun view walk`',
            beginAt: '2014-06',
            endAt: '2014-09',
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
            beginAt: '2016-03',
            endAt: '2016-05',
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
