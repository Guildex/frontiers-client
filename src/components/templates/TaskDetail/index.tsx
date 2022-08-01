import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

import type { Curriculum, Id } from '~/consts/curriculums';

import { renderExample } from './renderExample';
import * as Styled from './style';

export type TaskDetailProps = {
  children: ReactNode;
  id: Id;
  curriculum: Curriculum;
};

const DynamicRequirements = dynamic(() => import('./Requirements'), {
  ssr: false,
});

/**
 * 課題の詳細を表示するコンポーネント
 *
 * @param props {@link DetailProps}
 */
export const TaskDetail = (props: TaskDetailProps) => {
  const { id, curriculum, children } = props;
  const { path, title, description, requirements } = curriculum;

  const example = renderExample(id);

  return (
    <>
      <Styled.CurriculumTitle>{title}</Styled.CurriculumTitle>

      <Styled.Description>
        {description.split('\n').map((txt) => (
          <p key={txt}>{txt}</p>
        ))}
      </Styled.Description>

      <Styled.Section>
        <Styled.Title>仕様</Styled.Title>
        <DynamicRequirements id={id} path={path} requirements={requirements} />
      </Styled.Section>

      {example && (
        <>
          <Styled.Section>
            <Styled.Title>サンプル</Styled.Title>
            <Styled.Contents>{example}</Styled.Contents>
          </Styled.Section>

          <Styled.Section>
            <Styled.Title>実装</Styled.Title>
            <Styled.Annotation>サンプルを参考に実装してください</Styled.Annotation>
            <Styled.Contents>{children}</Styled.Contents>
          </Styled.Section>
        </>
      )}
    </>
  );
};
