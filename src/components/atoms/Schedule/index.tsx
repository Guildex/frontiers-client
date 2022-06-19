import { Spacer, Table } from '@nextui-org/react';
import dayjs from 'dayjs';

import type { Curriculum, Id } from '~/consts/curriculums';
import { CURRICULUMS, sectionKeys } from '~/consts/curriculums';
import { FONT_SIZES } from '~/consts/style';

import * as Styled from './style';

import 'dayjs/locale/es';

dayjs.locale('ja');

type Item = {
  key: Curriculum['path'];
  title: Curriculum['title'];
  cost: string;
  expectedDate: string;
};

type Schedule = Curriculum & {
  sectionTitle: string;
};

const START_DATE = new Date();
const PRODUCTION_TIME_BY_DAY = 4;
const REVIEW_COST = 1.2;

export const Schedule = () => {
  const columns = [
    {
      key: 'sectionTitle',
      label: 'セクション区分',
    },
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
  const curriculums = sectionKeys.reduce<Schedule[]>((acc, sectionKey) => {
    const chapterKeys = Object.keys(CURRICULUMS[sectionKey].DETAIL) as Id[];
    const chapters = chapterKeys.map((chapterKey) => {
      const curriculum = CURRICULUMS[sectionKey].DETAIL[chapterKey];

      return {
        ...curriculum,
        sectionTitle: CURRICULUMS[sectionKey].LABEL,
        title: curriculum.title,
      };
    });

    return [...acc, ...chapters];
  }, []);
  const items = curriculums.reduce<Item[]>((acc, current, idx) => {
    const { path, sectionTitle, title, cost } = current;
    const costWithReview = cost * REVIEW_COST;
    const prevCurriculum = acc[idx - 1] as Item | undefined;
    const durationByDay = Math.ceil(cost / PRODUCTION_TIME_BY_DAY);
    const date = prevCurriculum?.expectedDate ?? START_DATE;

    return [
      ...acc,
      {
        key: path,
        sectionTitle,
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

        <Table
          aria-label="前提条件"
          css={{
            fontSize: FONT_SIZES.S,
          }}
        >
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

        <Table
          aria-label="スケジュール"
          selectionMode="single"
          css={{
            fontSize: FONT_SIZES.S,
          }}
        >
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
