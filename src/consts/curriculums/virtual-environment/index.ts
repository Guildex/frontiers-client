const ID = 'VIRTUAL_ENVIRONMENT';

export const IDS = {
  VIRTUAL_ENVIRONMENT_ABOUT: `${ID}_ABOUT`,
} as const;

export const VIRTUAL_ENVIRONMENT = {
  PATH: 'virtual-environment',
  LABEL: '仮想環境構築',
  DESCRIPTION: 'Docker',
  DETAIL: {
    [IDS.VIRTUAL_ENVIRONMENT_ABOUT]: {
      isPublic: false,
      path: 'about',
      cost: 5,
      title: 'Dockerについて',
      description: '',
      requirements: [],
    },
  },
};
