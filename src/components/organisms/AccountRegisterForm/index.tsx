import { Button, Grid, Input, Row } from '@nextui-org/react';

import * as Styled from './style';

type AccountRegisterFormProps = {
  currentStep: number;
};

export const AccountRegisterForm = (props: AccountRegisterFormProps) => {
  const { currentStep } = props;

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Grid.Container gap={4}>
              <Grid>
                <Input label="アカウント名" maxLength={20} type="text" placeholder="frontiers" required />
                <Input label="email" maxLength={20} type="email" placeholder="support@frontiers.cloud" required />
              </Grid>
            </Grid.Container>
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
