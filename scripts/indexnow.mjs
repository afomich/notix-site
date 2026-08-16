// Уведомляет поисковые системы о новых и изменившихся страницах через IndexNow.
//
// Зачем: Google находит страницы сам, а Bing, Yandex, Seznam и Naver — заметно
// медленнее, и в тех странах, где у Google нет монополии (Турция, Чехия, Корея,
// Россия), локализованные страницы иначе ждут краула неделями. IndexNow — один
// протокол на все четыре: отправка в любую точку раздаётся остальным участникам.
//
// Аккаунты не нужны. Подтверждением владения служит файл с ключом, лежащий в корне
// сайта: система читает его и убеждается, что отправитель управляет доменом.
//
// Запускать ПОСЛЕ деплоя, а не после сборки: системы придут за страницами сразу, и
// если их ещё нет на проде, URL будут отброшены как несуществующие.
import { readFileSync, readdirSync } from 'node:fs';

const HOST = 'notix-ai.app';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITEMAP = 'dist/sitemap-0.xml';

// Ключ лежит в public/ как <key>.txt и попадает в корень сайта при сборке.
// Имя файла и есть ключ — так требует протокол.
const keyFile = readdirSync('public').find((name) => /^[0-9a-f]{32}\.txt$/.test(name));
if (!keyFile) {
  console.error('FAIL: в public/ нет файла ключа IndexNow (<32 hex>.txt)');
  process.exit(1);
}
const key = keyFile.replace('.txt', '');

const urls = [...readFileSync(SITEMAP, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) {
  console.error(`FAIL: ни одного URL в ${SITEMAP} — сначала npm run build`);
  process.exit(1);
}

const dryRun = !process.argv.includes('--apply');
if (dryRun) {
  console.log(`Dry run: отправил бы ${urls.length} URL с ключом ${key}`);
  console.log(urls.slice(0, 5).map((url) => `  ${url}`).join('\n'));
  console.log('  …');
  console.log('Отправить по-настоящему: npm run seo:indexnow -- --apply');
  process.exit(0);
}

const response = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${keyFile}`,
    urlList: urls,
  }),
});

// 200 — принято, 202 — принято, ключ ещё проверяется. Оба нормальны.
if (response.status !== 200 && response.status !== 202) {
  console.error(`FAIL: IndexNow ответил ${response.status} ${response.statusText}`);
  console.error(await response.text());
  process.exit(1);
}

console.log(`OK: ${urls.length} URL отправлено, статус ${response.status}`);
