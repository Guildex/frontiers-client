import { TaskDetail } from '~/components/templates/TaskDetail';
import type { Curriculum, Id } from '~/consts/curriculums';

type ValidationProps = {
  id: Id;
  title: string;
  curriculum: Curriculum;
};

export const Validation = (props: ValidationProps) => {
  const { id, title, curriculum } = props;

  return (
    <TaskDetail id={id} curriculum={{ ...curriculum, title }}>
      {/* 回答はこちらに実装してください */}
    </TaskDetail>
  );
};
