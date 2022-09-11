import { Avatar, Button, Grid, Input, Row, Spacer } from '@nextui-org/react';
import type { Dispatch, SetStateAction } from 'react';

import { useUserTmp } from '../useUserTmp';

type Step1Props = {
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

export const Step1 = (props: Step1Props) => {
  const { setCurrentStep } = props;
  const { data } = useUserTmp();

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
            setCurrentStep((prev) => prev + 1);
          }}
        >
          次へ
        </Button>
      </Row>
    </>
  );
};
