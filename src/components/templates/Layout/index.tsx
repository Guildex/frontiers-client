import type { ReactNode } from 'react';
import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';
import { Side } from '~/components/organisms/Side';
import * as Styled from './style';

export type LayoutProps = {
  /** 子要素 */
  children: ReactNode;
};

/**
 * ページの基本的なレイアウトを表現するコンポーネント
 * @param props {@link LayoutProps}
 */
export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Styled.Main>
        <Side />
        <Styled.Contents>{children}</Styled.Contents>
      </Styled.Main>
      <Footer />
    </>
  );
};
