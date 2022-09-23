import { Button, Modal, Spacer, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

import { Emoji } from '~/components/atoms/Emoji';
import { useQueryString } from '~/hooks/useQueryString';

export const RegisterSuccessModal = () => {
  const router = useRouter();
  const query = useQueryString();
  const isVisible = query.authenticated === 'pre-register';

  const close = () => {
    void router.replace(router.pathname);
  };

  return (
    <Modal closeButton aria-labelledby="modal-title" open={isVisible} onClose={close}>
      <Modal.Header>
        <Emoji emoji=":sparkles:" size={24} />
        <Spacer x={0.5} />
        <Text h1 size={20}>
          仮登録が完了しました！
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text size={14}>
          ログイン時に利用したアカウントに紐付くメールアドレスに本登録用のメールを送信しましたのでご確認ください。
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <Button auto onClick={close}>
          閉じる
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
