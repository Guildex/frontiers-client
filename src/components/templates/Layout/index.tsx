import { useRouter } from 'next/router';
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
  const router = useRouter();
  const isCurriculum = router.asPath.startsWith('/curriculums');
  return (
    <>
      <Header />
      <Styled.Main>
        {isCurriculum && <Side />}
        <Styled.Contents>{children}</Styled.Contents>
      </Styled.Main>
      <Footer />
    </>
  );
};
