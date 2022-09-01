export const UI = {
  isPublic: true,
  path: 'ui',
  cost: 13,
  title: 'UI構築',
  description:
    '会員登録やお問い合わせなど、ユーザーの操作によってサービス運営者等に向けて自らの情報を送る為のフォームです。',
  requirements: [
    '分離可能なコンポーネントはAtomic Designに則って~/src/components配下に適切に分離されていること',
    '「お名前（姓）」のinput要素が表示されていること',
    '「お名前（姓）」のplaceholder属性には「浦島」が渡っていること',
    '「お名前（名）」のinput要素が表示されていること',
    '「お名前（名）」のplaceholder属性には「太郎」が渡っていること',
    '「メールアドレス」のinput要素が表示されていること',
    '「メールアドレス」のplaceholder属性には「abcdefg@hijk.com」が渡っていること',
    '「性別」のinput要素が表示されていること',
    '「生年月日」のselect要素が表示されていること',
  ],
};
