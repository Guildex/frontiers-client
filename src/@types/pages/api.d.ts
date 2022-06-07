import type { NextApiRequest, NextApiResponse } from 'next';

declare module '~/@types/pages/api' {
  export interface Data<T> {
    data: T;
  }

  export interface Error {
    error: {
      status: number;
      message: string;
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiHandler<Q = unknown, B = any, R = unknown> = (
  req: Omit<NextApiRequest, 'body' | 'query'> & {
    query: Partial<Q>;
    body?: B;
  },
  res: NextApiResponse<Data<R> | Error>,
) => void | Promise<void>;
