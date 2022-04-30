import { Button, Container, Grid, Spacer } from '@nextui-org/react';
import * as Styled from './style';

export const Form = () => {
  return (
    <Styled.Form>
      <Grid.Container justify="space-between">
        <Grid>
          <Styled.Input
            value=""
            label="お名前（姓）"
            type="text"
            shadow={false}
            onChange={() => {
              console.log('hoge');
            }}
            placeholder="〇〇"
          />
        </Grid>
        <Grid>
          <Styled.Input
            value=""
            label="お名前（名）"
            type="text"
            shadow={false}
            onChange={() => {
              console.log('hoge');
            }}
            placeholder="〇〇"
          />
        </Grid>
      </Grid.Container>

      <Spacer y={0.5} />

      <Styled.Input
        value=""
        label="メールアドレス"
        type="email"
        shadow={false}
        onChange={() => {
          console.log('hoge');
        }}
        placeholder="abcdefg@hijk.com"
        width="100%"
      />

      <Container>
        <Button>登録</Button>
      </Container>
    </Styled.Form>
  );
};
