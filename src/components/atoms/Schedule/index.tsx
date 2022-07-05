import { Spacer, Table } from '@nextui-org/react';
import dayjs from 'dayjs';
import type { ReactNode } from 'react';
import { useLocalStorage } from 'react-use';

import { Icon } from '~/components/atoms/Icon';
import type { Curriculum, Id } from '~/consts/curriculums';
import { CURRICULUMS, sectionKeys } from '~/consts/curriculums';
import type { IconName } from '~/consts/icon';
import { FONT_SIZES } from '~/consts/style';

import * as Styled from './style';

import 'dayjs/locale/es';

dayjs.locale('ja');

type Item = {
  key: Curriculum['path'];
  isChecked: boolean;
  sectionTitle: ReactNode;
  title: Curriculum['title'];
  cost: string;
  expectedDate: string;
};

type Schedule = Curriculum & {
  iconName: IconName;
  sectionTitle: string;
};

const START_DATE = new Date();
const PRODUCTION_TIME_BY_DAY = 4;
const REVIEW_COST = 1.2;

const Schedule = () => {
  const [values, setValue] = useLocalStorage<string[]>('schedule');
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
      label: '対応工数（レビュー込み）',
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
        iconName: CURRICULUMS[sectionKey].ICON_NAME,
        sectionTitle: CURRICULUMS[sectionKey].LABEL,
        title: curriculum.title,
      };
    });

    return [...acc, ...chapters];
  }, []);
  const items = curriculums.reduce<Item[]>((acc, current) => {
    const { iconName, sectionTitle, title, cost } = current;
    const key = `${sectionTitle}/${title}`;
    const durationByDay = Math.ceil(cost / PRODUCTION_TIME_BY_DAY);
    const isChecked = !!values?.find((selectedKey) => selectedKey === key);
    const lastCheckedCurriculum = acc
      .filter(({ isChecked }) => !isChecked)
      .at(-1);
    const date = lastCheckedCurriculum?.expectedDate ?? START_DATE;

    return [
      ...acc,
      {
        key,
        isChecked,
        sectionTitle: (
          <Styled.SectionTitleBox>
            <Icon name={iconName} size={32} />
            <p>{sectionTitle}</p>
          </Styled.SectionTitleBox>
        ),
        title,
        cost: `${Math.floor(cost * REVIEW_COST * 100) / 100}時間`,
        expectedDate: isChecked
          ? '完了'
          : dayjs(date).add(durationByDay, 'day').format('YYYY/MM/DD'),
      },
    ];
  }, []);
  const completedSchedule = values?.map(
    (value) => items.find(({ key }) => key === value)?.key ?? '',
  );

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
          selectionMode="multiple"
          css={{
            fontSize: FONT_SIZES.S,
          }}
          defaultSelectedKeys={new Set(completedSchedule)}
          allowDuplicateSelectionEvents={false}
          onSelectionChange={(key) => {
            const selectedValues =
              key !== 'all'
                ? Array.from(key).map(
                    (selected) =>
                      items.find(({ key }) => selected === key)?.key ?? '',
                  )
                : // eslint-disable-next-line @typescript-eslint/naming-convention
                  items.map(({ key }) => key);

            setValue(selectedValues);
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

export default Schedule;
