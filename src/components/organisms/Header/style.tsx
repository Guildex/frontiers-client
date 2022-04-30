import styled from "styled-components";
import { COLORS, FONT_SIZES } from "~/consts/style";
import { FONT_FAMILY } from "~/consts/style/fontFamily";

export const Header = styled.header`
  position: sticky;
  padding: 20px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${COLORS.GRAY1000.code};
  text-decoration: none;
  font-size: ${FONT_SIZES.XL}px;
`;
