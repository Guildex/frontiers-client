import type { GetStaticPropsResult, NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { TaskDetail } from '~/components/templates/TaskDetail';
import type { Curriculum } from '~/consts/curriculums';
import { CURRICULUMS } from '~/consts/curriculums';

type Props = {
  curriculum: Curriculum;
};

const RegisterFormValidation: NextPage<Props> = (props: Props) => {
  const { curriculum } = props;

  return (
    <>
      <Head title={curriculum.title} description={curriculum.description} />

      <TaskDetail {...curriculum}>
        {/* 回答はこちらに実装してください */}
      </TaskDetail>
    </>
  );
};

export const getStaticProps = (): GetStaticPropsResult<Props> => {
  const curriculum = CURRICULUMS.REGISTER_FORM.DETAIL.REGISTER_FORM_VALIDATION;

  return {
    props: {
      curriculum,
    },
  };
};
export default RegisterFormValidation;
