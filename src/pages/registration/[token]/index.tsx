import { Button, Spacer, Text } from '@nextui-org/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Head } from '~/components/atoms/Head';
import { AccountRegisterForm } from '~/components/organisms/AccountRegisterForm';
import { useUserTmp } from '~/components/organisms/AccountRegisterForm/useUserTmp';
import { StepForm } from '~/components/organisms/StepForm';
import { NoHeaderLayout } from '~/components/templates/NoHeaderLayout';
import { PATHS } from '~/const/paths';
import { RegistrationStepProvider } from '~/contexts';

const Activation: NextPage = () => {
  const { error } = useUserTmp();
  const router = useRouter();

  return (
    <>
      <Head title="アカウント登録" hasNoIndex description="アカウント登録をするページです" />
      <NoHeaderLayout>
        <div>
          {!error ? (
            <RegistrationStepProvider>
              <StepForm />
              <AccountRegisterForm />
            </RegistrationStepProvider>
          ) : (
            <>
              <Text color="error">{error.message}</Text>
              <Spacer y={1} />
              <Button
                onPress={() => {
                  void router.push(PATHS.HOME);
                }}
              >
                トップへ
              </Button>
            </>
          )}
        </div>
      </NoHeaderLayout>
    </>
  );
};

export default Activation;
