import styled from 'styled-components';

import { mq } from '~/const/style/media';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  ${mq.sp} {
    padding: 12px;
  }
`;
