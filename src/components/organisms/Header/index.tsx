import { useTheme, Switch, Modal, Text, Button } from '@nextui-org/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { GrGithub } from 'react-icons/gr';

import { Icon } from '~/components/atoms/Icon';
import { SITE_NAME } from '~/const/app';
import { PATHS } from '~/const/paths';
import { useNextTheme } from '~/theme/ThemesProvider';

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

        <Styled.Nav>
          <Styled.NavList role="list">
            {nav.map(({ href, value }) => (
              <li key={href} role="listitem">
                <NextLink href={href} passHref>
                  <Styled.NavLink>{value}</Styled.NavLink>
                </NextLink>
              </li>
            ))}
          </Styled.NavList>
        </Styled.Nav>
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
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={isLoginModalVisible}
          onClose={() => {
            setIsLoginModalVisible(false);
          }}
        >
          <Modal.Header>
            <Text id="modal-title" size={20}>
              ログイン
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text>{SITE_NAME}にアクセスして頂きありがとうございます。</Text>

            <Styled.GithubButton
              icon={<GrGithub size={24} />}
              size="md"
              auto
              onClick={() => {
                // TODO: GitHub
              }}
            >
              GitHubでログイン
            </Styled.GithubButton>
          </Modal.Body>
          <Modal.Footer justify="flex-start">
            <Text>hoge</Text>
          </Modal.Footer>
        </Modal>
      </Styled.RightContents>
    </Styled.Header>
  );
};
