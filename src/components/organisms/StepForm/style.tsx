import styled from 'styled-components';

import { COLORS } from '~/const/style';

const STEP_WIDTH = 24;
const BORDER_WIDTH = 8;
const GAP = 40;

export const Stepper = styled.ol<{ length: number }>`
  display: grid;
  grid-template-columns: ${({ length }) => `repeat(${length}, minmax(200px, ${length}fr))`};
  gap: ${GAP}px;
  list-style: none;
  text-align: center;
`;

export const StepNumber = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${STEP_WIDTH}px;
  height: ${STEP_WIDTH}px;
  margin: 0 auto;
  border-radius: 50%;
`;

export const StepLabel = styled.p`
  margin-top: 12px;
`;

export const Step = styled.li<{ isActive: boolean }>`
  position: relative;

  &::after {
    position: absolute;
    top: calc(${STEP_WIDTH - BORDER_WIDTH}px / 2);
    right: calc(-50% - (${STEP_WIDTH + GAP}px / 2));
    display: block;
    content: '';
    width: calc(100% + ${GAP / 2}px);
    height: ${BORDER_WIDTH}px;
    background-color: ${COLORS.GRAY200.code};
  }

  &:last-of-type {
    &::after {
      display: none;
    }
  }

  ${({ isActive }) => `
    ${StepNumber} {
      background-color: ${COLORS[isActive ? 'GRAY100' : 'GRAY200'].code};
      border: 6px solid ${COLORS[isActive ? 'GREEN300' : 'GRAY200'].code};
    }

    ${StepLabel} {
      color: ${COLORS[isActive ? 'GRAY1000' : 'GRAY500'].code};
      font-weight: ${isActive ? 'bold' : 'normal'};
    }
  `}
`;

export const Contents = styled.div`
  display: flex;
  justify-content: center;
`;
