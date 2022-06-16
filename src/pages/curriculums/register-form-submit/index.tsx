import type { NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { TaskDetail } from '~/components/templates/TaskDetail';
import { CURRICULUMS } from '~/consts/curriculums';

const RegisterFormSubmit: NextPage = () => {
  const { title, description } = CURRICULUMS.REGISTER_FORM_SUBMIT;

  return (
    <>
      <Head title={title} description={description} />

      <TaskDetail {...CURRICULUMS.REGISTER_FORM_SUBMIT}>
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

export default RegisterFormSubmit;
