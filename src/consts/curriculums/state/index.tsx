import { ICON_NAMES } from '~/consts/icon';

const ID = 'STATE';

export const IDS = {
  STATE_PROVISION: `${ID}_PROVISION`,
} as const;

export const STATE = {
  PATH: 'state',
  ICON_NAME: ICON_NAMES.REACT,
  LABEL: '状態管理',
  DESCRIPTION: 'React Context API',
  DETAIL: {
    [IDS.STATE_PROVISION]: {
      isPublic: false,
      path: 'how-to-use',
      cost: 20,
      title: '概念と使い方',
      description: '',
      requirements: [],
    },
  },
};
