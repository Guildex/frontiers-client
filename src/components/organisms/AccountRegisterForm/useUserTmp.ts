import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useGetUserTmpLazyQuery } from '~/@generated/graphql';
import { useRegistrationStep } from '~/contexts';

export const useUserTmp = () => {
  const router = useRouter();
  const token = router.query.token as string | undefined;
  const [, setRegistrationStep] = useRegistrationStep();
  const [exec, { loading: isLoading, data, error }] = useGetUserTmpLazyQuery();

  useEffect(() => {
    if (!token) return;

    void (async () => {
      const { data } = await exec({
        variables: {
          token,
        },
      });

      setRegistrationStep((prev) => ({
        ...prev,
        username: data?.userTmp?.username || '',
        email: data?.userTmp?.email || '',
      }));
    })();
  }, [token]);

  return {
    isLoading,
    data,
    error,
  };
};
