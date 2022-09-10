import { Container, Modal, Text } from '@nextui-org/react';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { FaCircleNotch } from 'react-icons/fa';
import { GrGithub } from 'react-icons/gr';

import { Link } from '~/components/atoms/Link';
import { SITE_NAME } from '~/const/app';
import { PATHS } from '~/const/paths';

import * as Styled from './style';

type LoginModalProps = {
  isLoginModalVisible: boolean;
  setIsLoginModalVisible: Dispatch<SetStateAction<boolean>>;
};

export const LoginModal = (props: LoginModalProps) => {
  const { isLoginModalVisible, setIsLoginModalVisible } = props;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={isLoginModalVisible}
      onClose={() => {
        setIsLoginModalVisible(false);
      }}
    >
      <Modal.Header>
        <Text h1 id="modal-title" size={20}>
          ログイン
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>{SITE_NAME}にアクセスして頂きありがとうございます。</Text>

        <Container display="flex" justify="center">
          <Styled.GithubButton
            icon={
              isLoading ? (
                <Styled.LoadingIconBox>
                  <FaCircleNotch className="fa-spin" />
                </Styled.LoadingIconBox>
              ) : (
                <GrGithub size={24} />
              )
            }
            size="lg"
            auto
            onClick={async () => {
              setIsLoading(true);
              location.assign(`${process.env.NEXT_PUBLIC_API_HOST}/auth/github/login`);
            }}
            disabled={isLoading}
          >
            {isLoading ? 'ログイン中...' : 'GitHubでログイン'}
          </Styled.GithubButton>
        </Container>
      </Modal.Body>
      <Modal.Footer justify="flex-start">
        <Text size={12}>
          <Link href={PATHS.TERMS}>利用規約</Link> と <Link href={PATHS.PRIVACY}>プライバシーポリシー</Link>
          をご確認の上、ご利用ください
        </Text>
      </Modal.Footer>
    </Modal>
  );
};
