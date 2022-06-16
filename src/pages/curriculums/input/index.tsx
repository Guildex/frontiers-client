import type { NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { TaskDetail } from '~/components/templates/TaskDetail';
import { CURRICULUMS } from '~/consts/curriculums';

const Input: NextPage = () => {
  const { title, description } = CURRICULUMS.INPUT;

  return (
    <>
      <Head title={title} description={description} />

      <TaskDetail {...CURRICULUMS.INPUT}>
        {/* 回答はこちらに実装してください */}
      </TaskDetail>
    </>
  );
};

export function getStaticProps() {
  return {
    props: {},
  };
}

export default Input;
