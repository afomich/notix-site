// Денежные суммы допустимы только на английских страницах.
//
// App Store берёт деньги в валюте витрины по собственной ценовой сетке Apple, поэтому
// «17,99 $» на немецкой или японской странице называет цену, которую покупатель никогда
// не увидит на кассе. Это не стилистика, а расхождение с тем, что произойдёт при оплате —
// худший вид ошибки на странице подписки.
//
// Правило легко нарушить обратно: суммы выглядят убедительно, и переводчик, увидев их в
// английском источнике, естественно переносит их к себе. Поэтому проверка автоматическая.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';

// Английские страницы: корень и всё, что не лежит под префиксом локали.
// Список префиксов берём из имён каталогов первого уровня — они и есть локали.
const LOCALE_DIRS = readdirSync(DIST).filter(
  (entry) =>
    statSync(join(DIST, entry)).isDirectory() &&
    /^[a-z]{2}$/.test(entry) &&
    entry !== 'en'
);

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return full.endsWith('.html') ? [full] : [];
  });
}

// Число с двумя знаками после запятой или точки рядом с любым обозначением валюты.
const MONEY = /\d+[.,]\d{2}\s*(?:\$|USD|€|EUR|£|¥|₩|zł|kr|ドル|달러|元)|(?:\$|€|£|¥|₩)\s*\d+[.,]\d{2}/;

const offenders = [];
for (const localeDir of LOCALE_DIRS) {
  for (const file of htmlFiles(join(DIST, localeDir))) {
    const match = readFileSync(file, 'utf8').match(MONEY);
    if (match) offenders.push(`/${relative(DIST, file)}: ${match[0]}`);
  }
}

if (offenders.length > 0) {
  console.error('FAIL: currency figures on non-English pages');
  offenders.forEach((offender) => console.error(`  ${offender}`));
  console.error('  Локализованные страницы называют структуру планов и отсылают в App Store.');
  process.exit(1);
}

console.log(`OK: ${LOCALE_DIRS.length} locales, no currency figures outside English`);
