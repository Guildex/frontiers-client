import { useRegistrationStep } from '~/contexts';

import * as Styled from './style';

export const StepForm = () => {
  const steps = ['アカウント情報', 'ロールの選択', '完了'];
  const [{ currentStep }] = useRegistrationStep();

  return (
    <Styled.Stepper length={steps.length}>
      {steps.map((label, idx) => {
        const isActive = idx + 1 <= currentStep;

        return (
          <Styled.Step key={label} isActive={isActive} style={{ zIndex: steps.length - (idx + 1) }}>
            {idx !== 0 && <Styled.Progress striped size="sm" color="success" value={isActive ? 100 : 0} />}
            <Styled.StepDot />
            <Styled.StepLabel>{label}</Styled.StepLabel>
          </Styled.Step>
        );
      })}
    </Styled.Stepper>
  );
};
