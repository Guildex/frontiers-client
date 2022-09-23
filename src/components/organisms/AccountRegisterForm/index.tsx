import { Button, Row, Spacer } from '@nextui-org/react';

import { UserRole } from '~/@generated/graphql';
import { useRegistrationStep } from '~/contexts';

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import * as Styled from './style';

export const AccountRegisterForm = () => {
  const [{ steps, currentStep, role }, setRegistrationStep] = useRegistrationStep();
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length - 1;
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;

      case 2:
        return <Step2 />;

      case 3:
        return <Step3 />;

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
      <Styled.StepWrapper>
        {renderForm()}

        <Spacer y={2} />

        <Row justify="space-around">
          {!isFirstStep && (
            <Button
              auto
              bordered
              onPress={() => {
                setRegistrationStep((prev) => ({
                  ...prev,
                  currentStep: prev.currentStep - 1,
                }));
              }}
            >
              戻る
            </Button>
          )}

          {!isLastStep ? (
            <Button
              auto
              onPress={async () => {
                setRegistrationStep((prev) => ({
                  ...prev,
                  currentStep: prev.currentStep + 1,
                }));
              }}
            >
              次へ
            </Button>
          ) : (
            <Button
              auto
              onPress={(e) => {
                if (role === UserRole.Mentor) {
                  console.log('メンター');
                }

                if (role === UserRole.Mentee) {
                  console.log('メンティー');
                }
              }}
            >
              登録
            </Button>
          )}
        </Row>
      </Styled.StepWrapper>
    </Styled.Form>
  );
};
