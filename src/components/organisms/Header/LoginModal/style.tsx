import { Button } from '@nextui-org/react';
import styled, { keyframes } from 'styled-components';

import { COLORS } from '~/const/style';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
`;

export const GithubButton = styled(Button)`
  background-color: ${COLORS.GITHUB.code};
`;

export const LoadingIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spin} 0.5s infinite linear;
`;
