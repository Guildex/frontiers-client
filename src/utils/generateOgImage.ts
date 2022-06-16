import { createCanvas, loadImage, registerFont } from 'canvas';
import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();

const WIDTH = 1200;
const HEIGHT = 630;
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
  const base = (HEIGHT * rate) / 7;

  return base + additionalHeight * current;
};

/**
 * OGPイメージを生成する処理
 *
 * @see https://zenn.dev/panda_program/articles/generate-og-image
 */
export const generateOgImage = async (title: string) => {
  const font = path.resolve(
    rootDir,
    'src/lib/canvas/assets/NotoSansJP-Bold.otf',
  );

  registerFont(font, {
    family: 'NotoSansJP',
  });

  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');
  const src = path.resolve(rootDir, 'src/lib/canvas/assets/og-template.png');
  const image = await loadImage(fs.readFileSync(src));

  ctx.drawImage(image, 0, 0, WIDTH, HEIGHT);
  ctx.font = '40px "NotoSansJP"';
  ctx.textAlign = 'center';

  const lines = title.replaceAll('\\n', '\n').split('\n');
  const w = WIDTH / 2;
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
