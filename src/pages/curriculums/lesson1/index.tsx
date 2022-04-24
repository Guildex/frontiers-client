import type { NextPage } from "next";
import { TaskDetail } from "~/components/templates/TaskDetail";
import { CURRICULUMS } from "~/consts/curriculums";

const Lesson1: NextPage = () => {
  return (
    <>
      <TaskDetail {...CURRICULUMS.INPUT}>hoge</TaskDetail>
    </>
  );
};

export default Lesson1;
