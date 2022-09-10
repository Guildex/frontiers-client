import type { NextPage } from 'next';
import { Suspense, useState } from 'react';

import { Head } from '~/components/atoms/Head';
import { AccountRegisterForm } from '~/components/organisms/AccountRegisterForm';
import { StepForm } from '~/components/organisms/StepForm';
import { NoHeaderLayout } from '~/components/templates/NoHeaderLayout';

const Activation: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <Head title="アカウント登録" hasNoIndex description="アカウント登録をするページです" />
      <Suspense fallback={<p>loading...</p>}>
        <NoHeaderLayout>
          <StepForm currentStep={currentStep} steps={['アカウント情報', 'ロールの選択', '完了']}>
            <AccountRegisterForm currentStep={currentStep} />
          </StepForm>
        </NoHeaderLayout>
      </Suspense>
    </>
  );
};

export default Activation;
