import styled from "styled-components";
import { Input as _Input } from "@nextui-org/react";

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;

  > div {
    margin-top: 20px;
  }
`;

export const Input = styled(_Input)`
  width: 100%;
`;
