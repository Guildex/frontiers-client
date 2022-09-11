import { useRegistrationStep } from '~/contexts';

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import * as Styled from './style';

export const AccountRegisterForm = () => {
  const [{ currentStep }] = useRegistrationStep();
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;

      case 2:
        return <Step2 />;

      default:
        return null;
    }
  };

  return (
    <Styled.Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <Styled.StepWrapper>{renderForm()}</Styled.StepWrapper>
    </Styled.Form>
  );
};
