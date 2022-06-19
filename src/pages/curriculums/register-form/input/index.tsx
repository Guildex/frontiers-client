import type { GetStaticPropsResult, NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { TaskDetail } from '~/components/templates/TaskDetail';
import { CURRICULUMS, IDS } from '~/consts/curriculums';
import type { Curriculum, Id } from '~/consts/curriculums';

type Props = {
  id: Id;
  curriculum: Curriculum;
};

const Input: NextPage<Props> = (props: Props) => {
  const { id, curriculum } = props;

  return (
    <>
      <Head title={curriculum.title} description={curriculum.description} />

      <TaskDetail id={id} curriculum={curriculum}>
        {/* 回答はこちらに実装してください */}
      </TaskDetail>
    </>
  );
};

export const getStaticProps = (): GetStaticPropsResult<Props> => {
  const id = IDS.REGISTER_FORM_INPUT;
  const curriculum = CURRICULUMS.REGISTER_FORM.DETAIL.REGISTER_FORM_INPUT;

  return {
    props: {
      id,
      curriculum,
    },
  };
};

export default Input;
