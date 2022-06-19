import NextLink from 'next/link';
import { GrReactjs, GrGithub } from 'react-icons/gr';

import { SITE_NAME } from '~/consts/app';
import { PATHS } from '~/consts/paths';
import { COLORS } from '~/consts/style';

import * as Styled from './style';

/**
 * グローバルなヘッダー要素
 */
export const Header = () => {
  const nav = [
    {
      href: '/curriculums/',
      value: 'カリキュラム',
    },
  ];

  return (
    <Styled.Header>
      <Styled.LeftContents>
        <NextLink href={PATHS.HOME} passHref>
          <Styled.Link>
            <GrReactjs size={32} color={COLORS.REACT.code} />
            <span>{SITE_NAME}</span>
          </Styled.Link>
        </NextLink>

        <Styled.Nav>
          <Styled.NavList role="list">
            {nav.map(({ href, value }) => (
              <li key={href}>
                <NextLink href={href} passHref>
                  <Styled.NavLink>{value}</Styled.NavLink>
                </NextLink>
              </li>
            ))}
          </Styled.NavList>
        </Styled.Nav>
      </Styled.LeftContents>

      <Styled.RightContents>
        <Styled.IconLink
          href="https://github.com/Guildex/next-react-workbook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrGithub size={32} />
        </Styled.IconLink>
      </Styled.RightContents>
    </Styled.Header>
  );
};
