import NextLink from 'next/link';
import { GrReactjs } from 'react-icons/gr';

import { SITE_NAME } from '~/consts/app';
import { PATHS } from '~/consts/paths';
import { COLORS } from '~/consts/style';

import * as Styled from './style';

/**
 * グローバルなヘッダー要素
 */
export const Header = () => {
  return (
    <Styled.Header>
      <NextLink href={PATHS.HOME} passHref>
        <Styled.Link>
          <GrReactjs size={32} color={COLORS.REACT.code} />
          <span>{SITE_NAME}</span>
        </Styled.Link>
      </NextLink>
    </Styled.Header>
  );
};
