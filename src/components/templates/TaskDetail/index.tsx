import type { ReactNode } from "react";
import * as Styled from "./style";
import type { Curriculum } from "~/consts/curriculums";

export type DetailProps = Curriculum;

/**
 * 課題の詳細を表示するコンポーネント
 * @param props {@link DetailProps}
 */
export const TaskDetail = (props: DetailProps) => {
  const { title, description, requirements } = props;

  return (
    <>
      <Styled.Title>{title}</Styled.Title>
      {description}

      <Styled.RequirementList>
        {requirements.map((requirement) => (
          <li key={requirement}>{requirement}</li>
        ))}
      </Styled.RequirementList>
    </>
  );
};
