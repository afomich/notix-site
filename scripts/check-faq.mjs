// Сверяет FAQ в собранной странице: JSON-LD и видимая разметка должны нести
// один и тот же набор вопросов. Оба генерируются из src/data/faq.ts, так что
// расхождение здесь означает ошибку генерации — например невалидный JSON
// из-за неэкранированной кавычки в тексте ответа.
import { readFileSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');

// Блоков ld+json на странице несколько (WebSite, MobileApplication, FAQPage),
// поэтому каждый разбирается отдельно: одна регулярка «от первого <script> до
// FAQPage» склеила бы их в один невалидный кусок.
const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .map((match) => match[1])
  .filter((block) => block.includes('"FAQPage"'));

if (ldBlocks.length !== 1) {
  console.error(`FAIL: expected exactly one FAQPage JSON-LD block, found ${ldBlocks.length}`);
  process.exit(1);
}

let ld;
try {
  ld = JSON.parse(ldBlocks[0]);
} catch (error) {
  console.error(`FAIL: FAQPage JSON-LD is not valid JSON — ${error.message}`);
  process.exit(1);
}

const decode = (value) =>
  value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const ldQuestions = ld.mainEntity.map((entry) => entry.name);
const htmlQuestions = [...html.matchAll(/<span class="faq-q">([\s\S]*?)<\/span>/g)].map((m) =>
  decode(m[1])
);

const failures = [];
if (ldQuestions.length !== htmlQuestions.length) {
  failures.push(`count mismatch: JSON-LD ${ldQuestions.length}, HTML ${htmlQuestions.length}`);
}
ldQuestions.forEach((question, index) => {
  if (question !== htmlQuestions[index]) {
    failures.push(`#${index + 1}: JSON-LD "${question}" vs HTML "${htmlQuestions[index]}"`);
  }
});

if (failures.length > 0) {
  console.error('FAIL: FAQ sources disagree');
  failures.forEach((failure) => console.error(`  ${failure}`));
  process.exit(1);
}

console.log(`OK: ${ldQuestions.length} questions, JSON-LD and HTML agree`);
