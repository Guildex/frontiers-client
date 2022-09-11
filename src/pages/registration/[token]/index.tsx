import type { NextPage } from 'next';
import { Suspense } from 'react';

import { Head } from '~/components/atoms/Head';
import { AccountRegisterForm } from '~/components/organisms/AccountRegisterForm';
import { StepForm } from '~/components/organisms/StepForm';
import { NoHeaderLayout } from '~/components/templates/NoHeaderLayout';
import { RegistrationStepProvider } from '~/contexts';

const Activation: NextPage = () => {
  return (
    <>
      <Head title="アカウント登録" hasNoIndex description="アカウント登録をするページです" />
      <Suspense fallback={<p>loading...</p>}>
        <NoHeaderLayout>
          <div>
            <RegistrationStepProvider>
              <StepForm />
              <AccountRegisterForm />
            </RegistrationStepProvider>
          </div>
        </NoHeaderLayout>
      </Suspense>
    </>
  );
};

export default Activation;
