import type { NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { TaskDetail } from '~/components/templates/TaskDetail';
import { CURRICULUMS } from '~/consts/curriculums';

const RegisterFormUI: NextPage = () => {
  const { title, description } = CURRICULUMS.REGISTER_FORM_UI;

  return (
    <>
      <Head title={title} description={description} />

      <TaskDetail {...CURRICULUMS.REGISTER_FORM_UI}>
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

export default RegisterFormUI;
