import sharp from 'sharp';
import fs from 'fs';

const width = 1600;
const height = 900;
const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#0F172A"/>
  <text x="100" y="200" font-family="sans-serif" font-size="48" fill="#FFFFFF">DoubleCheck Graphic Test</text>
</svg>`;

await sharp(Buffer.from(svg)).webp({ quality: 88 }).toFile('/tmp/test-output.webp');
console.log('Success:', fs.statSync('/tmp/test-output.webp').size);
