import type { NextPage } from 'next';
import { TaskDetail } from '~/components/templates/TaskDetail';
import { CURRICULUMS } from '~/consts/curriculums';

const Input: NextPage = () => {
  return (
    <>
      <TaskDetail {...CURRICULUMS.INPUT}>
        {/* 回答はこちらに実装してください */}
      </TaskDetail>
    </>
  );
};

export default Input;
