import { useRouter } from 'next/router';

import type { Queries } from '~/const/href';

type EmptyObject = { [key: string]: never };

/**
 * クエリー文字列を返す処理
 */
export const useQueryString = () => {
  const router = useRouter();
  const query = router.query;

  return query as Queries | EmptyObject;
};
