// SVG ichiga base64 joylangan rasterni ajratib WebP'ga o'tkazadi.
// Ishga tushirish: node scripts/svg-to-webp.mjs
import { readFile, writeFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMG_DIR = path.resolve("public/img");
const files = (await readdir(IMG_DIR)).filter((f) => f.endsWith(".svg"));

// SVG ichidan data:image/...;base64,XXXX ni topadi
const DATA_URI = /data:image\/(png|jpeg|jpg|webp);base64,([A-Za-z0-9+/=]+)/;

let before = 0, after = 0, converted = 0, skipped = 0;

for (const file of files) {
  const svgPath = path.join(IMG_DIR, file);
  const svg = await readFile(svgPath, "utf8");
  const m = svg.match(DATA_URI);

  const outName = file.replace(/\.svg$/i, ".webp");
  const outPath = path.join(IMG_DIR, outName);
  const origSize = (await stat(svgPath)).size;

  if (!m) {
    console.log(`SKIP (vektor, raster yo'q): ${file}`);
    skipped++;
    continue;
  }

  const raster = Buffer.from(m[2], "base64");
  // quality 80 — ko'z bilan farqi yo'q, hajm keskin kichrayadi
  const webp = await sharp(raster).webp({ quality: 80, effort: 6 }).toBuffer();
  await writeFile(outPath, webp);

  before += origSize;
  after += webp.length;
  converted++;
  console.log(
    `${file}  ${(origSize / 1024).toFixed(0)}KB → ${outName}  ${(webp.length / 1024).toFixed(0)}KB  (-${(100 - (webp.length / origSize) * 100).toFixed(0)}%)`
  );
}

console.log(
  `\n✅ ${converted} ta konvert, ${skipped} ta o'tkazib yuborildi.\n` +
    `Jami: ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024 / 1024).toFixed(2)}MB ` +
    `(-${(100 - (after / before) * 100).toFixed(0)}%)`
);
