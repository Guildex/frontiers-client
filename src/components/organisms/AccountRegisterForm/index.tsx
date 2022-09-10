import { Avatar, Button, Grid, Input, Row, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useGetUserTmpLazyQuery } from '~/@generated/graphql';

import * as Styled from './style';

type AccountRegisterFormProps = {
  currentStep: number;
};

export const AccountRegisterForm = (props: AccountRegisterFormProps) => {
  const { currentStep } = props;

  const router = useRouter();
  const token = router.query.token as string | undefined;
  const [exec, { loading: isLoading, data, error }] = useGetUserTmpLazyQuery();

  useEffect(() => {
    if (!token) return;

    void exec({
      variables: {
        token,
      },
    });
  }, [token]);

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Grid.Container justify="space-around" gap={2}>
              <Grid>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="xl" color="primary" bordered />
              </Grid>
              <Grid style={{ maxWidth: 250, width: '100%' }}>
                <Input
                  label="アカウント名"
                  width="100%"
                  value={data?.userTmp?.username ?? ''}
                  maxLength={20}
                  type="text"
                  placeholder="frontiers"
                  required
                />
                <Spacer y={1} />
                <Input
                  label="email"
                  width="100%"
                  value={data?.userTmp?.email ?? ''}
                  maxLength={20}
                  type="email"
                  placeholder="support@frontiers.cloud"
                  required
                />
              </Grid>
            </Grid.Container>

            <Spacer y={2} />

            <Row justify="flex-end">
              <Button
                auto
                onClick={() => {
                  //
                }}
              >
                次へ
              </Button>
            </Row>
          </>
        );

      case 2:
        return <p>2</p>;

      default:
        return null;
    }
  };

  return (
    <Styled.Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      {renderForm()}
    </Styled.Form>
  );
};
