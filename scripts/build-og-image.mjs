#!/usr/bin/env node
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, "..", "public");
const OG_SVG = resolve(PUBLIC_DIR, "og-image.svg");
const OG_PNG = resolve(PUBLIC_DIR, "og-image.png");

if (!existsSync(OG_SVG)) {
  console.error(`Source SVG not found: ${OG_SVG}`);
  process.exit(1);
}

const svg = readFileSync(OG_SVG);

await sharp(svg, { density: 144 })
  .resize(1200, 630, { fit: "contain", background: { r: 7, g: 10, b: 18, alpha: 1 } })
  .png({ compressionLevel: 9 })
  .toFile(OG_PNG);

console.log("✓ og-image.png (1200×630)");
