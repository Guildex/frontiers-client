import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Head } from '~/components/atoms/Head';

const Schedule = dynamic(() => import('~/components/atoms/Schedule'), {
  ssr: false,
});

const Curriculums: NextPage = () => {
  return (
    <>
      <Head title="カリキュラム一覧" description="当カリキュラムで取り組む内容の一覧です。" />
      <Schedule />
    </>
  );
};

export default Curriculums;
