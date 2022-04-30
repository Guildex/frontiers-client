import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { CURRICULUMS } from '~/consts/curriculums';
import type { CurriculumKeys } from '~/consts/curriculums';
import * as Styled from './style';

/**
 * カリキュラムの一覧
 */
export const Nav = () => {
  const router = useRouter();

  return (
    <Styled.List>
      {(Object.keys(CURRICULUMS) as CurriculumKeys[]).map((key, idx) => {
        const path = `/curriculums/${CURRICULUMS[key].id}`;

        return (
          <li key={CURRICULUMS[key].id}>
            <NextLink href={path} passHref>
              <Styled.Link isActive={router.asPath === path}>
                Lesson{idx + 1}. {CURRICULUMS[key].title}
              </Styled.Link>
            </NextLink>
          </li>
        );
      })}
    </Styled.List>
  );
};
