export const ICON_NAMES = {
  REACT: 'REACT',
  TEST: 'TEST',
  DOCKER: 'DOCKER',
  WEB_ACCESSIBILITY: 'WEB_ACCESSIBILITY',
  SUN: 'SUN',
  MOON: 'MOON',
} as const;

export type IconName = keyof typeof ICON_NAMES;
