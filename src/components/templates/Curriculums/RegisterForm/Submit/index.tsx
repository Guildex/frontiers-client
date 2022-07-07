import { TaskDetail } from '~/components/templates/TaskDetail';
import type { Curriculum, Id } from '~/consts/curriculums';

type SubmitProps = {
  id: Id;
  title: string;
  curriculum: Curriculum;
};

export const Submit = (props: SubmitProps) => {
  const { id, title, curriculum } = props;

  return (
    <TaskDetail id={id} curriculum={{ ...curriculum, title }}>
      {/* 回答はこちらに実装してください */}
    </TaskDetail>
  );
};
