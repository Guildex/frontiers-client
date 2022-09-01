import type { Id } from '~/const/curriculums';
import { CURRICULUMS } from '~/const/curriculums';

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
