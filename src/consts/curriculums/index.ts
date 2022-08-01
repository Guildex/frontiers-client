import type { IconName } from '~/consts/icon';

import { IDS as REGISTER_FORM_IDS, REGISTER_FORM } from './registerForm';
import { IDS as STATE_IDS } from './state';
import { STATE } from './state';
import { IDS as UNIT_TEST_IDS, UNIT_TEST } from './unitTest';
import { IDS as VIRTUAL_ENVIRONMENT_IDS, VIRTUAL_ENVIRONMENT } from './virtualEnvironment';
import { IDS as WEB_ACCESSIBILITY_IDS, WEB_ACCESSIBILITY } from './webAccessibility';

export const IDS = {
  ...REGISTER_FORM_IDS,
  ...STATE_IDS,
  ...UNIT_TEST_IDS,
  ...VIRTUAL_ENVIRONMENT_IDS,
  ...WEB_ACCESSIBILITY_IDS,
} as const;

export type Id = keyof typeof IDS;

export type Curriculum = {
  isPublic: boolean;
  path: string;
  cost: number;
  title: string;
  description: string;
  requirements: string[];
};

export type Chapter = typeof CURRICULUMS[string]['DETAIL'];

type Curriculums = {
  [key: string]: {
    PATH: string;
    ICON_NAME: IconName;
    LABEL: string;
    DESCRIPTION: string;
    DETAIL: {
      [key: string]: Curriculum;
    };
  };
};

export const CURRICULUMS: Curriculums = {
  REGISTER_FORM,
  WEB_ACCESSIBILITY,
  UNIT_TEST,
  STATE,
  VIRTUAL_ENVIRONMENT,
};

export const sectionKeys = Object.keys(CURRICULUMS);
