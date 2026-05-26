#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, "..", "public");
const FAVICON_SVG = resolve(PUBLIC_DIR, "favicon.svg");

if (!existsSync(FAVICON_SVG)) {
  console.error(`Source SVG not found: ${FAVICON_SVG}`);
  process.exit(1);
}

const svg = readFileSync(FAVICON_SVG);

const targets = [
  { size: 16, name: "favicon-16.png" },
  { size: 32, name: "favicon-32.png" },
  { size: 180, name: "apple-touch-icon-180.png" },
];

await Promise.all(
  targets.map(async ({ size, name }) => {
    const out = resolve(PUBLIC_DIR, name);
    await sharp(svg, { density: 512 })
      .resize(size, size, { fit: "contain", background: { r: 7, g: 10, b: 18, alpha: 1 } })
      .png({ compressionLevel: 9 })
      .toFile(out);
    console.log(`✓ ${name} (${size}×${size})`);
  }),
);

console.log("Favicon assets built.");
