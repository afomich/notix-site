// Проверяет матрицу hreflang в собранном сайте.
//
// Google игнорирует группу альтернатив целиком, если она несимметрична: страница A
// объявляет B, а B не объявляет A. Глазами это не ловится — двадцать локалей дают
// четыреста связей, — а последствие тихое: локали начинают конкурировать друг с
// другом как дубли вместо того, чтобы делить трафик по языкам.
//
// Проверяется:
//   1) каждая страница с альтернативами ссылается сама на себя;
//   2) объявленные URL существуют в dist;
//   3) связь взаимна;
//   4) в группе ровно один x-default.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const SITE = 'https://notix-ai.app';

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return full.endsWith('.html') ? [full] : [];
  });
}

/** '/dist/ru/support/index.html' → '/ru/support/' */
function urlOf(file) {
  const path = `/${relative(DIST, file)}`.replace(/index\.html$/, '').replace(/\.html$/, '');
  return path;
}

const pages = new Map();
for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, 'utf8');
  const links = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(
    (match) => ({ hreflang: match[1], url: match[2].replace(SITE, '') })
  );
  pages.set(urlOf(file), links);
}

const failures = [];

for (const [url, links] of pages) {
  if (links.length === 0) continue;

  const declared = links.filter((link) => link.hreflang !== 'x-default');
  const defaults = links.filter((link) => link.hreflang === 'x-default');

  if (defaults.length !== 1) {
    failures.push(`${url}: expected exactly one x-default, found ${defaults.length}`);
  }
  if (!declared.some((link) => link.url === url)) {
    failures.push(`${url}: does not reference itself`);
  }

  for (const link of declared) {
    const target = pages.get(link.url);
    if (target === undefined) {
      failures.push(`${url}: declares ${link.url} (${link.hreflang}), which does not exist`);
      continue;
    }
    // Взаимность считается только по языковым ссылкам. x-default указывает на
    // английскую версию с каждой страницы группы, поэтому если учитывать и его,
    // он подменяет собой недостающую языковую ссылку и проверка становится слепой.
    if (!target.some((back) => back.hreflang !== 'x-default' && back.url === url)) {
      failures.push(`${url} → ${link.url}: not reciprocal`);
    }
  }
}

const withAlternates = [...pages.values()].filter((links) => links.length > 0).length;

if (failures.length > 0) {
  console.error('FAIL: hreflang matrix is broken');
  failures.forEach((failure) => console.error(`  ${failure}`));
  process.exit(1);
}

console.log(`OK: ${withAlternates} pages, hreflang symmetric`);
