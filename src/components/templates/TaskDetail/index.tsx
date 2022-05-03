import dynamic from 'next/dynamic';
import type { TaskDetailProps } from './TaskDetail';

const DynamicTaskDetail = dynamic(() => import('./TaskDetail'), { ssr: false });

export const TaskDetail = (props: TaskDetailProps) => {
  return <DynamicTaskDetail {...props} />;
};
