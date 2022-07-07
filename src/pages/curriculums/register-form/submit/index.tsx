import type { GetStaticPropsResult, NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { Curriculums } from '~/components/templates/Curriculums';
import type { Curriculum, Id } from '~/consts/curriculums';
import { IDS } from '~/consts/curriculums';
import { CURRICULUMS } from '~/consts/curriculums';

type Props = {
  id: Id;
  label: string;
  curriculum: Curriculum;
};

const RegisterFormSubmit: NextPage<Props> = (props: Props) => {
  const { id, label, curriculum } = props;
  const title = `${label} / ${curriculum.title}`;

  return (
    <>
      <Head title={title} description={curriculum.description} />
      <Curriculums.RegisterForm.Submit {...{ id, title, curriculum }} />
    </>
  );
};

export const getStaticProps = (): GetStaticPropsResult<Props> => {
  const { LABEL, DETAIL } = CURRICULUMS.REGISTER_FORM;
  const curriculum = DETAIL.REGISTER_FORM_SUBMIT;

  return {
    props: {
      id: IDS.REGISTER_FORM_SUBMIT,
      label: LABEL,
      curriculum,
    },
  };
};

export default RegisterFormSubmit;
