import type { GetStaticPropsResult, NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { Curriculums } from '~/components/templates/Curriculums';
import { CURRICULUMS, IDS } from '~/const/curriculums';
import type { Curriculum, Id } from '~/const/curriculums';

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
      <Curriculums.RegisterForm.ErrorHandling {...{ id, title, curriculum }} />
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
