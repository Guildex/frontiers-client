import type { ReactNode } from "react";
import { Header } from "~/components/organisms/Header";

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
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
