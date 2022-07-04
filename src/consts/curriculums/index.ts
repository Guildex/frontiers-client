import { IDS as REGISTER_FORM_IDS, REGISTER_FORM } from './registerForm';
import { IDS as STATE_IDS } from './state';
import { STATE } from './state';
import { IDS as UNIT_TEST_IDS, UNIT_TEST } from './unitTest';
import {
  IDS as VIRTUAL_ENVIRONMENT_IDS,
  VIRTUAL_ENVIRONMENT,
} from './virtual-environment';

export const IDS = {
  ...REGISTER_FORM_IDS,
  ...STATE_IDS,
  ...UNIT_TEST_IDS,
  ...VIRTUAL_ENVIRONMENT_IDS,
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
    LABEL: string;
    DESCRIPTION: string;
    DETAIL: {
      [key: string]: Curriculum;
    };
  };
};

export const CURRICULUMS: Curriculums = {
  REGISTER_FORM,
  STATE,
  UNIT_TEST,
  VIRTUAL_ENVIRONMENT,
};

export const sectionKeys = Object.keys(CURRICULUMS);
