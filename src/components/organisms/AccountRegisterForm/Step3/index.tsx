import { Input, Spacer, Text, Textarea } from '@nextui-org/react';

import { UserRole } from '~/@generated/graphql';
import { useRegistrationStep } from '~/contexts';

export const Step3 = () => {
  const [{ role, productionHourByDay, objective }, setRegistrationStep] = useRegistrationStep();

  return (
    <>
      {role === UserRole.Mentee && (
        <>
          <Text h4>あなたの学習スタイルについて記載してください</Text>
          <Spacer y={1} />
          <Text size="$sm">※ あとで入力することも可能です</Text>
          <Spacer y={2} />
          <Input
            label="学習に充てられる1日の平均時間"
            type="number"
            value={productionHourByDay}
            labelRight="hour"
            onChange={(e) => {
              setRegistrationStep((prev) => ({
                ...prev,
                productionHourByDay: parseInt(e.currentTarget.value, 10),
              }));
            }}
          />
          <Spacer y={1} />
          <Textarea
            label="学習目標"
            width="100%"
            value={objective}
            placeholder="直近の学習目標を記入してください"
            onChange={(e) => {
              setRegistrationStep((prev) => ({
                ...prev,
                objective: e.currentTarget.value,
              }));
            }}
          />
        </>
      )}

      {role === UserRole.Mentor && (
        <>
          <Text h4>あなたのことについて教えてください</Text>
          <Spacer y={1} />
          <Text size="$sm">※ あとで入力することも可能です</Text>
          <Spacer y={2} />
          <Textarea label="自己紹介" width="100%" placeholder="自己紹介を入力してください" />
        </>
      )}
    </>
  );
};
