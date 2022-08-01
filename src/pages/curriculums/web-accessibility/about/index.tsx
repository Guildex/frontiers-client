import type { GetStaticPropsResult, NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { Curriculums } from '~/components/templates/Curriculums';
import { IDS } from '~/consts/curriculums';
import type { CurriculumProps } from '~/utils/getCurriculumProps';
import { getCurriculumProps } from '~/utils/getCurriculumProps';

const About: NextPage<CurriculumProps> = (props: CurriculumProps) => {
  const { id, title, curriculum } = props;

  return (
    <>
      <Head title={title} description={curriculum.description} />
      <Curriculums.WebAccessibility.About {...{ id, title, curriculum }} />
    </>
  );
};

export const getStaticProps = (): GetStaticPropsResult<CurriculumProps> => {
  const props = getCurriculumProps(IDS.WEB_ACCESSIBILITY_ABOUT, 'WEB_ACCESSIBILITY');

  return {
    props,
  };
};

export default About;
