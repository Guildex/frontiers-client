import { TaskDetail } from '~/components/templates/TaskDetail';
import type { Curriculum, Id } from '~/const/curriculums';

import { Answer } from './Answer';

type SubmitProps = {
  id: Id;
  title: string;
  curriculum: Curriculum;
};

export const Submit = (props: SubmitProps) => {
  const { id, title, curriculum } = props;

  return (
    <TaskDetail id={id} curriculum={{ ...curriculum, title }}>
      <Answer />
    </TaskDetail>
  );
};
