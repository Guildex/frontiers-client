import styled from "styled-components";
import { COLORS, FONT_SIZES } from '~/consts/style';

export const FormEmailTitle = styled.label`
  display: block;
  padding-left: 6px;
  font-size: ${FONT_SIZES.S}px;
`;

export const FormEmailInput = styled.input`
  padding: 10px;
  margin-top: 6px;
  font-size: ${FONT_SIZES.S}px;
  background-color: ${COLORS.GRAY200.code};
  border: none;
  border-radius: 10px;
  transition: .3s;

  &::placeholder {
    transition: .3s;
  }
  &:focus {
    outline: none;
    transform: translateY(-2px);
    box-shadow: 0px 20px 30px -8px rgb(0 0 0 / 8%);
    &::placeholder {
      color: transparent;
    }
  }
`;

