import { Collapse, Text } from '@nextui-org/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import type { Id } from '~/consts/curriculums';
import { CURRICULUMS, sectionKeys } from '~/consts/curriculums';

import * as Styled from './style';

/**
 * カリキュラムの一覧
 */
export const Nav = () => {
  const router = useRouter();

  return (
    <Collapse.Group shadow>
      {sectionKeys.map((sectionKey) => (
        <Collapse
          key={sectionKey}
          divider={false}
          title={
            <Text h2 size={16}>
              {CURRICULUMS[sectionKey].LABEL}
            </Text>
          }
          subtitle={
            <Text size={12} color="var(--nextui-colors-gray700)">
              {CURRICULUMS[sectionKey].DESCRIPTION}
            </Text>
          }
          expanded={router.asPath.startsWith(
            `/curriculums/${CURRICULUMS[sectionKey].PATH}`,
          )}
        >
          <Styled.List>
            {(Object.keys(CURRICULUMS[sectionKey].DETAIL) as Id[]).map(
              (chapterKey, idx) => {
                const curriculum = CURRICULUMS[sectionKey].DETAIL[chapterKey];
                const { path, title, isPublic } = curriculum;
                const href = `/curriculums/${CURRICULUMS[sectionKey].PATH}/${path}`;
                const text = `${idx + 1}. ${title}`;

                return (
                  <li key={chapterKey}>
                    {isPublic ? (
                      <NextLink href={href} passHref>
                        <Styled.Link isActive={router.asPath === href}>
                          {text}
                        </Styled.Link>
                      </NextLink>
                    ) : (
                      <Styled.UnpublishedLink>{text}</Styled.UnpublishedLink>
                    )}
                  </li>
                );
              },
            )}
          </Styled.List>
        </Collapse>
      ))}
    </Collapse.Group>
  );
};
