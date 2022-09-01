import type { ReactNode } from 'react';

import { Footer } from '~/components/organisms/Footer';

import * as Styled from './style';

type NoHeaderLayoutProps = {
  idCenter: boolean;
  children: ReactNode;
};

export const NoHeaderLayout = (props: NoHeaderLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </>
  );
};
