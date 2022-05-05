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
  REGISTER_FORM_UI: {
    id: 'register-form-ui',
    title: '登録フォームのUI実装',
    description:
      '会員登録やお問い合わせなど、ユーザーの操作によってサービス運営者等に向けて自らの情報を送る為のフォームです。',
    requirements: ['デザイン通りに実装されていること（アニメーションを除く）'],
    example: <Examples.ExampleRegisterForm />,
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
