# Next React Workbook

このリポジトリは React と Next.js と TypeScript を用いて Web アプリケーションを構築する上で重要なコンポーネント設計や、API とのやり取り、Store 設計などを実装とレビューを繰り返しながら体系的に学習するサービスです。

## 環境構築

### 必要パッケージのインストール

```
$ yarn
```

### 拡張機能の追加（for VSCode）

`CMD + Shift + X` で拡張機能一覧を表示したのちに、入力フォームに `@recommended` と入力すると推奨拡張機能が表示されるので、必要であればインストールしてください（インストールをしなくてもカリキュラムは進行可能です）

## スタイリングについて

当サービスでは [styled-components](https://styled-components.com/) を前提に作成しております。
スタイリングをする際は下記のように `style.tsx` を作成して、必要なコンポーネントと当てたい CSS を明記してそれを `index.tsx` で利用するようにしてください。

```tsx
// style.tsx
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f00;
`;
```

```tsx
// index.tsx
import * as Styled from './style';

export const Hoge = () => {
  return <Styled.Wrapper>hoge</Styled.Wrapper>;
};
```
