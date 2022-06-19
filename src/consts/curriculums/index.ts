import { IDS as REGISTER_FORM_IDS } from './registerForm';
import { REGISTER_FORM } from './registerForm';
import type { IDS as STATE_IDS } from './state';
import { STATE } from './state';
import { IDS as UNIT_TEST_IDS } from './unitTest';
import { UNIT_TEST } from './unitTest';

export const IDS = {
  ...REGISTER_FORM_IDS,
  ...STATE,
  ...UNIT_TEST_IDS,
} as const;

export type Id =
  | keyof typeof REGISTER_FORM_IDS
  | keyof typeof STATE_IDS
  | keyof typeof UNIT_TEST_IDS;

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
};

export const sectionKeys = Object.keys(CURRICULUMS);
