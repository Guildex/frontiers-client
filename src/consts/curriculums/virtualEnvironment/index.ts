import { ICON_NAMES } from '~/consts/icon';

const ID = 'VIRTUAL_ENVIRONMENT';

export const IDS = {
  VIRTUAL_ENVIRONMENT_ABOUT: `${ID}_ABOUT`,
} as const;

export const VIRTUAL_ENVIRONMENT = {
  PATH: 'virtual-environment',
  ICON_NAME: ICON_NAMES.DOCKER,
  LABEL: '仮想環境構築',
  DESCRIPTION: 'Docker',
  DETAIL: {
    [IDS.VIRTUAL_ENVIRONMENT_ABOUT]: {
      isPublic: false,
      path: 'about',
      cost: 20,
      title: 'Dockerについて',
      description: '',
      requirements: [],
    },
  },
};
