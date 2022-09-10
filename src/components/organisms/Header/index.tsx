import { useTheme, Switch, Button } from '@nextui-org/react';
import NextLink from 'next/link';
import { useState } from 'react';

import { Icon } from '~/components/atoms/Icon';
import { SITE_NAME } from '~/const/app';
import { PATHS } from '~/const/paths';
import { useNextTheme } from '~/theme/ThemesProvider';

import { LoginModal } from './LoginModal';
import { RegisterSuccessModal } from './RegisterSuccessModal';
import * as Styled from './style';

/**
 * グローバルなヘッダー要素
 */
export const Header = () => {
  const nav = [
    {
      href: '/curriculums/',
      value: 'カリキュラム一覧',
    },
  ];

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Styled.Header>
      <Styled.LeftContents>
        <NextLink href={PATHS.HOME} passHref>
          <Styled.Link>
            <span>{SITE_NAME}</span>
          </Styled.Link>
        </NextLink>

        <Styled.NavList role="list">
          {nav.map(({ href, value }) => (
            <li key={href} role="listitem">
              <NextLink href={href} passHref>
                <Styled.NavLink>{value}</Styled.NavLink>
              </NextLink>
            </li>
          ))}
        </Styled.NavList>
      </Styled.LeftContents>

      <Styled.RightContents>
        <Switch
          checked={isDark}
          size="lg"
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          iconOn={<Icon name="SUN" />}
          iconOff={<Icon name="MOON" />}
        />
        <Button
          size="md"
          auto
          onClick={() => {
            setIsLoginModalVisible(true);
          }}
        >
          ログイン
        </Button>
      </Styled.RightContents>

      <LoginModal isLoginModalVisible={isLoginModalVisible} setIsLoginModalVisible={setIsLoginModalVisible} />
      <RegisterSuccessModal />
    </Styled.Header>
  );
};
