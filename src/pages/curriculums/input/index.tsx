import type { NextPage } from 'next';
import { TaskDetail } from '~/components/templates/TaskDetail';
import { CURRICULUMS } from '~/consts/curriculums';
import * as Styled from './style';

const Input: NextPage = () => {
  return (
    <>
      <TaskDetail {...CURRICULUMS.INPUT}>
        <form action="">
          <Styled.FormEmailTitle>
            メールアドレス
          </Styled.FormEmailTitle>
          <Styled.FormEmailInput
            type="email"
            placeholder='123abc@defg.com'
          />
        </form>
      </TaskDetail>
    </>
  );
};

export default Input;
