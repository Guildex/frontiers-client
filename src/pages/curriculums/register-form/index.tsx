import type { NextPage } from 'next';
import { TaskDetail } from '~/components/templates/TaskDetail';
import { CURRICULUMS } from '~/consts/curriculums';

const RegisterForm: NextPage = () => {
  return (
    <>
      <TaskDetail {...CURRICULUMS.REGISTER_FORM}>
        {/* 回答はこちらに実装してください */}
      </TaskDetail>
    </>
  );
};

export default RegisterForm;
