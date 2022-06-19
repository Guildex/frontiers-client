import * as Examples from '@guildex/react-next-curriculum-example';

import { IDS } from '~/consts/curriculums';
import type { Id } from '~/consts/curriculums';

export const renderExample = (id: Id) => {
  switch (id) {
    case IDS.REGISTER_FORM_INPUT:
      return <Examples.ExampleInput />;

    case IDS.REGISTER_FORM_UI:
      return <Examples.ExampleRegisterFormUI />;

    case IDS.REGISTER_FORM_VALIDATION:
      return <Examples.ExampleRegisterFormValidation />;

    case IDS.REGISTER_FORM_SUBMIT:
      return <Examples.ExampleRegisterFormSubmit />;

    default:
      return null;
  }
};
