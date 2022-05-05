import type { NextPage } from 'next';
import { TaskDetail } from '~/components/templates/TaskDetail';
import { CURRICULUMS } from '~/consts/curriculums';

const RegisterFormUI: NextPage = () => {
  return (
    <>
      <TaskDetail {...CURRICULUMS.REGISTER_FORM_UI}>
        {/* 回答はこちらに実装してください */}
      </TaskDetail>
    </>
  );
};

export default RegisterFormUI;
