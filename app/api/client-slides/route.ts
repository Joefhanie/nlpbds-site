import { readdir } from 'node:fs/promises';
import path from 'node:path';

const clientsDir = path.join(process.cwd(), 'public', 'img', 'carousel', 'clients');
const allowedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function formatLabel(fileName: string) {
  const baseName = fileName.replace(path.extname(fileName), '');
  return `Client slide ${baseName}`;
}

export async function GET() {
  const files = await readdir(clientsDir);

  const slides = files
    .filter((fileName) => allowedExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((first, second) => first.localeCompare(second, undefined, { numeric: true }))
    .map((fileName) => ({
      src: `/img/carousel/clients/${fileName}`,
      alt: formatLabel(fileName),
    }));

  return Response.json({ slides });
}
