import type { LinkProps } from 'next/dist/client/link';
import NextLink from 'next/link';
import type { ReactNode } from 'react';

import type { Href } from '~/const/href';

type NextLinkProps = LinkProps & {
  href: Href;
  children: ReactNode;
};

/**
 * NextLinkの初期値等を定義するコンポーネント
 *
 * @param props {@link NextLinkProps}
 */
export const Link = (props: NextLinkProps) => {
  const { children, ...rest } = props;

  return <NextLink {...rest}>{children}</NextLink>;
};
