import type { Curriculum, Id } from '~/consts/curriculums';

import { TaskDetail } from '../../TaskDetail';

type AboutProps = {
  id: Id;
  title: string;
  curriculum: Curriculum;
};

export const About = (props: AboutProps) => {
  const { id, title, curriculum } = props;

  return <TaskDetail id={id} curriculum={{ ...curriculum, title }} />;
};
