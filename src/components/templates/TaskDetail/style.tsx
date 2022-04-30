import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '~/consts/style';

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

export const Annotation = styled.p`
  margin-bottom: 20px;
`;

export const RequirementListBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-left: 8px solid ${COLORS.GREEN100.code};
  background-color: ${COLORS.GREEN50.code};
  border-radius: 12px;

  h1 {
    margin-bottom: 12px;
    font-size: ${FONT_SIZES.M}px;
  }
`;

export const RequirementHeading = styled.h1`
  display: flex;
  align-items: center;
`;

export const RequirementIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${COLORS.GREEN100.code};
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
  border: 1px solid ${COLORS.GRAY300.code};
  border-radius: 12px;
`;
