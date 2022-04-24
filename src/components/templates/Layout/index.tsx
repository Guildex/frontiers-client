import type { ReactNode } from "react";

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
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
