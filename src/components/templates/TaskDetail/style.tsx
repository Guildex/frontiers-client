import styled from "styled-components";
import { COLORS, FONT_SIZES } from "~/consts/style";

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: ${FONT_SIZES.XXL}px;
`;

export const RequirementListBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-left: 4px solid ${COLORS.GREEN100.code};
  background-color: ${COLORS.GREEN50.code};
  border-radius: 8px;

  h1 {
    margin-bottom: 12px;
    font-size: ${FONT_SIZES.M}px;
  }
`;
