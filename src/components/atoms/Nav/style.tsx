import styled, { css } from 'styled-components';
import { COLORS } from '~/consts/style';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Link = styled.a<{ isActive: boolean }>`
  display: block;
  padding: 12px 20px;
  color: ${COLORS.GRAY1000.code};
  text-decoration: none;
  transition: background-color 0.3s;
  border-radius: 0 40px 40px 0;

  ${({ isActive }) => css`
    border-left: 6px solid ${isActive ? COLORS.BLUE100.code : 'transparent'};
    background-color: ${isActive ? COLORS.GRAY200.code : 'transparent'};
    font-weight: ${isActive ? 'bold' : 'normal'};
  `}

  &:hover {
    background-color: ${COLORS.GRAY200.code};
  }
`;
