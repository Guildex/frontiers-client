import * as Examples from '@guildex/react-next-curriculum-example';

export const CURRICULUMS = {
  INPUT: {
    isPublic: true,
    id: 'input',
    title: '入力要素の実装',
    description: `
      UIパーツとしてポピュラーな入力要素の実装を行います。
    `,
    requirements: [
      'テキストが入力できること',
      'emailの形式のみ入力できること',
      'labelタグを用いていること',
      '入力された値はReactのstateとして管理されていること',
    ],
    example: <Examples.ExampleInput />,
  },
  REGISTER_FORM_UI: {
    isPublic: true,
    id: 'register-form-ui',
    title: '登録フォームのUI実装',
    description:
      '会員登録やお問い合わせなど、ユーザーの操作によってサービス運営者等に向けて自らの情報を送る為のフォームです。',
    requirements: [
      'デザイン通りに実装されていること（アニメーションを除く）',
      '分離可能なコンポーネントは別ディレクトリを切って適切に分離されていること',
    ],
    example: <Examples.ExampleRegisterFormUI />,
  },
  REGISTER_FORM_VALIDATION: {
    isPublic: true,
    id: 'register-form-validation',
    title: '登録フォームのバリデーション実装',
    description:
      '登録ボタン押下時に各項目が期待値通りでない場合、赤字で期待値を満たしていないことをユーザーに伝える機能の実装です。\nHTMLInputElementには入力必須を指定するrequiredという属性を付与する方法もありますが、今回はそちらを使用せずに自身で実装したプログラムによって各項目が期待値を満たすかどうかをチェックする処理を実装していきましょう。',
    requirements: [
      'すべてのバリデーション処理は「登録」ボタン押下時に実行されること',
      'お名前（姓）が未記入の場合、「名字を入力してください」と赤字で表示されること',
      'お名前（姓）が20文字以上の場合、「20文字以内で入力してください」と表示されること',
      'お名前（名）が未記入の場合、「名前を入力してください」と赤字で表示されること',
      'お名前（名）が20文字以上の場合、「20文字以内で入力してください」と表示されること',
      'メールアドレスが未記入の場合、「メールアドレスを入力してください」と赤字で表示されること',
      'メールアドレスが正しい形式（XXX@XXX.XXX）になっていない場合、「メールアドレスは"@"と"ドメイン名"を含んだ値を入力してください」と赤字で表示されること',
      '性別が未記入の場合、「性別」を入力してくださいと表示されること',
      '生年月日が未記入の場合、「生年月日を入力してください」と表示されること',
    ],
    example: <Examples.ExampleRegisterFormValidation />,
  },
  REGISTER_FORM_SUBMIT: {
    isPublic: false,
    id: 'register-form-submit',
    title: '登録フォームの送信処理実装',
    description: '',
    requirements: [],
    example: <Examples.ExampleRegisterFormValidation />,
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
