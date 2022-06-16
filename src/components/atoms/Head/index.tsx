import { NextSeo } from 'next-seo';

import {
  OPEN_GRAPH_IMAGE_HEIGHT,
  OPEN_GRAPH_IMAGE_WIDTH,
  SITE_NAME,
} from '~/consts/app';

type HeadProps = {
  title: string;
  description: string;
  openGraph?: {
    type: string;
  };
};

const MAX_DESCRIPTION_LENGTH = 100;

/**
 * next-seoをラップ
 *
 * @param props {@link HeadProps}
 */
export const Head = (props: HeadProps) => {
  const { title, description, openGraph = {} } = props;
  const ogDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
      : description;

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        ...openGraph,
        title,
        description: ogDescription,
        images: [
          {
            url: `/api/generate-ogp?title=${title}`,
            width: OPEN_GRAPH_IMAGE_WIDTH,
            height: OPEN_GRAPH_IMAGE_HEIGHT,
          },
        ],
        site_name: SITE_NAME,
      }}
      twitter={{
        cardType: 'Summary Card with Large Image',
      }}
    />
  );
};
