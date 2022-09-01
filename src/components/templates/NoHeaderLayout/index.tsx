import type { ReactNode } from 'react';

import { Footer } from '~/components/organisms/Footer';

type NoHeaderLayoutProps = {
  idCenter: boolean;
  children: ReactNode;
};

export const NoHeaderLayout = (props: NoHeaderLayoutProps) => {
  const { children } = props;

  return (
    <>
      {children}
      <Footer />
    </>
  );
};
