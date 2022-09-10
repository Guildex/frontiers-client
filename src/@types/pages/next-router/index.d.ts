import type Router from 'next/dist/client/router';
import type { NextRouter } from 'next/dist/client/router';

import type { Href } from '~/const/hrefs';

type CustomMethod = {
  push: (url: Href, as?: Href, options?: TransitionOptions) => Promise<boolean>;
  replace: (url: Href | string, as?: Href | string, options?: TransitionOptions) => Promise<boolean>;
};

type CustomRouter = Omit<Router, 'push' | 'replace'> & CustomMethod;
type CustomUseRouter = Omit<NextRouter, 'push' | 'replace'> & CustomMethod;

declare const _default: CustomRouter;

export default _default;

declare module 'next/router' {
  export declare function useRouter(): CustomUseRouter;
}
