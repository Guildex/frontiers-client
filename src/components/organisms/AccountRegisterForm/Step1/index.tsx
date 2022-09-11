import { Avatar, Button, Grid, Input, Row, Spacer } from '@nextui-org/react';

import { useRegistrationStep } from '~/contexts';

import { useUserTmp } from '../useUserTmp';

export const Step1 = () => {
  const [, setRegistrationStep] = useRegistrationStep();
  const { data } = useUserTmp();

  return (
    <>
      <Grid.Container justify="space-around">
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
            setRegistrationStep((prev) => ({
              ...prev,
              currentStep: prev.currentStep + 1,
            }));
          }}
        >
          次へ
        </Button>
      </Row>
    </>
  );
};
