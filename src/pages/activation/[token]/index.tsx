import type { GetStaticPropsResult, NextPage, NextPageContext } from 'next';
import { useState } from 'react';

import { Head } from '~/components/atoms/Head';
import { AccountRegisterForm } from '~/components/organisms/AccountRegisterForm';
import { StepForm } from '~/components/organisms/StepForm';
import { NoHeaderLayout } from '~/components/templates/NoHeaderLayout';

type Props = {
  //
};

const Activation: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <Head title="アカウント登録" hasNoIndex description="アカウント登録をするページです" />
      <NoHeaderLayout>
        <StepForm currentStep={currentStep} steps={['アカウント情報', 'ロールの選択', '完了']}>
          <AccountRegisterForm currentStep={currentStep} />
        </StepForm>
      </NoHeaderLayout>
    </>
  );
};

export default Activation;

export const getServerSideProps = (ctx: NextPageContext): GetStaticPropsResult<Props> => {
  const { token } = ctx.query;
  console.log(token);

  return {
    props: {},
  };
};
