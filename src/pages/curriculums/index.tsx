import type { NextPage } from 'next';

import { Head } from '~/components/atoms/Head';
import { Schedule } from '~/components/atoms/Schedule';

const Curriculums: NextPage = () => {
  return (
    <>
      <Head
        title="カリキュラム一覧"
        description="当カリキュラムで取り組む内容の一覧です。"
      />
      <Schedule />
    </>
  );
};

export default Curriculums;
