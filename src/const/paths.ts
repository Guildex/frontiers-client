export const PATHS = {
  HOME: '/',
  TERMS: '/terms',
  PRIVACY: '/privacy',
} as const;

export type PATHS = typeof PATHS;

export type PathsMap = PATHS;

export type Paths = PathsMap[keyof PATHS];
