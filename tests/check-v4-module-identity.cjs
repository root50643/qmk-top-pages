const fs = require('node:fs');
const path = require('node:path');

// Browsers cache ES modules by their full URL, including the query string.
// The entry and the lazy chunks must therefore import the same React instance.
const root = path.join(__dirname, '..', 'v4');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const match = html.match(/<script\b[^>]*type="module"[^>]*src="([^"]+)"/i);
if (!match) throw new Error('V4 module entry was not found');

const base = 'https://example.test/qmk-top-pages/v4/';
const entry = new URL(match[1], base).href;
const scripts = path.join(root, 'js');
let references = 0;
// The startup screen and AJ159 device loader both import the entry module.
for (const file of ['5a012036.js', '58fd3f33.js']) {
  const source = fs.readFileSync(path.join(scripts, file), 'utf8');
  const pattern = /["'](\.\/index\.[^"'?#]+\.js(?:\?[^"']*)?)["']/g;
  for (const ref of source.matchAll(pattern)) {
    references++;
    const resolved = new URL(ref[1], new URL(`js/${file}`, base)).href;
    if (resolved !== entry) {
      throw new Error(`${file} imports ${resolved}, but HTML loads ${entry}`);
    }
  }
}
if (!references) throw new Error('No lazy chunk references to the V4 entry were found');
console.log(`V4 entry matches ${references} lazy chunk references: ${entry}`);
