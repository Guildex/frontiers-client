import type { GetStaticProps, NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { Curriculums } from '~/components/templates/Curriculums';
import type { Curriculum, Id } from '~/const/curriculums';
import { IDS } from '~/const/curriculums';
import { CURRICULUMS } from '~/const/curriculums';

type Props = {
  id: Id;
  label: string;
  curriculum: Curriculum;
};

const RegisterFormUI: NextPage<Props> = (props: Props) => {
  const { id, label, curriculum } = props;
  const title = `${label} / ${curriculum.title}`;

  return (
    <>
      <Head title={title} description={curriculum.description} />
      <Curriculums.RegisterForm.Ui {...{ id, title, curriculum }} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const { DETAIL, LABEL } = CURRICULUMS.REGISTER_FORM;
  const curriculum = DETAIL.REGISTER_FORM_UI;

  return {
    props: {
      id: IDS.REGISTER_FORM_UI,
      label: LABEL,
      curriculum,
    },
  };
};

export default RegisterFormUI;
