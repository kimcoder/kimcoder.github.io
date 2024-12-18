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
    | 'Tailwind CSS'
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
    | 'TanStack Query'
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
    | 'Datadog'
    | 'Module Federation'
  )[];
};

type Works = {
  description: string;
  subDescription?: string[];
};

export const CAREER: Career[] = [
  {
    companyName: '한국신용데이터',
    beginAt: '2024-05',
    team: [
      {
        teamName: '구독팀',
        position: '팀원',
        beginAt: '2024-05',
        projects: [
          {
            title: '캐시노트 플러스 멤버십',
            beginAt: '2023-05',
            description:
              '캐시노트 플러스 멤버십은 장부, 마켓, 금융, 광고 등 캐시노트의 주요 기능을 선별하여 멤버십 전용 혜택으로 제공하는 서비스입니다.\n캐시노트 앱의 웹뷰를 통해 제공되며 회사 매출의 핵심 역할을 담당하고 있는 서비스입니다.',
            role: [
              {
                description: '테크 리드 및 일정 관리',
              },
              {
                description: '서비스 고도화 및 신규 기능 개발',
              },
            ],
            works: [
              {
                description: '기존 가격보다 2배 비싼 신규 멤버십 플랜 출시 및 가입 유도 작업을 통한 매출 목표 90% 달성',
              },
              {
                description: '서비스 제휴 및 프로모션 기반의 다양한 멤버십 가입 페이지 제작으로 가입자 목표 99% 달성',
                subDescription: [
                  '반복 작업 해소를 위해 모듈화 시스템 작업을 제안 후 시스템 설계, 구현을 통해 생산성 향상',
                ],
              },
              {
                description: '멤버십 플랜별 기능 소구를 할 수 있는 라운지 페이지 개발로 전용 혜택 및 제휴 서비스 강화',
              },
              {
                description:
                  '모듈 페더레이션을 활용하여 사내 어드민에 멤버십 도메인 통합으로 인증과 리소스 권한 관리 효율화',
              },
              {
                description: '웹 성능 개선',
                subDescription: [
                  'RSC 사용, BTF 영역의 리소스 레이지 로딩 작업을 통해 내매장 페이지의 LCP 약 65% 개선 ( 2.x초 → 0.7초 )',
                ],
              },
              {
                description: '개발 환경 개선',
                subDescription: [
                  '데이터독을 활용하여 RUM, APM, E2E 테스트 환경 구축',
                  '사내 로그 시스템 연동을 위한 커스텀 Next.js 로그 모듈 작성으로 모니터링 환경 개선',
                ],
              },
            ],
            techStack: [
              'React',
              'Typescript',
              'Next.js',
              'React Hook Form',
              'TanStack Query',
              'Tailwind CSS',
              'Github',
              'Storybook',
              'Jest',
              'React Testing Library',
              'MSW',
              'Vite',
              'Module Federation',
              'AWS',
              'Datadog',
            ],
          },
        ],
      },
    ],
  },
  {
    companyName: '우아한형제들',
    beginAt: '2021-05',
    endAt: '2024-05',
    team: [
      {
        teamName: '셀러웹프론트개발팀',
        position: '팀원',
        beginAt: '2022-10',
        endAt: '2024-05',
        projects: [
          {
            title: '우아한라이브러리',
            beginAt: '2023-05',
            endAt: '2024-05',
            description:
              '우아한형제들의 전사 프론트엔드 라이브러리 제작을 위한 TF로 라이브러리의 생태계를 구축하였습니다.\nTF는 각 프론트엔드 팀의 시니어 엔지니어들로 구성되었습니다.',
            role: [
              {
                description: '프로젝트 리드 및 일정 관리 ',
              },
              {
                description: '신규 라이브러리 구축',
              },
            ],
            works: [
              {
                description: '워크플로우 구축 및 라이브러리 운영 정책 수립',
              },
              {
                description: 'React Custom Hook 라이브러리 개발',
                subDescription: ['코드커버리지 100% 달성'],
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
            title: '배민사장님 앱',
            beginAt: '2022-10',
            endAt: '2024-05',
            description:
              '배민사장님 앱은 사장님이 앱을 통해 주문 처리, 배달 설정, 가게 운영에 관련된 설정들을 할 수 있는 서비스입니다.\n주요 기능들을 웹뷰로 제공하는 서비스이며, 앱의 주문접수 웹뷰 개발 파트 리더로 프로젝트를 진행하였습니다.',
            role: [
              {
                description: '프로젝트/테크 리드 및 일정 관리',
              },
              {
                description: '서비스 고도화 및 신규 기능 개발',
              },
            ],
            works: [
              {
                description: '배달의민족 커머스 주문접수 기능 개발',
              },
              {
                description: '배민사장님 앱 가변 폰트 기능 개발',
              },
              {
                description: '배민사장님 앱 웹뷰 브릿지 SDK 구축 및 가이드 문서 제공',
              },
              {
                description: 'Storybook, MSW을 활용하여 UI 개발 및 검증 편리성 증대',
                subDescription: [
                  'Merge Request에 프리뷰 기능을 제공하여 시각적 리뷰 환경 도입',
                  '개발 환경에서 가변폰트 Addon을 제공하여 앱으로부터 받아오는 폰트 크기 값을 모의할 수 있도록 제공',
                ],
              },
              {
                description: '개발 환경 개선',
                subDescription: [
                  '애플리케이션 번들러 전환 ( 로컬 구동 속도 42배 ↑, CI 빌드 속도 1.3배 ↑)',
                  '센트리, 그라파나 대시보드 구성으로 인한 모니터링/메트릭 측정 환경 구축',
                  '불필요하게 사용되고 있던 Redux 관련 코드를 React Query로 전환하여 코드 복잡도 및 사용성 개선',
                ],
              },
              {
                description: '웹 성능 개선',
                subDescription: [
                  '코드 스플리팅, 트리쉐이킹 등으로 Overall LCP 약 40% 이상 개선 ( 2.x초 → 0.8 ~ 1.2초 )',
                  '웹서버 정적 리소스 서빙 방식 변경으로 웹서버 부하 개선 ( 약 90% ↓ )',
                ],
              },
              {
                description: '코드커버리지 개선 ( 20% → 60% )',
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
        teamName: '배민상회웹프론트개발팀',
        position: '팀원',
        beginAt: '2021-05',
        endAt: '2022-10',
        projects: [
          {
            title: '배민상회',
            beginAt: '2021-05',
            endAt: '2022-09',
            description:
              '배민상회는 사장님께서 식자재 및 비품을 구매할 수 있는 서비스입니다.\nB2B 이커머스 프론트, 기능 관리할 수 있는 어드민, 외부 판매자가 입점하여 사용할 수 있는 셀러 어드민을 운영하였습니다.',
            role: [
              {
                description: '프로젝트/테크 리드 및 일정 관리',
              },
              {
                description: '서비스 고도화 및 신규 기능 개발',
              },
            ],
            works: [
              {
                description: '판매중개 비지니스 모델 전환',
                subDescription: [
                  '외부 판매사들이 사용할 수 있는 셀러 어드민 서비스 구축',
                  '상품 관리 / 가격 관리 / 카테고리 관리 기능 개발',
                  '엑셀을 통한 대량 상품 이미지 등록 프로세스 개선 ( API 처리 시간 약 80% ↓ )',
                ],
              },
              {
                description: '배민상회 모바일 메인화면 탭 기능 개발',
              },
              {
                description: '배민상회 사용자 맞춤 발주서 기능 개발',
              },
              {
                description: '배민상회 어드민 서비스 확장',
                subDescription: [
                  '사내의 유사 서비스를 하나의 플랫폼에서 관리할 수 있도록 확장하여 배민문방구 쇼핑몰을 배민상회 어드민에서 관리할 수 있도록 구현',
                ],
              },
              {
                description: '디자인시스템 운영',
                subDescription: [
                  '모노레포화를 통하여 쇼핑몰과 어드민 컴포넌트들의 패키지 분리',
                  '패키지별 버저닝 및 배포 전략 수립',
                ],
              },
              {
                description: '개발 환경 개선',
                subDescription: [
                  'env-launcher라는 라이브러리 제작을 통해 10개 이상인 개발존 환경의 개발/배포 환경 개선',
                  'Redux 관련 레거시 코드를 Redux Toolkit과 React Query로 전환하여 코드 복잡도 개선',
                  '손쉽게 사용할 수 있는 Infinite Scroll 컴포넌트 개발을 통한 여러 지면의 코드 패턴 정리 및 복잡도 개선',
                ],
              },
              {
                description: '웹 성능 개선',
                subDescription: [
                  '이미지 레이지 로드 기능 추가로 쇼핑몰 메인 페이지에서만 200여개 이상의 불필요 요청 수 감소',
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
            title: '코스피 지수에 따른 인덱스/리버스 펀드 투자',
            beginAt: '2020-08',
            endAt: '2021-02',
            description:
              '일반적인 펀드 서비스와 다르게 오락이 가미된 신규 펀드 매매 서비스를 구축하였습니다.\n사내 CBT까지 진행하였지만, 아쉽게도 컴플라이언스 이슈로 인해 서비스가 런칭되지는 못하였습니다.\n카카오페이에서 최초로 React Query를 도입하여 개발하였고, 그 후에 사용성 등을 전사에 전파하였습니다.',
            role: [
              {
                description: '프로젝트/테크 리드 및 일정 관리',
              },
              {
                description: '신규 서비스 구축',
              },
            ],
            works: [
              {
                description: '기술 스택, 컨벤션 정의, 배포, 모니터링 등 신규 개발 환경 구축',
              },
              {
                description: 'React Query를 활용한 제품 코드 및 테스트 코드 설계',
              },
              {
                description: '지수 차트/펀드 매수/사용자 랭킹 등 다수의 기능 개발',
              },
              {
                description: 'Storybook, Mirage JS를 활용하여 UI 개발 및 검증 편리성 증대',
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
            title: 'P2P 부동산 투자',
            beginAt: '2020-11',
            endAt: '2021-02',
            description:
              '부동산 P2P 투자 서비스를 운영하였습니다.\n이 서비스는 카카오톡 앱 내의 카카오페이 서비스 영역, 그리고 카카오페이 앱에서 접근할 수 있었습니다.\n아쉽게도 현재는 운영이 종료되었습니다.',
            role: [
              {
                description: '프로젝트 리드 및 일정 관리',
              },
              {
                description: '서비스 고도화',
              },
            ],
            works: [
              {
                description: 'React Query를 도입하여 투자내역 목록 지면 코드 복잡도 감소',
              },
              {
                description: '카카오페이 통합웹뷰 SDK 적용',
              },
              {
                description: '제휴사를 위한 카카오페이 통합웹뷰 SDK 브릿지 개발 및 가이드 제공',
              },
              {
                description: '웹뷰 뒤로 가기 시 사용자가 보고 있던 화면이 유지되도록 사용성 개선',
              },
              {
                description: 'Storybook, Mirage JS를 활용하여 UI 개발 및 검증 편리성 증대',
              },
              {
                description: '개발 환경 개선',
                subDescription: [
                  '@babel/polyfill, awesome-ts-loader, tslint와 같은 더 이상 유지되지 않는 라이브러리 제거',
                  'babel-loader, core-js, eslint, prettier 설치 및 적용',
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
            title: '펀드 투자',
            beginAt: '2020-08',
            endAt: '2020-10',
            description:
              '펀드 매매 서비스를 운영하였습니다.\n이 서비스는 카카오톡 앱 내의 카카오페이 서비스 영역, 그리고 카카오페이 앱에서 접근할 수 있었습니다.',
            role: [
              {
                description: '서비스 고도화',
              },
            ],
            works: [
              {
                description: '단 하나의 파일로만 되어있던 js 코드를 분할 처리하여 Overall LCP 약 30% 개선',
              },
              {
                description: '개발 환경 개선',
                subDescription: [
                  '@babel/polyfill, awesome-ts-loader, tslint와 같은 더 이상 유지되지 않는 라이브러리 제거',
                  'babel-loader, core-js, eslint, prettier 설치 및 적용',
                ],
              },
            ],
            techStack: ['React', 'Typescript', 'Mobx', 'sass', 'Jest', 'webpack', 'Github'],
          },
          {
            title: '투자 홈',
            beginAt: '2020-12',
            endAt: '2021-01',
            description:
              '카카오페이 투자 서비스들과 나의 투자 현황을 볼 수 있는 페이지를 운영하였습니다.\n이 페이지는 카카오톡 앱 내의 카카오페이 서비스 영역, 그리고 카카오페이 앱의 메인 탭 페이지로 제공되었습니다.',
            role: [
              {
                description: '프로젝트 리드 및 일정 관리',
              },
              {
                description: '서비스 고도화',
              },
            ],
            works: [
              {
                description: '카카오페이 통합웹뷰 SDK 적용',
              },
              {
                description: '다크 모드 화면 대응',
              },
              {
                description: '개발 환경 개선',
                subDescription: [
                  '@babel/polyfill, awesome-ts-loader, tslint와 같은 더 이상 유지되지 않는 라이브러리 제거',
                  'babel-loader, core-js, eslint, prettier 설치 및 적용',
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
            title: '위버스',
            beginAt: '2020-06',
            endAt: '2020-07',
            description: '위버스의 웹 버전을 운영하였습니다.',
            role: [
              {
                description: '서비스 고도화 및 신규 기능 개발',
              },
            ],
            works: [
              {
                description: '아티스트 커뮤니티 영역의 멤버십 혜택 기능 개발',
              },
            ],
            techStack: ['React', 'Typescript', 'Mobx', 'styled-components', 'i18n', 'webpack', 'Storybook', 'Github'],
          },
          {
            title: '타이니탄 상품 프로모션',
            beginAt: '2020-07',
            endAt: '2020-08',
            description:
              '방탄소년단 멤버들을 모티브 한 타이니탄이라는 캐릭터의 상품을 프로모션하는 사이트를 구축하였습니다.\n미디어 쿼리를 이용하여 위버스 앱 내 웹뷰 그리고 모바일 & 데스크톱 환경을 지원하였습니다.\n글로벌, 미국, 일본 Shop 설정과 그에 따른 다국어도 지원하였습니다.',
            role: [
              {
                description: '신규 프로모션 구축',
              },
            ],
            works: [
              {
                description: '기술 스택, 컨벤션 정의, 배포 등 신규 개발 환경 구축',
              },
              {
                description: '타이니탄 컨셉, 상품 소개 기능 개발',
              },
              {
                description: '여러 가게와 언어를 지원하고 있는 위버스샵 상품의 딥링크 모듈 개발',
              },
            ],
            techStack: ['React', 'Typescript', 'Mobx', 'styled-components', 'i18n', 'webpack', 'Github'],
          },
          {
            title: '위버스샵',
            beginAt: '2020-07',
            endAt: '2020-07',
            description:
              '위버스샵의 어드민을 운영하였습니다.\n벡엔드 팀 리소스 부족으로 버그 수정 및 성능 개선 등의 업무를 지원하였습니다.',
            role: [
              {
                description: '서비스 고도화',
              },
            ],
            works: [
              {
                description: '배송지 권역 설정 지면의 렌더링 성능 개선',
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
            title: '배민상회',
            beginAt: '2018-10',
            endAt: '2020-05',
            description:
              '배민상회는 사장님께서 식자재 및 비품을 구매할 수 있는 서비스입니다.\n개발팀의 초기 멤버로 합류 후, 고도몰로 운영되고 있었던 서비스를 점진적으로 내재화시켰습니다.\n내재화가 완료된 후에는 서비스 관리 어드민 및 판매중개 비지니스 모델 전환을 위해 셀러 어드민을 구축하여 서비스 고도화를 진행하였습니다.\n또한, 컴포넌트를 공통으로 사용할 수 있도록 배민상회 디자인 시스템도 구축하였습니다.',
            role: [
              {
                description: '프로젝트/테크 리드 및 일정 관리',
              },
              {
                description: '서비스 구축 및 신규 기능 개발',
              },
              {
                description: '서비스 고도화',
              },
            ],
            works: [
              {
                description: '기술 스택, 컨벤션 정의, 배포, 모니터링 등 신규 개발 환경 구축',
              },
              {
                description: '배민상회 서비스 자체 플랫폼 구축 ( 고도몰 기능 100% 구현 )',
                subDescription: [
                  '메인 / 검색 / 상품목록 및 상세 / 장바구니 / 주문 / 회원 / 나의상회 / 샘플 등 기능 개발',
                  '모바일, 데스크톱 브라우저를 지원하기 위한 애플리케이션 설계',
                  '서비스 내재화가 완료되기 전까지 고도몰 운영',
                ],
              },
              {
                description: '서비스 고도화를 위한 어드민과 외부 판매사에서 사용할 수 있는 셀러 어드민 구축',
                subDescription: [
                  '판매사 관리 / 상품 관리 / 가격 관리 / 주문 관리 / 배송 관리 등 주요 기능 개발',
                  '단일 소스로 2개의 서비스가 제공되도록 애플리케이션 설계',
                ],
              },
              {
                description: '배민상회 디자인 시스템 구축',
                subDescription: [
                  'Button / Input / Select / Modal / Pagination / Table 등 주요 컴포넌트 개발',
                  '버저닝 및 배포 전략 수립',
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
            title: '아모레퍼시픽 브랜드 웹사이트',
            beginAt: '2012-01',
            endAt: '2018-03',
            description:
              '아모레퍼시픽 브랜드들을 소개해 주는 서비스입니다.\n회사 재직기간 동안 가장 많이 진행하였던 업무들이었고, 시기에 따라 적절한 기술들을 사용하였습니다.\n브라우저를 위한 사용 기술 및 언어에 대한 주요 흐름은 아래와 같고, 부가적으로 필요한 환경들을 구성했었습니다.\nActionScript 3.0  ->  jQuery  ->  AngularJS  ->  React\n\nImageMagick, FFmpeg와 같은 라이브러리들은 특수한 프로모션 사이트들에서 이미지와 영상 처리가 필요하여 사용하였습니다.',
            role: [
              {
                description: '프로젝트 리드 및 일정 관리',
              },
              {
                description: '프로젝트 견적 산출',
              },
              {
                description: '신규 기능 개발',
              },
            ],
            works: [
              {
                description:
                  '라네즈 프로모션 사이트 개발 및 9개국 확산(한국, 중국, 대만, 홍콩, 태국, 베트남, 싱가폴, 말레이시아, 인도네시아)',
              },
              { description: '이니스프리 프로모션 사이트 개발' },
              { description: '프리메라 프로모션 사이트 개발' },
              { description: 'VB프로그램 프로모션 사이트 개발' },
              { description: '헤라 프로모션 사이트 개발' },
              { description: '한율 프로모션 사이트 개발' },
              { description: '설화수 프로모션 사이트 개발' },
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
            title: '하기스 네이처피크닉 시즌5',
            beginAt: '2016-03',
            endAt: '2016-05',
            description:
              '하기스 네이처피크닉 프로모션 사이트에서 사용되는 API를 개발하였습니다.\n클라이언트로부터 이미지를 전달받아, 이미지에 필터 효과를 적용하고 애니메이션이 들어간 gif를 생성하고 반환해 주었습니다.',
            role: [
              {
                description: '프로젝트 리드 및 일정 관리',
              },
              {
                description: '프로젝트 견적 산출',
              },
              {
                description: 'API 기능 개발',
              },
            ],
            works: [
              { description: 'ImageMagick을 활용하여 이미지 필터 모듈 개발' },
              { description: 'FFmpeg를 활용하여 gif 생성 모듈 개발' },
              { description: 'AWS Lambda와 API Gateway로 API 구성' },
            ],
            techStack: ['FFmpeg', 'ImageMagick', 'Node.js', 'AWS', 'Github'],
          },
          {
            title: '제주항공 My Heroine 소셜무비',
            beginAt: '2014-01',
            endAt: '2014-03',
            description:
              '제주항공의 프로모션 사이트에서 SNS 무비를 제작할 수 있는 서비스입니다.\n사용자 이미지와 페이스북 친구들의 이미지를 업로드하면 자신만의 SNS 무비를 만들 수 있었습니다.',
            role: [
              {
                description: '신규 기능 개발',
              },
            ],
            works: [{ description: '이미지 필터 모듈 개발' }, { description: '영상 크로마키 모듈 개발' }],
            techStack: ['ActionScript 3.0'],
          },
          {
            title: '롯데센터 Fun view walk 앱 (Windows)',
            beginAt: '2014-06',
            endAt: '2014-09',
            description:
              '베트남 하노이 롯데센터 전망대의 대형 스크린에 전시했던 서비스입니다.\n사용자가 키오스크에서 입력한 텍스트를 다양한 인터랙션으로 보여주고, 세계 도시들의 전경과 우주 배경 등 다양한 테마가 디스플레이되었습니다.',
            role: [
              {
                description: '신규 기능 개발',
              },
            ],
            works: [
              { description: '만화경 이미지 테마뷰 개발' },
              { description: '텍스트 파티클 애니메이션 테마뷰 개발' },
            ],
            techStack: ['Cinder', 'C++', 'OpenGL', 'Github'],
          },
          {
            title: 'PlayAlarms 앱 (iOS)',
            beginAt: '2013-04',
            endAt: '2013-07',
            description:
              '아이데이션부터 앱 출시까지 주도적으로 진행한 서비스입니다.\n아침 기상을 위해 알람을 설정하면, 사용자에게 특정 미션을 수행하라는 푸시 알림이 전송되며,\n미션 수행 완료 시 해당 푸시 알림이 자동으로 종료되도록 개발했습니다.\n광고 없이 중국 지역 애플스토어 유틸리티 카테고리에서 20위를 달성하였고, 앱 제작부터 배포까지의 개발 과정을 모두 혼자 진행하였습니다.',
            role: [
              {
                description: '서비스 기획 및 개발',
              },
            ],
            works: [
              { description: 'iOS 애플리케이션 아키텍처 설계 및 UI 개발' },
              { description: '데시벨 측정 모듈 개발' },
              { description: '가속도센서를 활용한 흔들기 측정 모듈 개발' },
            ],
            techStack: ['Objective-C', 'Github'],
          },
          {
            title: '이니스프리 iCF 앱 (iOS/Android)',
            beginAt: '2012-07',
            endAt: '2012-10',
            description:
              '이니스프리 iCF 앱은 이니스프리의 CF를 제작할 수 있는 서비스입니다.\n사용자들이 직접 촬영한 영상으로 자신만의 CF를 제작할 수 있고, 이것을 Youtube로 공유할 수 있었습니다.',
            role: [
              {
                description: '신규 기능 개발',
              },
            ],
            works: [{ description: '영상 갤러리 개발' }, { description: 'Youtube Data API 연동 모듈 개발' }],
            techStack: ['ActionScript 3.0', 'Adobe AIR'],
          },
        ],
      },
    ],
  },
];
