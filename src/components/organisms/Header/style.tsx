import styled from 'styled-components';

import { COLORS, FONT_SIZES } from '~/consts/style';

export const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 20px;
  background-color: rgba(${COLORS.GRAY100.rgb}, 0.5);
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: rgb(${COLORS.GRAY300.rgb}) 0 10px 20px -10px;
  z-index: 10;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${COLORS.GRAY1000.code};
  text-decoration: none;
  font-size: ${FONT_SIZES.XL}px;
`;
