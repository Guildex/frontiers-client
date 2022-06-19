import type { ReactNode } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import type { Curriculum, Id } from '~/consts/curriculums';
import { ICON_SIZES } from '~/consts/style';

import { renderExample } from './renderExample';
import * as Styled from './style';

export type TaskDetailProps = {
  children: ReactNode;
  id: Id;
  curriculum: Curriculum;
};

/**
 * 課題の詳細を表示するコンポーネント
 * @param props {@link DetailProps}
 */
export const TaskDetail = (props: TaskDetailProps) => {
  const { id, curriculum, children } = props;
  const { title, description, requirements } = curriculum;
  const example = renderExample(id);

  return (
    <>
      <Styled.CurriculumTitle>{title}</Styled.CurriculumTitle>

      <Styled.Description>
        {description.split('\n').map((txt) => (
          <p key={txt}>{txt}</p>
        ))}
      </Styled.Description>

      <Styled.RequirementListBox>
        <Styled.RequirementHeading>
          <Styled.RequirementIcon>
            <FaInfoCircle size={ICON_SIZES.L} />
          </Styled.RequirementIcon>
          仕様
        </Styled.RequirementHeading>
        <ul>
          {requirements.map((requirement) => (
            <li key={requirement}>{requirement}</li>
          ))}
        </ul>
      </Styled.RequirementListBox>

      {example && (
        <>
          <Styled.Section>
            <Styled.Title>サンプル</Styled.Title>
            <Styled.Contents>{example}</Styled.Contents>
          </Styled.Section>

          <Styled.Section>
            <Styled.Title>実装</Styled.Title>
            <Styled.Annotation>
              サンプルを参考に実装してください
            </Styled.Annotation>
            <Styled.Contents>{children}</Styled.Contents>
          </Styled.Section>
        </>
      )}
    </>
  );
};
