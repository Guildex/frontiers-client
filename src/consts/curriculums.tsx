import * as Examples from '@guildex/react-next-curriculum-example';

export const CURRICULUMS = {
  INPUT: {
    isPublic: true,
    id: 'input',
    cost: 8,
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
    cost: 13,
    title: '登録フォームのUI実装',
    description:
      '会員登録やお問い合わせなど、ユーザーの操作によってサービス運営者等に向けて自らの情報を送る為のフォームです。',
    requirements: [
      'デザイン通りに実装されていること（アニメーションを除く）',
      '分離可能なコンポーネントはAtomic Designに則って~/src/components配下に適切に分離されていること',
    ],
    example: <Examples.ExampleRegisterFormUI />,
  },
  REGISTER_FORM_VALIDATION: {
    isPublic: true,
    id: 'register-form-validation',
    cost: 8,
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
    isPublic: true,
    id: 'register-form-submit',
    cost: 8,
    title: '登録フォームの送信処理実装',
    description:
      'バリデーションを終えてアプリケーションが期待する値が送れる準備が整った為、いよいよフォーム機能の山場であるAPIに対してリクエストを送信する処理の実装です。\nリクエスト周りは色々様々な箇所に気を配る必要があります。前回のLessonでも実装したようなバリデーション機能であったり、他にも二重送信を防ぐ為に通信中はボタンを非活性にしたり、入力したデータを変更できないようにしたりと、ユーザーの誤操作を防いだり現在のステータスを逐一分かりやすく表現することでユーザーに待機を促したりする効果があります。\n少々機能としては多めになりますが、自分がエンドユーザーとして利用する側になった時のことをイメージして、より使いやすいUIになるように意識してみましょう。\n※ APIは当アプリケーション内で立てられたサーバーに対してリクエストする為、実際にどこかに入力情報を流すわけではないのでそこはご安心ください',
    requirements: [
      '「登録」ボタン押下時に"/api/curriculums/users/register"に対してPOSTリクエストが実行されること',
      'リクエスト中は各種inputの入力や、「登録」ボタンの押下ができないこと',
      'リクエスト中は「登録」ボタンの文言が「登録中...」となり、背景色が灰色になること',
      'リクエストが完了したら成功したことを伝えるモーダルが表示されること',
      'モーダルの見出しは「アカウント登録を受け付けました！」であること',
      'モーダルの本文は「ご入力頂いたメールアドレスに本登録用のURLが記載されたメールを送信しましたのでご確認ください。」であること',
      'モーダルが開いた場合、「閉じる」ボタンが設置されていること',
      'モーダルが開いた場合、右上に「X」ボタンが設置されていること',
      'モーダルが開いた場合、オーバーレイが表示されていること',
      '「閉じる」ボタンを押下した場合、モーダルが閉じること',
      '「X」ボタンを押下した場合、モーダルが閉じること',
      'オーバーレイを押下した場合、モーダルが閉じること',
      'モーダルが表示されている場合、スクロールができないこと',
    ],
    example: <Examples.ExampleRegisterFormSubmit />,
  },
  REGISTER_ERROR_HANDLING: {
    isPublic: false,
    id: 'register-form-error-handling',
    cost: 5,
    title: '登録フォームのエラーハンドリング',
    description: '',
    requirements: [],
    example: <Examples.ExampleRegisterFormSubmit />,
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

export const curriculumKeys = Object.keys(CURRICULUMS) as CurriculumKeys[];
