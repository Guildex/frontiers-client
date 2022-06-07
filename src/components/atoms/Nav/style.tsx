import styled, { css } from 'styled-components';

import { COLORS, FONT_SIZES } from '~/consts/style';

const baseStyle = css`
  display: block;
  padding: 12px 20px;
  font-size: ${FONT_SIZES.S}px;
  border-radius: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${COLORS.GRAY200.code};
  }
`;

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
  ${baseStyle};

  color: ${COLORS.GRAY1000.code};
  text-decoration: none;

  ${({ isActive }) => css`
    background-color: ${isActive ? COLORS.GRAY200.code : 'transparent'};
    font-weight: ${isActive ? 'bold' : 'normal'};
  `}
`;

export const UnpublishedLink = styled.div`
  ${baseStyle};

  color: ${COLORS.GRAY400.code};
  cursor: pointer;
`;
