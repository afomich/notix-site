# FAQ rework + «What is Notix» Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Заменить дублированный вручную FAQ на главной единым источником данных, расширить его с 6 до 11 вопросов и добавить секцию «What is Notix» перед FAQ.

**Architecture:** Все вопросы и ответы живут в `src/data/faq.ts` как массив объектов. `src/pages/index.astro` импортирует массив и генерирует из него две вещи: JSON-LD `FAQPage` в `<head>` и аккордеон `<details>` в теле страницы. Ни один вопрос больше не набирается руками дважды. Скрипт `scripts/check-faq.mjs` проверяет собранный `dist/index.html`: JSON-LD парсится и содержит ровно тот же набор вопросов, что и видимая разметка.

**Tech Stack:** Astro 7, TypeScript (`astro/tsconfigs/strict`), Node ≥ 22.12, без тестового фреймворка.

## Global Constraints

- Репозиторий: `/Users/alexfomich/AndroidStudioProjects/notix-site`. Все пути ниже — относительно него.
- Язык всех пользовательских текстов — английский. Локализация вне этой работы.
- Поле `a` в данных FAQ — plain text без HTML-тегов и без HTML-сущностей: используются настоящие символы (`—`, `’`, `“`, `”`). Astro экранирует их сам при выводе, `JSON.stringify` — при генерации schema.
- Визуал FAQ не меняется: классы `section`, `faq-wrap`, `faq-list`, `faq-item`, `faq-q`, `faq-c`, `faq-a` остаются как есть, CSS не трогаем.
- Тексты в задачах 2 и 3 копируются в код **дословно**. Это согласованный копирайт, а не черновик: любая переформулировка — отклонение от спеки.
- Не писать про загрузку фотографии страницы: такого функционала нет.
- Не называть Facebook и LinkedIn среди соцсетей: их адаптеры за фича-флагами.
- Не писать про поддержку iPad и Android.
- **Деплой блокирован** до тех пор, пока бек не перестанет хранить `audio_file` после транскрипции (ответ №7 утверждает, что запись остаётся на устройстве). Работа по беку идёт на стороне Alex. Задачи 1–4 включают коммиты, но не деплой.
- Проверка сборки одна на все задачи: `npm run build` завершается без ошибок.
- Спека: `docs/superpowers/specs/2026-08-16-faq-rework-design.md`.

---

### Task 1: Единый источник данных FAQ (рефактор без изменения текстов)

Цель задачи — убрать дублирование, ничего не меняя в содержимом. Так расхождение при рефакторинге видно сразу: собранная страница обязана совпасть с текущей.

**Files:**
- Create: `src/data/faq.ts`
- Create: `scripts/check-faq.mjs`
- Modify: `package.json` (секция `scripts`)
- Modify: `src/pages/index.astro` — frontmatter (строки 1–3), JSON-LD `FAQPage` (строки 35–48), разметка FAQ (строки 251–280)

**Interfaces:**
- Consumes: ничего.
- Produces:
  - `src/data/faq.ts` экспортирует `export type FaqItem = { q: string; a: string }` и `export const FAQ_ITEMS: FaqItem[]`.
  - `package.json` получает скрипт `check:faq`, запускающий `node scripts/check-faq.mjs`.

- [ ] **Step 1: Снять эталон текущей страницы**

Собрать сайт в его нынешнем виде и сохранить FAQ-фрагмент, чтобы после рефактора сверить результат.

```bash
cd /Users/alexfomich/AndroidStudioProjects/notix-site
npm run build
node -e '
const fs = require("fs");
const html = fs.readFileSync("dist/index.html", "utf8");
const questions = [...html.matchAll(/<span class="faq-q">(.*?)<\/span>/g)].map(m => m[1]);
const ld = html.match(/"@type":\s*"FAQPage"[\s\S]*?<\/script>/);
fs.writeFileSync("/tmp/faq-baseline.json", JSON.stringify({questions, hasLd: Boolean(ld)}, null, 2));
console.log(questions.length + " questions captured");
'
```

Ожидается: `6 questions captured`, файл `/tmp/faq-baseline.json` создан.

- [ ] **Step 2: Написать проверочный скрипт**

Создать `scripts/check-faq.mjs`. Скрипт читает собранный `dist/index.html`, вытаскивает JSON-LD `FAQPage` и видимые вопросы, и падает с ненулевым кодом, если они не совпадают.

```javascript
// Сверяет FAQ в собранной странице: JSON-LD и видимая разметка должны нести
// один и тот же набор вопросов. Оба генерируются из src/data/faq.ts, так что
// расхождение здесь означает ошибку генерации — например невалидный JSON
// из-за неэкранированной кавычки в тексте ответа.
import { readFileSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');

const ldMatch = html.match(
  /<script type="application\/ld\+json">([\s\S]*?"@type":\s*"FAQPage"[\s\S]*?)<\/script>/
);
if (!ldMatch) {
  console.error('FAIL: FAQPage JSON-LD not found in dist/index.html');
  process.exit(1);
}

let ld;
try {
  ld = JSON.parse(ldMatch[1]);
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
```

- [ ] **Step 3: Зарегистрировать скрипт в package.json**

В `package.json`, в объект `scripts`, добавить строку после `"build"`:

```json
    "check:faq": "node scripts/check-faq.mjs",
```

Итоговый блок `scripts`:

```json
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "check:faq": "node scripts/check-faq.mjs",
    "preview": "astro preview",
    "astro": "astro"
  },
```

- [ ] **Step 4: Запустить проверку на текущей сборке — должна пройти**

```bash
npm run check:faq
```

Ожидается: `OK: 6 questions, JSON-LD and HTML agree`. Скрипт проверяется на заведомо согласованной странице до того, как ему начнут доверять.

- [ ] **Step 5: Создать src/data/faq.ts с текущими шестью текстами**

Тексты переносятся из `index.astro` дословно, с одной механической правкой: HTML-сущности заменяются настоящими символами (`&amp;` → `&`).

```typescript
/**
 * Единственный источник FAQ на главной.
 *
 * Из этого массива генерируются и JSON-LD `FAQPage` в <head>, и аккордеон
 * <details> в теле страницы. Раньше они существовали двумя независимыми
 * блоками разметки и синхронизировались руками — расхождение означало, что
 * schema обещает Google один ответ, а страница показывает другой.
 *
 * `a` — plain text без HTML: JSON-LD не принимает разметку, а Astro экранирует
 * спецсимволы при выводе сам.
 */
export type FaqItem = {
  q: string;
  a: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How do I record a lecture and turn it into notes?',
    a: 'Tap the + button, choose “Record or upload audio”, and hit record. When the lecture ends, Notix transcribes the recording and generates a clean, structured summary automatically. You can also upload an existing audio file.',
  },
  {
    q: 'Can I turn PDF textbooks and slides into summaries?',
    a: 'Yes. Upload any PDF or document and Notix produces a structured summary you can search, quiz yourself on, or turn into flashcards.',
  },
  {
    q: 'Can I make notes from YouTube videos?',
    a: 'Yes. Paste a YouTube or web link and Notix turns the video or article into notes, quizzes, and flashcards.',
  },
  {
    q: 'Is Notix free?',
    a: 'Notix is free to start — you can create notes, quizzes, and flashcards without paying. Notix Pro unlocks unlimited recording hours, unlimited quiz questions, and video and PDF summarization with monthly or annual plans.',
  },
  {
    q: 'Is it okay to use Notix at my school?',
    a: 'Notix is a study aid: it helps you capture and review your own course materials. Recording policies differ between schools, so check your institution’s rules on recording lectures before you hit record.',
  },
  {
    q: 'What languages does Notix support?',
    a: 'The app is available in English, Spanish, French, German, Russian, and Polish — and your summaries and quizzes follow your chosen language.',
  },
];
```

- [ ] **Step 6: Импортировать массив во frontmatter index.astro**

Заменить строки 1–3 файла `src/pages/index.astro`:

```astro
---
import Base from '../layouts/Base.astro';
---
```

на:

```astro
---
import Base from '../layouts/Base.astro';
import { FAQ_ITEMS } from '../data/faq';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};
---
```

- [ ] **Step 7: Генерировать JSON-LD из массива**

Заменить блок на строках 35–48 (третий `<script type="application/ld+json">`, тот, что содержит `"@type": "FAQPage"`, вместе со всеми шестью вручную набранными вопросами) на:

```astro
    <script type="application/ld+json" set:html={JSON.stringify(faqSchema)}></script>
```

`set:html` обязателен: без него Astro выведет объект как текст. `JSON.stringify` сам экранирует кавычки и апострофы внутри текстов — это то, ради чего скрипт из шага 2 проверяет валидность JSON.

- [ ] **Step 8: Генерировать разметку аккордеона из массива**

Заменить содержимое `<div class="faq-list">` в секции FAQ (строки 254–279, все шесть блоков `<details class="faq-item">`) на:

```astro
        <div class="faq-list">
          {FAQ_ITEMS.map((item) => (
            <details class="faq-item">
              <summary><span class="faq-q">{item.q}</span><span class="faq-c" aria-hidden="true">+</span></summary>
              <div class="faq-a"><div><p>{item.a}</p></div></div>
            </details>
          ))}
        </div>
```

Внешние `<section class="section" id="faq" data-reveal>`, `<div class="faq-wrap">` и `<h2 class="h2-center">Frequently Asked Questions</h2>` остаются нетронутыми.

- [ ] **Step 9: Собрать и убедиться, что страница не изменилась**

```bash
npm run build && npm run check:faq
node -e '
const fs = require("fs");
const html = fs.readFileSync("dist/index.html", "utf8");
const decode = v => v.replace(/&quot;/g, String.fromCharCode(34)).replace(/&#39;/g, String.fromCharCode(39)).replace(/&amp;/g, "&");
const now = [...html.matchAll(/<span class="faq-q">([\s\S]*?)<\/span>/g)].map(m => decode(m[1]));
const base = JSON.parse(fs.readFileSync("/tmp/faq-baseline.json", "utf8")).questions.map(decode);
const same = JSON.stringify(now) === JSON.stringify(base);
console.log(same ? "OK: questions identical to baseline" : "FAIL:\n" + JSON.stringify({base, now}, null, 2));
process.exit(same ? 0 : 1);
'
```

Ожидается: `OK: 6 questions, JSON-LD and HTML agree`, затем `OK: questions identical to baseline`. Рефактор состоялся, содержимое не поехало.

- [ ] **Step 10: Коммит**

```bash
git add src/data/faq.ts scripts/check-faq.mjs package.json src/pages/index.astro
git commit -m "refactor(site): FAQ из единого источника вместо ручной синхронизации"
```

---

### Task 2: Новое содержимое FAQ — 11 вопросов

**Files:**
- Modify: `src/data/faq.ts` — целиком заменить содержимое массива `FAQ_ITEMS`

**Interfaces:**
- Consumes: `FaqItem` и `FAQ_ITEMS` из задачи 1; генерация в `index.astro` уже работает и не меняется.
- Produces: `FAQ_ITEMS` длиной 11.

- [ ] **Step 1: Заменить массив на согласованные тексты**

В `src/data/faq.ts` заменить всё содержимое `FAQ_ITEMS` (шесть старых объектов) на одиннадцать новых. Комментарий-заголовок файла и тип `FaqItem` остаются без изменений.

```typescript
export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'What is Notix?',
    a: 'Notix is an AI note taker. It records conversations, lectures, and meetings, transcribes them, and writes structured summaries — and it does the same with documents you upload and links you paste: PDFs, Word files, spreadsheets, YouTube videos, web articles, and social posts. Any summary can be turned into quizzes and flashcards when the material is something you need to retain. Notix is free to start, with a Pro plan for heavier use, and is available on iPhone.',
  },
  {
    q: 'How do I record something and turn it into notes?',
    a: 'Notix records the audio, transcribes it, and writes a structured summary automatically — you start the recording and put your phone down. When it ends, the transcript and the summary are waiting, and you can generate a quiz or a flashcard deck from them in one tap. If you already have an audio file from somewhere else, you can upload that instead of recording live.',
  },
  {
    q: 'How accurate is the transcription?',
    a: 'Notix transcribes accurately enough to work from, and it gets better every week — speed and quality are the two things we work on most, and both have improved substantially over the past months. Clear speech in a normal room comes back very close to verbatim. A noisy hall, a distant microphone, or a heavy accent are harder, and technical terms and proper names are where mistakes cluster — so it’s worth a glance at the transcript before you rely on a specific figure or name.',
  },
  {
    q: 'Can I turn PDFs and documents into summaries?',
    a: 'Yes. Upload a PDF, Word document, text file, or spreadsheet — PDF, DOCX, TXT, RTF, CSV, XLS and XLSX are all supported — and Notix produces a structured summary you can search, quiz yourself on, or turn into flashcards. Slide decks exported as PDF work particularly well, because the summary fills in the connective tissue the slides leave out.',
  },
  {
    q: 'Can I make notes from YouTube videos and web articles?',
    a: 'Yes. Paste a YouTube link or the URL of an article, and Notix turns it into notes, quizzes, and flashcards — the same way it handles audio you recorded yourself. YouTube summaries are built from the video’s captions, so a video with captions disabled can’t be summarised yet.',
  },
  {
    q: 'Can Notix summarise social media posts?',
    a: 'Yes. Paste a link to a TikTok, Instagram, X, or Reddit post and Notix pulls out what’s actually in it — it transcribes the audio of a video, reads the text on images and slides, and folds the caption in — then writes a summary you can keep. It’s the way to save something useful you scrolled past without leaving yourself a link you’ll never open again.',
  },
  {
    q: 'What happens to my recordings and files?',
    a: 'Your audio recording stays on your device — it isn’t kept on our servers. A document you upload is deleted from our servers as soon as it has been processed; what remains is the result: the transcript and the summary. When you delete a note, it disappears from your library immediately and is erased permanently after 30 days — that window exists so an accidental delete can still be undone. Your content is never used to train AI models, and we never sell it.',
  },
  {
    q: 'Does Notix work offline?',
    a: 'Transcription and summarisation run on our servers, so you need a connection to turn audio or a PDF into notes. Everything already generated is cached on your device, so your notes, summaries, quizzes, and flashcards are readable offline — on a plane or in a basement with no signal, your library is still there.',
  },
  {
    q: 'Is Notix free?',
    a: 'Notix is free to start: you can record, create notes, and make quizzes and flashcards without paying. Notix Pro removes the limits — unlimited recording hours, unlimited quiz questions, and PDF and video summarisation — at $17.99 per month with a 3-day free trial, or $99.99 per year with a 7-day free trial. Nothing is charged before the trial ends.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. The subscription is managed through your Apple ID in the App Store, and you can cancel there at any time in a couple of taps. Cancelling stops the next payment; Pro stays active until the end of the period you have already paid for, and your notes stay in your library either way.',
  },
  {
    q: 'What languages does Notix support?',
    a: 'The app interface is available in English, Spanish, French, German, Russian, and Polish. Transcription is not limited to those six — Notix handles the major world languages, and your summaries and quizzes come back in the language you have chosen, so you can record in one language and read the notes in another.',
  },
];
```

- [ ] **Step 2: Собрать и проверить согласованность**

```bash
npm run build && npm run check:faq
```

Ожидается: `OK: 11 questions, JSON-LD and HTML agree`. Если вместо этого пришло `FAQPage JSON-LD is not valid JSON` — в тексте попался символ, сломавший генерацию; искать в последнем добавленном ответе.

- [ ] **Step 3: Убедиться, что удалённый вопрос действительно исчез**

```bash
grep -c "use Notix at my school" dist/index.html || echo "OK: school question removed"
```

Ожидается: `OK: school question removed`. Вопрос переезжает на `/support/` в задаче 4 — до неё этой мысли на сайте временно нет.

- [ ] **Step 4: Коммит**

```bash
git add src/data/faq.ts
git commit -m "content(site): FAQ из 11 вопросов — точность, приватность, офлайн, соцсети"
```

---

### Task 3: Секция «What is Notix» на главной

**Files:**
- Modify: `src/pages/index.astro` — вставка новой секции непосредственно перед `<!-- FAQ -->` (сейчас строка 250)

**Interfaces:**
- Consumes: CSS-классы `section`, `container`, `h2-center` — уже существуют в `src/styles/styles.css` (строки 338, 350) и используются секциями `how` и `features`.
- Produces: якорь `#what-is-notix`.

- [ ] **Step 1: Вставить секцию перед FAQ**

В `src/pages/index.astro` найти комментарий `<!-- FAQ -->` и строку `<section class="section" id="faq" data-reveal>`. Непосредственно перед комментарием `<!-- FAQ -->` вставить:

```astro
    <!-- What is Notix -->
    <section class="section" id="what-is-notix" data-reveal>
      <div class="faq-wrap">
        <h2 class="h2-center">What is Notix?</h2>
        <p>Notix is an AI note taker. You record a lecture, a meeting, or an interview, upload a PDF or a document, or paste a link — a YouTube video, an article, a TikTok or Instagram post — and Notix transcribes it, writes a clean structured summary, and turns that summary into quizzes and flashcards when you need to actually remember it.</p>
        <p>It is not a voice recorder and it is not a transcription tool. A recorder hands you back an hour of audio you have to sit through again. A transcription tool hands you a wall of text. Notix hands you the thing you were going to write down anyway: organised notes, with the key ideas separated from the filler.</p>
        <p>Everything lands in one place. Recordings, documents, videos, articles, and posts become a single searchable library — so when you need what was said in March, you are searching your own notes instead of hunting through six apps.</p>
        <p>Notix is free to start and runs on iPhone.</p>
      </div>
    </section>

```

`faq-wrap` взят намеренно: он задаёт `max-width: 760px` (`styles.css:429`) — комфортную для чтения колонку, и визуально связывает секцию с идущим следом FAQ.

- [ ] **Step 2: Собрать и посмотреть глазами**

```bash
npm run build && npm run check:faq
npm run preview
```

Открыть `http://localhost:4321/` и проверить:
- секция «What is Notix?» появилась между testimonials и FAQ;
- ширина текстовой колонки совпадает с колонкой FAQ под ней;
- анимация появления при скролле работает так же, как у соседних секций (за неё отвечает атрибут `data-reveal`);
- на узком экране (панель адаптива в DevTools, 375 px) текст не вылезает за края.

Остановить `preview` по Ctrl+C.

- [ ] **Step 3: Коммит**

```bash
git add src/pages/index.astro
git commit -m "feat(site): секция What is Notix перед FAQ"
```

---

### Task 4: Переезд абзаца про правила записи на /support/

**Files:**
- Modify: `src/pages/support.astro` — новый раздел после блока «Account & data» (строки 33–35)

**Interfaces:**
- Consumes: ничего.
- Produces: ничего.

- [ ] **Step 1: Добавить раздел на страницу поддержки**

В `src/pages/support.astro` после строки

```astro
    <p>For data questions, see our <a href="/privacy/">Privacy Policy</a> or email us.</p>
```

и перед закрывающим `</main>` вставить:

```astro
    <h2>Recording lectures and meetings</h2>
    <p>Notix helps you capture material you are entitled to capture. Rules on recording differ between schools, workplaces, and countries, and in some places everyone in the room has to agree before you start — so check the rules that apply to you before you hit record.</p>
```

- [ ] **Step 2: Собрать и проверить страницу**

```bash
npm run build
grep -c "Recording lectures and meetings" dist/support/index.html
```

Ожидается: `1`.

- [ ] **Step 3: Коммит**

```bash
git add src/pages/support.astro
git commit -m "content(site): правила записи переезжают на страницу поддержки"
```

---

## Финальная проверка перед деплоем

Деплой выполняется **только после** подтверждения, что бек перестал хранить `audio_file` после успешной транскрипции. До этого ответ №7 утверждает на публичной странице то, что ещё не соответствует действительности.

- [ ] `npm run build` проходит без ошибок и предупреждений
- [ ] `npm run check:faq` → `OK: 10 questions, JSON-LD and HTML agree`
- [ ] В `src/pages/index.astro` не осталось ни одного захардкоженного `<details class="faq-item">` с текстом вопроса: `grep -c 'faq-q">[A-Z]' src/pages/index.astro` → `0`
- [ ] Rich Results Test (https://search.google.com/test/rich-results) принимает `FAQPage` на собранной странице
- [ ] Alex подтвердил правку бека по аудио
