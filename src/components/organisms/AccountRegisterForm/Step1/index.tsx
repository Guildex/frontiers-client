import { Avatar, Grid, Input, Spacer } from '@nextui-org/react';

import { useRegistrationStep } from '~/contexts';

import { useUserTmp } from '../useUserTmp';

export const Step1 = () => {
  const [{ username, email }, setRegistrationStep] = useRegistrationStep();
  const { data } = useUserTmp();

  return (
    <Grid.Container justify="space-around">
      <Grid>
        <Avatar src={data?.userTmp?.avatar} size="xl" color="gradient" bordered />
      </Grid>
      <Grid style={{ maxWidth: 250, width: '100%' }}>
        <Input
          label="ユーザー名"
          name="username"
          width="100%"
          value={username}
          maxLength={20}
          type="text"
          placeholder="frontiers"
          required
          onChange={(e) => {
            setRegistrationStep((prev) => ({
              ...prev,
              username: e.currentTarget.value,
            }));
          }}
        />
        <Spacer y={1} />
        <Input
          label="email"
          name="email"
          width="100%"
          value={email}
          type="email"
          placeholder="support@frontiers.cloud"
          required
          onChange={(e) => {
            console.log(e.currentTarget.value);
            setRegistrationStep((prev) => ({
              ...prev,
              email: e.currentTarget.value,
            }));
          }}
        />
      </Grid>
    </Grid.Container>
  );
};
