import type { Id } from '~/consts/curriculums';
import { CURRICULUMS } from '~/consts/curriculums';

export type CurriculumProps = ReturnType<typeof getCurriculumProps>;

export const getCurriculumProps = (id: Id, key: string) => {
  const { LABEL, DETAIL } = CURRICULUMS[key];
  const curriculum = DETAIL[id];

  return {
    id,
    title: `${LABEL} / ${curriculum.title}`,
    curriculum,
  };
};
