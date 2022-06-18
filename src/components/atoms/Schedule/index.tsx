import { Spacer, Table } from '@nextui-org/react';
import dayjs from 'dayjs';

import type { Curriculum } from '~/consts/curriculums';
import { CURRICULUMS, curriculumKeys } from '~/consts/curriculums';

import * as Styled from './style';

import 'dayjs/locale/es';

dayjs.locale('ja');

type Item = {
  key: Curriculum['id'];
  title: Curriculum['title'];
  cost: string;
  expectedDate: string;
};

const START_DATE = new Date();
const PRODUCTION_TIME_BY_DAY = 4;
const REVIEW_COST = 1.2;

export const Schedule = () => {
  const columns = [
    {
      key: 'title',
      label: 'カリキュラム内容',
    },
    {
      key: 'cost',
      label: '対応工数',
    },
    {
      key: 'expectedDate',
      label: '完了予定日',
    },
  ];
  const items = curriculumKeys.reduce<Item[]>((acc, key, idx) => {
    const { id, title, cost } = CURRICULUMS[key];
    const costWithReview = cost * REVIEW_COST;
    const prevCurriculum = acc[idx - 1] as Item | undefined;
    const durationByDay = Math.ceil(cost / PRODUCTION_TIME_BY_DAY);
    const date = prevCurriculum?.expectedDate ?? START_DATE;

    return [
      ...acc,
      {
        key: id,
        title,
        cost: `${costWithReview}時間`,
        expectedDate: dayjs(date)
          .add(durationByDay, 'day')
          .format('YYYY/MM/DD'),
      },
    ];
  }, []);

  return (
    <>
      <Styled.Section>
        <Styled.Heading h1>スケジュール</Styled.Heading>

        <Table aria-label="前提条件">
          <Table.Header>
            <Table.Column>開始日</Table.Column>
            <Table.Column>作業時間/日</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{dayjs(START_DATE).format('YYYY/MM/DD')}</Table.Cell>
              <Table.Cell>{PRODUCTION_TIME_BY_DAY}時間</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Spacer />

        <Table aria-label="スケジュール" selectionMode="single">
          <Table.Header columns={columns}>
            {columns.map(({ key, label }) => (
              <Table.Column key={key}>{label}</Table.Column>
            ))}
          </Table.Header>
          <Table.Body items={items}>
            {(item) => (
              <Table.Row key={item.key}>
                {(columnKey) => (
                  <Table.Cell>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    {item[columnKey]}
                  </Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Styled.Section>
    </>
  );
};
