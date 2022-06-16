import { NextSeo } from 'next-seo';

import { SITE_NAME } from '~/consts/app';

type HeadProps = {
  title: string;
  description: string;
  openGraph?: {
    type: string;
  };
};

/**
 * next-seoをラップ
 *
 * @param props {@link HeadProps}
 */
export const Head = (props: HeadProps) => {
  const { title, description, openGraph = {} } = props;

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        ...openGraph,
        title,
        description,
        images: [{ url: `/api/generate-ogp?title=${title}` }],
        site_name: SITE_NAME,
      }}
      twitter={{
        cardType: 'Summary Card with Large Image',
      }}
    />
  );
};
