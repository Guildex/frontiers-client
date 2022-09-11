import { Button, Radio, Row, Spacer, Text, Image } from '@nextui-org/react';

import { UserRole } from '~/@generated/graphql';
import { useRegistrationStep } from '~/contexts';

export const Step2 = () => {
  const [{ role }, setRegistrationStep] = useRegistrationStep();

  return (
    <>
      <Text>あなたのロールは、</Text>
      <Spacer y={0.5} />
      <Radio.Group
        size="sm"
        value={role}
        orientation="horizontal"
        onChange={(value) => {
          setRegistrationStep((prev) => ({
            ...prev,
            role: value as UserRole,
          }));
        }}
      >
        <Radio value={UserRole.Mentee} isSquared>
          メンティー
        </Radio>
        <Radio value={UserRole.Mentor} isSquared>
          メンター
        </Radio>
      </Radio.Group>
      <Spacer y={0.5} />
      <Text>です。</Text>

      {role === UserRole.Mentee && (
        <>
          <Image showSkeleton src="/registration/mentee.jpg" alt={UserRole.Mentee} />
          <Text>メンティーは</Text>
        </>
      )}

      <Spacer y={2} />

      <Row justify="space-between">
        <Button
          auto
          bordered
          onClick={() => {
            setRegistrationStep((prev) => ({
              ...prev,
              currentStep: prev.currentStep - 1,
            }));
          }}
        >
          戻る
        </Button>

        <Button
          auto
          onClick={() => {
            setRegistrationStep((prev) => ({
              ...prev,
              currentStep: prev.currentStep + 1,
            }));
          }}
        >
          次へ
        </Button>
      </Row>
    </>
  );
};
