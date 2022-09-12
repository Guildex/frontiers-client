import { Button as _Button } from '@nextui-org/react';
import styled from 'styled-components';

export const Button = styled(_Button)`
  &[aria-pressed='true'] {
    color: var(--nextui-colors-white);
    background: var(--nextui-colors-gradient);
    font-weight: bold;
  }
`;
