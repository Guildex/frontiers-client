import { Progress as _Progress } from '@nextui-org/react';
import styled, { css } from 'styled-components';

import { isTouchDisplay } from '~/const/browser';
import { COLORS } from '~/const/style';
import { mq } from '~/const/style/media';

const STEP_WIDTH = 24;
const BORDER_WIDTH = 8;
const GAP = isTouchDisplay ? 40 : 8;

export const Stepper = styled.ol<{ length: number }>`
  display: grid;
  grid-template-columns: ${({ length }) => `repeat(${length}, minmax(200px, ${length}fr))`};
  gap: ${GAP}px;
  list-style: none;
  text-align: center;

  ${mq.sp} {
    grid-template-columns: ${({ length }) => `repeat(${length}, minmax(120px, ${length}fr))`};
  }
`;

export const StepDot = styled.p`
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

export const Progress = styled(_Progress)`
  position: absolute;
  top: calc(${STEP_WIDTH - BORDER_WIDTH}px / 2);
  left: calc(-50% - (${STEP_WIDTH + GAP}px / 2));
  width: calc(100% + ${GAP / 2}px);
  border-radius: 0;

  > div {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export const Step = styled.li<{ isActive: boolean }>`
  position: relative;
  z-index: 100;

  ${({ isActive }) => css`
    ${StepDot} {
      z-index: 10;
      background-color: ${isActive ? COLORS.GRAY100.code : 'var(--nextui-colors-accents2)'};
      border: 6px solid var(--nextui-colors-${isActive ? 'green600' : 'accents2'});
    }

    ${StepLabel} {
      color: ${COLORS[isActive ? 'GRAY1000' : 'GRAY500'].code};
      font-weight: ${isActive ? 'bold' : 'normal'};
    }
  `}
`;
