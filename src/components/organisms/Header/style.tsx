import styled from 'styled-components';

import { COLORS, FONT_SIZES } from '~/consts/style';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 20px;
  background-color: rgba(${COLORS.GRAY100.rgb}, 0.5);
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: rgb(${COLORS.GRAY300.rgb}) 0 10px 20px -10px;
  z-index: 1000;
`;

export const LeftContents = styled.div`
  display: flex;
`;

export const RightContents = styled.div``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${COLORS.GRAY1000.code};
  text-decoration: none;
  font-size: ${FONT_SIZES.XL}px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const NavList = styled.ul`
  list-style: none;
`;

export const NavLink = styled.a`
  color: ${COLORS.BLUE100.code};
  text-decoration: none;
`;

export const IconLink = styled.a`
  color: ${COLORS.GRAY1000.code};
`;
