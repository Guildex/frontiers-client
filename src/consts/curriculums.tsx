import * as Examples from '@guildex/react-next-curriculum-example';

export const CURRICULUMS = {
  INPUT: {
    id: 'input',
    title: '入力要素の実装',
    description: `
      UIパーツとしてポピュラーな入力要素の実装を行います。
    `,
    requirements: [
      'テキストが入力できること',
      'emailの形式のみ入力できること',
      'labelタグを用いていること',
    ],
    example: <Examples.ExampleInput />,
  },
  REGISTER_FORM: {
    id: 'register-form',
    title: '登録フォームの実装',
    description: '',
    requirements: [],
    example: null,
  },
  // CHECKBOX: {
  //   title: 'チェックボックス実装',
  //   description: ``,
  // },
  // TODO: {
  //   title: 'TODOリストの実装',
  //   description: ``,
  // },
} as const;

export type CurriculumKeys = keyof typeof CURRICULUMS;

export type Curriculum = typeof CURRICULUMS[CurriculumKeys];
