import type { GetStaticProps, NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { TaskDetail } from '~/components/templates/TaskDetail';
import type { Curriculum } from '~/consts/curriculums';
import { CURRICULUMS } from '~/consts/curriculums';

type Props = {
  curriculum: Curriculum;
};

const RegisterFormUI: NextPage<Props> = (props: Props) => {
  const { curriculum } = props;

  return (
    <>
      <Head title={curriculum.title} description={curriculum.description} />

      <TaskDetail {...CURRICULUMS.REGISTER_FORM.DETAIL.REGISTER_FORM_UI}>
        {/* 回答はこちらに実装してください */}
      </TaskDetail>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const curriculum = CURRICULUMS.REGISTER_FORM.DETAIL.REGISTER_FORM_UI;

  return {
    props: {
      curriculum,
    },
  };
};

export default RegisterFormUI;
