import { Grid, Spacer } from "@nextui-org/react";
import * as Styled from "./style";

export const Form = () => {
  return (
    <Styled.Form>
      <Grid.Container
        css={{
          gap: 20,
        }}
      >
        <Grid>
          <Styled.Input
            value=""
            label="お名前（姓）"
            type="text"
            onChange={() => {
              console.log("hoge");
            }}
            placeholder="〇〇"
          />
        </Grid>
        <Grid>
          <Styled.Input
            value=""
            label="お名前（名）"
            type="text"
            onChange={() => {
              console.log("hoge");
            }}
            placeholder="〇〇"
          />
        </Grid>
      </Grid.Container>

      <Spacer y={1} />

      <Styled.Input
        value=""
        label="Email"
        type="email"
        onChange={() => {
          console.log("hoge");
        }}
        placeholder="Email"
      />
    </Styled.Form>
  );
};
