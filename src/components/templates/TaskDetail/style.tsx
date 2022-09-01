import styled from 'styled-components';

import { FONT_SIZES } from '~/const/style';

export const CurriculumTitle = styled.h1`
  margin-bottom: 20px;
  font-size: ${FONT_SIZES.XXL}px;
`;

export const Section = styled.section`
  margin-top: 40px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: ${FONT_SIZES.XL}px;
`;

export const Description = styled.div`
  line-height: 1.6;

  p {
    margin-top: 12px;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

export const Annotation = styled.p`
  margin-bottom: 20px;
`;

export const ExampleBox = styled.div`
  margin-top: 40px;
`;

export const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 20px;
  border: 1px solid var(--nextui-colors-border);
  border-radius: 12px;
`;
