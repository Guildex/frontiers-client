import type { NextApiRequest, NextApiResponse } from 'next';

import { generateOgImage } from '~/utils/generateOgImage';

type Data = Buffer | null;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { title } = req.query;

  res.setHeader('Content-Type', 'image/png');

  if (typeof title !== 'string') {
    res.status(200).send(null);
    return;
  }

  const result = await generateOgImage(title);

  res.status(200).send(result);
}
