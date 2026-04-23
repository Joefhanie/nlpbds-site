import { readdir } from 'node:fs/promises';
import path from 'node:path';

const careersDir = path.join(process.cwd(), 'public', 'img', 'carousel', 'careers');
const allowedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function formatLabel(fileName: string) {
  const baseName = fileName.replace(path.extname(fileName), '');
  return `Career slide ${baseName}`;
}

export async function GET() {
  const files = await readdir(careersDir);

  const slides = files
    .filter((fileName) => allowedExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((first, second) => first.localeCompare(second, undefined, { numeric: true }))
    .map((fileName) => ({
      src: `/img/carousel/careers/${fileName}`,
      alt: formatLabel(fileName),
    }));

  return Response.json({ slides });
}