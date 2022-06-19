const ID = 'STATE';

export const IDS = {
  STATE_PROVISION: `${ID}_PROVISION`,
} as const;

export const STATE = {
  PATH: 'state',
  LABEL: '状態管理',
  DESCRIPTION: 'React Context API',
  DETAIL: {
    [IDS.STATE_PROVISION]: {
      isPublic: false,
      path: 'how-to-use',
      cost: 5,
      title: '概念と使い方',
      description: '',
      requirements: [],
    },
  },
};
