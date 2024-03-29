import type { Paths, PATHS } from './paths';

export type HomeHref = {
  pathname: PATHS['HOME'];
};

export type TermHref = {
  pathname: PATHS['TERMS'];
};

export type PrivacyPolicyHref = {
  pathname: PATHS['PRIVACY'];
};

export type Hrefs = HomeHref | TermHref | PrivacyPolicyHref;
export type Queries = Partial<{
  authenticated: 'login' | 'pre-register' | 'pre-registered';
}>;
export type Href = Paths | Hrefs;
