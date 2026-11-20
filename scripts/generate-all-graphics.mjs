import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

function escapeXml(unsafe) {
  return (unsafe || '').replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function wrapText(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length > maxChars) {
      if (currentLine) lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine = (currentLine + ' ' + word).trim();
    }
  }
  if (currentLine) lines.push(currentLine.trim());
  return lines;
}

export async function createGridGraphic(outputPath, badge, title, subtitle, items) {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const width = 1600;
  const height = 900;

  // 2 rows x 3 cols
  const cardWidth = 430;
  const cardHeight = 240;
  const startX = 110;
  const startY = 270;
  const gapX = 45;
  const gapY = 35;

  let cardsSvg = '';
  items.slice(0, 6).forEach((item, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    const titleLines = wrapText(item.title, 28);
    const descLines = wrapText(item.desc, 42);

    let textTspans = '';
    let currY = 90;
    titleLines.forEach((tl, i) => {
      textTspans += `<text x="${x + 28}" y="${y + currY}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="700" fill="#F8FAFC">${escapeXml(tl)}</text>`;
      currY += 26;
    });

    currY += 10;
    descLines.forEach((dl, i) => {
      textTspans += `<text x="${x + 28}" y="${y + currY}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="400" fill="#94A3B8">${escapeXml(dl)}</text>`;
      currY += 22;
    });

    cardsSvg += `
      <rect x="${x}" y="${y}" width="${cardWidth}" height="${cardHeight}" rx="16" fill="#111827" stroke="#1E293B" stroke-width="2"/>
      <rect x="${x + 24}" y="${y + 24}" width="38" height="38" rx="10" fill="#1D4ED8"/>
      <text x="${x + 43}" y="${y + 49}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="17" font-weight="bold" fill="#FFFFFF" text-anchor="middle">${index + 1}</text>
      ${textTspans}
    `;
  });

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#080C15"/>
        <stop offset="50%" stop-color="#0D1527"/>
        <stop offset="100%" stop-color="#050811"/>
      </linearGradient>
      <radialGradient id="glow" cx="85%" cy="15%" r="60%">
        <stop offset="0%" stop-color="#2563EB" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#080C15" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="glowBottom" cx="15%" cy="85%" r="50%">
        <stop offset="0%" stop-color="#1D4ED8" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#080C15" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
    <circle cx="1360" cy="140" r="500" fill="url(#glow)"/>
    <circle cx="200" cy="800" r="400" fill="url(#glowBottom)"/>

    <!-- Header badge -->
    <rect x="110" y="70" width="210" height="36" rx="18" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <circle cx="128" cy="88" r="5" fill="#38BDF8"/>
    <text x="215" y="93" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="#93C5FD" text-anchor="middle">${escapeXml(badge.toUpperCase())}</text>

    <!-- Title and Subtitle -->
    <text x="110" y="155" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="38" font-weight="800" fill="#FFFFFF">${escapeXml(title)}</text>
    <text x="110" y="200" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="19" font-weight="400" fill="#94A3B8">${escapeXml(subtitle)}</text>

    <!-- Cards Grid -->
    ${cardsSvg}

    <!-- Footer -->
    <line x1="110" y1="835" x2="1490" y2="835" stroke="#1E293B" stroke-width="1"/>
    <text x="110" y="865" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="500" fill="#64748B">contactdoublecheck.com • Legal verification, compliance &amp; entity management</text>
  </svg>
  `;

  await sharp(Buffer.from(svg)).webp({ quality: 88 }).toFile(outputPath);
  console.log(`Generated: ${outputPath}`);
}

export async function createStepsGraphic(outputPath, badge, title, subtitle, steps) {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const width = 1600;
  const height = 900;

  // 4 sequential cards horizontally
  const cardWidth = 320;
  const cardHeight = 490;
  const startX = 110;
  const startY = 280;
  const gapX = 33;

  let stepsSvg = '';
  steps.slice(0, 4).forEach((step, index) => {
    const x = startX + index * (cardWidth + gapX);
    const y = startY;

    const titleLines = wrapText(step.title, 22);
    const descLines = wrapText(step.desc, 30);

    let textTspans = '';
    let currY = 120;
    titleLines.forEach((tl, i) => {
      textTspans += `<text x="${x + 24}" y="${y + currY}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="700" fill="#F8FAFC">${escapeXml(tl)}</text>`;
      currY += 26;
    });

    currY += 15;
    descLines.forEach((dl, i) => {
      textTspans += `<text x="${x + 24}" y="${y + currY}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="400" fill="#94A3B8">${escapeXml(dl)}</text>`;
      currY += 23;
    });

    // Arrow indicator between cards (except last)
    let arrowSvg = '';
    if (index < 3) {
      const arrowX = x + cardWidth + 10;
      const arrowY = y + 240;
      arrowSvg = `
        <polygon points="${arrowX},${arrowY - 6} ${arrowX + 12},${arrowY} ${arrowX},${arrowY + 6}" fill="#3B82F6"/>
      `;
    }

    stepsSvg += `
      <rect x="${x}" y="${y}" width="${cardWidth}" height="${cardHeight}" rx="16" fill="#111827" stroke="#1E293B" stroke-width="2"/>
      <rect x="${x + 24}" y="${y + 24}" width="46" height="46" rx="12" fill="#2563EB"/>
      <text x="${x + 47}" y="${y + 53}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="19" font-weight="bold" fill="#FFFFFF" text-anchor="middle">0${index + 1}</text>
      ${textTspans}
      ${arrowSvg}
    `;
  });

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#080C15"/>
        <stop offset="50%" stop-color="#0D1527"/>
        <stop offset="100%" stop-color="#050811"/>
      </linearGradient>
      <radialGradient id="glow" cx="85%" cy="15%" r="60%">
        <stop offset="0%" stop-color="#2563EB" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#080C15" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="glowBottom" cx="15%" cy="85%" r="50%">
        <stop offset="0%" stop-color="#1D4ED8" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#080C15" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
    <circle cx="1360" cy="140" r="500" fill="url(#glow)"/>
    <circle cx="200" cy="800" r="400" fill="url(#glowBottom)"/>

    <!-- Header badge -->
    <rect x="110" y="70" width="210" height="36" rx="18" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <circle cx="128" cy="88" r="5" fill="#38BDF8"/>
    <text x="215" y="93" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="#93C5FD" text-anchor="middle">${escapeXml(badge.toUpperCase())}</text>

    <!-- Title and Subtitle -->
    <text x="110" y="155" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="38" font-weight="800" fill="#FFFFFF">${escapeXml(title)}</text>
    <text x="110" y="200" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="19" font-weight="400" fill="#94A3B8">${escapeXml(subtitle)}</text>

    <!-- Steps -->
    ${stepsSvg}

    <!-- Footer -->
    <line x1="110" y1="835" x2="1490" y2="835" stroke="#1E293B" stroke-width="1"/>
    <text x="110" y="865" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="500" fill="#64748B">contactdoublecheck.com • Step-by-step procedural legal guidance</text>
  </svg>
  `;

  await sharp(Buffer.from(svg)).webp({ quality: 88 }).toFile(outputPath);
  console.log(`Generated: ${outputPath}`);
}
