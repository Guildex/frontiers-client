import styled, { css } from 'styled-components';
import { COLORS, FONT_SIZES } from '~/consts/style';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  > li {
    margin-top: 8px;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

export const Link = styled.a<{ isActive: boolean }>`
  display: block;
  padding: 12px 20px;
  color: ${COLORS.GRAY1000.code};
  font-size: ${FONT_SIZES.S}px;
  text-decoration: none;
  transition: background-color 0.3s;
  border-radius: 20px;

  ${({ isActive }) => css`
    background-color: ${isActive ? COLORS.GRAY200.code : 'transparent'};
    font-weight: ${isActive ? 'bold' : 'normal'};
  `}

  &:hover {
    background-color: ${COLORS.GRAY200.code};
  }
`;
