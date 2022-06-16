import type { NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { TaskDetail } from '~/components/templates/TaskDetail';
import { CURRICULUMS } from '~/consts/curriculums';

const RegisterFormValidation: NextPage = () => {
  const { title, description } = CURRICULUMS.REGISTER_FORM_VALIDATION;

  return (
    <>
      <Head title={title} description={description} />

      <TaskDetail {...CURRICULUMS.REGISTER_FORM_VALIDATION}>
        {/* 回答はこちらに実装してください */}
      </TaskDetail>
    </>
  );
};

export function getStaticProps() {
  return {
    props: {},
  };
}

export default RegisterFormValidation;
