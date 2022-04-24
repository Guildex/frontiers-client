import styled from "styled-components";
import { COLORS, FONT_SIZES } from "~/consts/style";

export const Title = styled.h1`
  font-size: ${FONT_SIZES.XXL}px;
`;

export const RequirementList = styled.ul`
  padding: 12px 20px 12px 40px;
  background-color: ${COLORS.GREEN50.code};
  border-radius: 8px;
`;
