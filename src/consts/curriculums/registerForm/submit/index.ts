export const SUBMIT = {
  isPublic: true,
  path: 'submit',
  cost: 21,
  title: '送信処理',
  description: `バリデーションを終えてアプリケーションが期待する値が送れる準備が整った為、いよいよフォーム機能の山場であるAPIに対してリクエストを送信する処理の実装です。\n
    リクエスト周りは色々様々な箇所に気を配る必要があります。前回のLessonでも実装したようなバリデーション機能であったり、他にも二重送信を防ぐ為に通信中はボタンを非活性にしたり、入力したデータを変更できないようにしたりと、ユーザーの誤操作を防いだり現在のステータスを逐一分かりやすく表現することでユーザーに待機を促したりする効果があります。\n
    少々機能としては多めになりますが、自分がエンドユーザーとして利用する側になった時のことをイメージして、より使いやすいUIになるように意識してみましょう。\n
    ※ APIは当アプリケーション内で立てられたサーバーに対してリクエストする為、実際にどこかに入力情報を流すわけではないのでそこはご安心ください
  `,
  requirements: [
    '「登録」ボタン押下時に `/api/curriculums/users/register` に対してPOSTリクエストが実行されること（リクエスト処理はutil関数として新規作成してください）',
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
};
