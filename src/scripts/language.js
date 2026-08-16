// Подсказка «страница есть на твоём языке».
//
// Редиректа нет сознательно: автоматический редирект на многоязычном сайте — самый
// частый способ добиться того, чтобы Google проиндексировал одну версию из двадцати.
// Здесь содержимое страницы не меняется, поэтому краулер и человек видят одно и то же,
// а решение остаётся за человеком.
//
// Выбор запоминается: полоска показывается один раз, а не на каждой странице.

const STORAGE_KEY = 'notix-locale-choice';

const dataEl = document.querySelector('[data-lang-data]');
const hint = document.querySelector('[data-lang-hint]');
if (dataEl && hint) {
  try {
    const { current, template, locales } = JSON.parse(dataEl.textContent || '{}');

    // Человек уже выбрал язык руками — больше не переспрашиваем.
    const chosen = localStorage.getItem(STORAGE_KEY);

    // navigator.languages идёт по убыванию предпочтения: берём первый язык,
    // для которого у нас вообще есть страница. Сравниваем по базовой части тега,
    // чтобы 'pt-BR' находил 'pt'.
    //
    // Сопоставляем со списком `tags`, а не с ключом локали: они совпадают не всегда.
    // Норвежская система шлёт `nb-NO`, а локаль лежит под `no` — по ключу совпадения
    // не было бы, и норвежец не увидел бы подсказку вовсе.
    const bases = (navigator.languages || [navigator.language || '']).map(
      (tag) => String(tag).toLowerCase().split('-')[0]
    );

    const match = bases
      .map((base) => locales.find((locale) => locale.tags.includes(base)))
      .find(Boolean);

    if (match && match.code !== current && chosen !== 'dismissed' && chosen !== current) {
      hint.querySelector('[data-lang-hint-text]').textContent = template;
      // Подпись ссылки — само название языка на нём самом. Подставлять его внутрь
      // фразы нельзя: польскому нужен локатив, нидерландскому артикль, русскому
      // предложный падеж — а название всегда приходит в именительном.
      const cta = hint.querySelector('[data-lang-hint-cta]');
      cta.textContent = match.name;
      cta.href = match.href;
      cta.setAttribute('lang', match.code);
      cta.addEventListener('click', () => localStorage.setItem(STORAGE_KEY, match.code));
      hint
        .querySelector('[data-lang-hint-dismiss]')
        .addEventListener('click', () => {
          localStorage.setItem(STORAGE_KEY, 'dismissed');
          hint.hidden = true;
        });
      hint.hidden = false;
    }
  } catch {
    // Подсказка — украшение. Если разметка данных сломалась, страница обязана
    // остаться рабочей, поэтому ошибка гасится молча и намеренно.
  }
}
