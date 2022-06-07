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
        const { id, title, isPublic } = CURRICULUMS[key];

        return (
          <li key={id}>
            {isPublic ? (
              <NextLink href={path} passHref>
                <Styled.Link isActive={router.asPath === path}>
                  Lesson{idx + 1}. {title}
                </Styled.Link>
              </NextLink>
            ) : (
              <Styled.UnpublishedLink>
                Lesson{idx + 1}. {title}
              </Styled.UnpublishedLink>
            )}
          </li>
        );
      })}
    </Styled.List>
  );
};
