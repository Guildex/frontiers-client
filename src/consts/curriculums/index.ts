import { IDS as REGISTER_FORM_IDS } from './registerForm';
import { REGISTER_FORM } from './registerForm';
import { IDS as UNIT_TEST_IDS } from './unitTest';
import { UNIT_TEST } from './unitTest';

export const IDS = {
  ...REGISTER_FORM_IDS,
  ...UNIT_TEST_IDS,
} as const;

export type Id = keyof typeof REGISTER_FORM_IDS | keyof typeof UNIT_TEST_IDS;

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
  UNIT_TEST,
};

export const sectionKeys = Object.keys(CURRICULUMS);

export const curriculums = sectionKeys.reduce<Curriculum[]>(
  (acc, sectionKey) => {
    const chapterKeys = Object.keys(CURRICULUMS[sectionKey].DETAIL) as Id[];
    const chapters = chapterKeys.map(
      (chapterKey) => CURRICULUMS[sectionKey].DETAIL[chapterKey],
    );

    return [...acc, ...chapters];
  },
  [],
);
