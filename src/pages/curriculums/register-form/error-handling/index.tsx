import type { GetStaticPropsResult, NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { TaskDetail } from '~/components/templates/TaskDetail';
import { CURRICULUMS, IDS } from '~/consts/curriculums';
import type { Curriculum, Id } from '~/consts/curriculums';

type Props = {
  id: Id;
  label: string;
  curriculum: Curriculum;
};

const ErrorHandling: NextPage<Props> = (props: Props) => {
  const { id, label, curriculum } = props;
  const title = `${label} / ${curriculum.title}`;

  return (
    <>
      <Head title={title} description={curriculum.description} />
      <TaskDetail id={id} curriculum={{ ...curriculum, title }}>
        {/* 回答はこちらに実装してください */}
      </TaskDetail>
    </>
  );
};

export const getStaticProps = (): GetStaticPropsResult<Props> => {
  const { DETAIL, LABEL } = CURRICULUMS.REGISTER_FORM;
  const curriculum = DETAIL.REGISTER_FORM_ERROR_HANDLING;

  return {
    props: {
      id: IDS.REGISTER_FORM_ERROR_HANDLING,
      label: LABEL,
      curriculum,
    },
  };
};

export default ErrorHandling;
