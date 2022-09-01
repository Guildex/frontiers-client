import * as Examples from '@guildex/react-next-curriculum-example';

import { IDS } from '~/const/curriculums';
import type { Id } from '~/const/curriculums';

const EXAMPLES = {
  [IDS.REGISTER_FORM_INPUT]: <Examples.RegisterForm.Input />,
  [IDS.REGISTER_FORM_UI]: <Examples.RegisterForm.UI />,
  [IDS.REGISTER_FORM_VALIDATION]: <Examples.RegisterForm.Validation />,
  [IDS.REGISTER_FORM_SUBMIT]: <Examples.RegisterForm.Submit />,
  [IDS.REGISTER_FORM_ERROR_HANDLING]: <Examples.RegisterForm.ErrorHandling />,
  [IDS.STATE_PROVISION]: null,
  [IDS.UNIT_TEST_PROVISION]: null,
  [IDS.VIRTUAL_ENVIRONMENT_ABOUT]: null,
  [IDS.WEB_ACCESSIBILITY_ABOUT]: null,
} as const;

export const renderExample = (id: Id) => {
  return EXAMPLES[id];
};
