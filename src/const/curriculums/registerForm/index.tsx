import { ICON_NAMES } from '~/const/icon';

import { ERROR_HANDLING } from './errorHandling';
import { INPUT } from './input';
import { SUBMIT } from './submit';
import { UI } from './ui';
import { VALIDATION } from './validation';

const ID = 'REGISTER_FORM';

export const IDS = {
  REGISTER_FORM_INPUT: `${ID}_INPUT`,
  REGISTER_FORM_UI: `${ID}_UI`,
  REGISTER_FORM_VALIDATION: `${ID}_VALIDATION`,
  REGISTER_FORM_SUBMIT: `${ID}_SUBMIT`,
  REGISTER_FORM_ERROR_HANDLING: `${ID}_ERROR_HANDLING`,
} as const;

export const REGISTER_FORM = {
  PATH: 'register-form',
  LABEL: '登録フォーム実装',
  ICON_NAME: ICON_NAMES.REACT,
  DESCRIPTION: 'React',
  DETAIL: {
    [IDS.REGISTER_FORM_INPUT]: INPUT,
    [IDS.REGISTER_FORM_UI]: UI,
    [IDS.REGISTER_FORM_VALIDATION]: VALIDATION,
    [IDS.REGISTER_FORM_SUBMIT]: SUBMIT,
    [IDS.REGISTER_FORM_ERROR_HANDLING]: ERROR_HANDLING,
  },
};
