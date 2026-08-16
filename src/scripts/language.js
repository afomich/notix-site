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
    // для которого у нас вообще есть страница. 'pt-BR' должен находить 'pt',
    // поэтому сравниваем по первой части тега.
    const preferred = (navigator.languages || [navigator.language || ''])
      .map((tag) => String(tag).toLowerCase().split('-')[0])
      .find((base) => locales.some((locale) => locale.code.split('-')[0] === base));

    const match = preferred
      ? locales.find((locale) => locale.code.split('-')[0] === preferred)
      : undefined;

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
