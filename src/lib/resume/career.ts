type Career = {
  name: string;
  team: string[];
  beginAt: string;
  endAt?: string;
  techStack: string[];
  projects: Project[];
};

type Project = {
  title: string;
  beginAt: string;
  endAt?: string;
  description: DescriptionTreeNode;
};

type DescriptionTreeNode = {
  description: string;
  children?: DescriptionTreeNode[];
};

export const CAREER: Career[] = [
  {
    name: '우아한형제들',
    team: ['셀러웹프론트개발팀 / 팀원', '배민상회웹프론트개발팀 / 팀원'],
    beginAt: '2021-05',
    techStack: [
      'react',
      'typescript',
      'redux-toolkit',
      'redux-saga',
      'react-query',
      'react-hook-form',
      'next.js',
      'express',
      'styled-components',
      'gitlab',
      'storybook',
      'jest',
      'react-testing-library',
      'msw',
      'lerna',
      'webpack',
      'esbuild',
    ],
    projects: [
      {
        title: '배민상회 쇼핑몰 운영',
        beginAt: '2021.05',
        endAt: '2022.09',
        description: {
          description: 'asd',
          children: [{ description: 'asd' }],
        },
      },
      {
        title: '배민상회 셀러어드민 구축 및 운영',
        beginAt: '',
        description: {
          description: 'asd',
          children: [{ description: 'asd' }],
        },
      },
      {
        title: '배민상회 플랫폼어드민 운영',
        beginAt: '',
        description: {
          description: 'asd',
          children: [{ description: 'asd' }],
        },
      },
      {
        title: '배민상회 디자인시스템 운영',
        beginAt: '',
        description: {
          description: 'asd',
          children: [{ description: 'asd' }],
        },
      },
    ],
  },
  {
    name: '카카오페이',
    team: ['금융사업클랜 투자파티 / 팀원'],
    beginAt: '2020-08',
    endAt: '2021-05',
    techStack: [],
    projects: [],
  },
  {
    name: '위버스컴퍼니',
    team: ['웹개발팀 / 팀원'],
    beginAt: '2020-06',
    endAt: '2020-08',
    techStack: [],
    projects: [],
  },
  {
    name: '우아한형제들',
    team: ['배민상회웹프론트개발팀 / 팀원'],
    beginAt: '2018-10',
    endAt: '2020-05',
    techStack: [],
    projects: [],
  },
  {
    name: '어나더레인보우',
    team: ['개발팀 / 책임연구원'],
    beginAt: '2012-01',
    endAt: '2018-04',
    techStack: [],
    projects: [],
  },
];
