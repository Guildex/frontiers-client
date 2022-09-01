import type { ReactNode } from 'react';

import * as Styled from './style';

type StepFormProps = {
  currentStep: number;
  children: ReactNode;
  steps: string[];
};

export const StepForm = (props: StepFormProps) => {
  const { currentStep, children, steps } = props;

  return (
    <div>
      <Styled.Stepper length={steps.length}>
        {steps.map((label, idx) => {
          const isActive = idx + 1 <= currentStep;

          return (
            <Styled.Step key={label} isActive={isActive}>
              <Styled.StepNumber>{idx + 1}</Styled.StepNumber>
              <Styled.StepLabel>{label}</Styled.StepLabel>
            </Styled.Step>
          );
        })}
      </Styled.Stepper>

      <Styled.Contents>{children}</Styled.Contents>
    </div>
  );
};
