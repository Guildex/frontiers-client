import { ICON_NAMES } from '~/const/icon';

const ID = 'UNIT_TEST';

export const IDS = {
  UNIT_TEST_PROVISION: `${ID}_PROVISION`,
} as const;

export const UNIT_TEST = {
  PATH: 'unit-test',
  ICON_NAME: ICON_NAMES.TEST,
  LABEL: 'ユニットテスト実装',
  DESCRIPTION: 'Jest + React Testing Library',
  DETAIL: {
    [IDS.UNIT_TEST_PROVISION]: {
      isPublic: false,
      path: 'provision',
      cost: 30,
      title: 'ライブラリの導入',
      description: '',
      requirements: [],
    },
  },
};
