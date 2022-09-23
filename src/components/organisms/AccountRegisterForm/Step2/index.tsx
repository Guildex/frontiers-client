import { Button, Spacer, Text, Image, Container } from '@nextui-org/react';

import { UserRole } from '~/@generated/graphql';
import { useRegistrationStep } from '~/contexts';

import * as Styled from './style';

export const Step2 = () => {
  const [{ role }, setRegistrationStep] = useRegistrationStep();

  return (
    <>
      <Text h4>あなたのロールを選択してください</Text>

      <Spacer y={2} />

      <Container display="flex" justify="center">
        <Button.Group color="gradient" ghost>
          <Styled.Button
            aria-pressed={role === UserRole.Mentee}
            onClick={() => {
              setRegistrationStep((prev) => ({
                ...prev,
                role: UserRole.Mentee,
              }));
            }}
          >
            メンティー
          </Styled.Button>
          <Styled.Button
            aria-pressed={role === UserRole.Mentor}
            onClick={() => {
              setRegistrationStep((prev) => ({
                ...prev,
                role: UserRole.Mentor,
              }));
            }}
          >
            メンター
          </Styled.Button>
        </Button.Group>
      </Container>

      <Spacer y={1} />

      {role === UserRole.Mentee && (
        <>
          <Image
            width={450}
            height={300}
            maxDelay={10000}
            showSkeleton
            src="/registration/mentee.jpg"
            alt={UserRole.Mentee}
          />
          <Text h5>メンティーとは？</Text>
          <Text size="$sm">
            メンティーは指導を受ける人、あるいはサポートを受ける人のことを指しており、
            当サービスに登録しているメンター（指導する人）とマッチングして学習を進めていきながらスキルアップを図ります。
          </Text>
        </>
      )}

      {role === UserRole.Mentor && (
        <>
          <Image
            width={450}
            height={300}
            maxDelay={10000}
            showSkeleton
            src="/registration/mentor.jpg"
            alt={UserRole.Mentor}
          />
          <Text h5>メンターとは？</Text>
          <Text size="$sm">
            メンターは指導をする人、あるいは学習のサポートをする人のことを指しており、
            当サービスに登録しているメンティー（指導を受ける人）とマッチングして当人のスキルアップをサポートしていきます。
          </Text>
        </>
      )}
    </>
  );
};
