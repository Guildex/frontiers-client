import { TaskDetail } from '~/components/templates/TaskDetail';
import type { Curriculum, Id } from '~/const/curriculums';

type ErrorHandlingProps = {
  id: Id;
  title: string;
  curriculum: Curriculum;
};

export const ErrorHandling = (props: ErrorHandlingProps) => {
  const { id, title, curriculum } = props;

  return (
    <TaskDetail id={id} curriculum={{ ...curriculum, title }}>
      {/* 回答はこちらに実装してください */}
    </TaskDetail>
  );
};
