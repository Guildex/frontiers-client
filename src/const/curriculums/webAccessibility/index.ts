import { ICON_NAMES } from '~/const/icon';

import { ABOUT } from './abount';

const ID = 'WEB_ACCESSIBILITY';

export const IDS = {
  WEB_ACCESSIBILITY_ABOUT: `${ID}_ABOUT`,
} as const;

export const WEB_ACCESSIBILITY = {
  PATH: 'web-accessibility',
  ICON_NAME: ICON_NAMES.WEB_ACCESSIBILITY,
  LABEL: 'Webアクセシビリティ',
  DESCRIPTION: 'WAI-ARIA',
  DETAIL: {
    [IDS.WEB_ACCESSIBILITY_ABOUT]: ABOUT,
  },
};
