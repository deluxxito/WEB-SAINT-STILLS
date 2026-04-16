import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, 'temporary screenshots');
if (!existsSync(dir)) mkdirSync(dir);

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

const existing = readdirSync(dir).filter(f => f.endsWith('.png'));
const n = existing.length + 1;
const filename = `screenshot-${n}${label}.png`;
const outPath = join(dir, filename);

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/nateh/.cache/puppeteer/chrome/win64-131.0.6778.264/chrome-win64/chrome.exe',
  args: ['--no-sandbox']
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log(`Saved: ${outPath}`);
