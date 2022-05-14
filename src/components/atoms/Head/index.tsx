import { NextSeo } from 'next-seo';

type HeadProps = {
  title: string;
  description: string;
};

/**
 * next-seoをラップ
 *
 * @param props {@link HeadProps}
 */
export const Head = (props: HeadProps) => {
  return <NextSeo {...props} />;
};
