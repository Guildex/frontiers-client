import { Table } from '@nextui-org/react';
import { useEffect, useRef } from 'react';
import { useLocalStorage } from 'react-use';

import type { Curriculum, Id } from '~/consts/curriculums';
import { FONT_SIZES } from '~/consts/style';

type RequirementsProps = {
  id: Id;
  path: Curriculum['path'];
  requirements: Curriculum['requirements'];
};

const Requirements = (props: RequirementsProps) => {
  const ref = useRef<HTMLTableElement>(null);
  const { id, path, requirements } = props;

  const [values, setValue] = useLocalStorage<number[]>(
    `completed/${id}/${path}`,
  );
  const completed = values?.map((value) => requirements[value]);

  useEffect(() => {
    ref.current?.addEventListener('error', console.log);
  }, []);

  return (
    <Table
      ref={ref}
      aria-label="仕様"
      selectionMode="multiple"
      color="success"
      compact
      css={{
        width: '100%',
        fontSize: FONT_SIZES.S,
      }}
      defaultSelectedKeys={new Set(completed)}
      allowDuplicateSelectionEvents={false}
      onSelectionChange={(key) => {
        const selectedValues =
          key !== 'all'
            ? Array.from(key).map((selected) =>
                requirements.findIndex((key) => selected === key),
              )
            : // eslint-disable-next-line @typescript-eslint/naming-convention
              requirements.map((_, idx) => idx);

        setValue(selectedValues);
      }}
    >
      <Table.Header>
        <Table.Column>期待値</Table.Column>
      </Table.Header>
      <Table.Body>
        {requirements.map((requirement) => (
          <Table.Row key={requirement}>
            <Table.Cell>{requirement}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default Requirements;
