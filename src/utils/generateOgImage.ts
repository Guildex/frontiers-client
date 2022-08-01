import { createCanvas, loadImage, registerFont } from 'canvas';
import fs from 'fs';
import path from 'path';

import { OPEN_GRAPH_IMAGE_WIDTH, OPEN_GRAPH_IMAGE_HEIGHT } from '~/consts/app';

const rootDir = process.cwd();

const MAX_WIDTH = 800;

const getBase = (sum: number) => {
  switch (sum) {
    case 1:
    default:
      return { rate: 3, additionalHeight: 40 };
    case 2:
      return { rate: 2.6, additionalHeight: 50 };
    case 3:
      return { rate: 2.2, additionalHeight: 50 };
  }
};

const getH = (sum: number, current: number) => {
  const { rate, additionalHeight } = getBase(sum);
  const base = (OPEN_GRAPH_IMAGE_HEIGHT * rate) / 7;

  return base + additionalHeight * current;
};

/**
 * OGPイメージを生成する処理
 *
 * @see https://zenn.dev/panda_program/articles/generate-og-image
 */
export const generateOgImage = async (title: string) => {
  const font = path.resolve(rootDir, 'src/lib/canvas/assets/NotoSansJP-Bold.otf');

  registerFont(font, {
    family: 'NotoSansJP',
  });

  const canvas = createCanvas(OPEN_GRAPH_IMAGE_WIDTH, OPEN_GRAPH_IMAGE_HEIGHT);
  const ctx = canvas.getContext('2d');
  const src = path.resolve(rootDir, 'src/lib/canvas/assets/og-template.png');
  const image = await loadImage(fs.readFileSync(src));

  ctx.drawImage(image, 0, 0, OPEN_GRAPH_IMAGE_WIDTH, OPEN_GRAPH_IMAGE_HEIGHT);
  ctx.font = '40px "NotoSansJP"';
  ctx.textAlign = 'center';

  const lines = title.replace(/\\n/g, '\n').split('\n');
  const w = OPEN_GRAPH_IMAGE_WIDTH / 2;
  const sum = lines.length;
  const write = (text: string, h: number) => {
    ctx.fillText(text, w, h, MAX_WIDTH);
  };

  if (sum === 0 || sum > 3) {
    throw new Error(`Invalid lines: ${sum}`);
  }

  for (const [i, line] of Object.entries(lines)) {
    const currentLineNumber = Number(i) + 1;
    const h = getH(sum, currentLineNumber);

    write(line, h);
  }

  return canvas.toBuffer('image/png');
};
