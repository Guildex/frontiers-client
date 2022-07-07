import type { GetStaticPropsResult, NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { Curriculums } from '~/components/templates/Curriculums';
import { CURRICULUMS, IDS } from '~/consts/curriculums';
import type { Curriculum, Id } from '~/consts/curriculums';

type Props = {
  id: Id;
  label: string;
  curriculum: Curriculum;
};

const Input: NextPage<Props> = (props: Props) => {
  const { id, label, curriculum } = props;
  const title = `${label} / ${curriculum.title}`;

  return (
    <>
      <Head title={title} description={curriculum.description} />
      <Curriculums.RegisterForm.Input {...{ id, title, curriculum }} />
    </>
  );
};

export const getStaticProps = (): GetStaticPropsResult<Props> => {
  const { DETAIL, LABEL } = CURRICULUMS.REGISTER_FORM;
  const curriculum = DETAIL.REGISTER_FORM_INPUT;

  return {
    props: {
      id: IDS.REGISTER_FORM_INPUT,
      label: LABEL,
      curriculum,
    },
  };
};

export default Input;
