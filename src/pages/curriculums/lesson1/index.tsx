import type { NextPage } from "next";
import { TaskDetail } from "~/components/templates/TaskDetail";
import { CURRICULUMS } from "~/consts/curriculums";

const Lesson1: NextPage = () => {
  return (
    <>
      <TaskDetail {...CURRICULUMS.INPUT}>
        {/*
          以下に回答となるコードを記載してください。 
          他のディレクトリにファイル等を作成しても問題ありません。
        */}
      </TaskDetail>
    </>
  );
};

export default Lesson1;
