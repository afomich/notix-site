/**
 * Реестр локалей.
 *
 * Локаль существует для сайта тогда и только тогда, когда у неё есть словарь в
 * `LOCALES`. Страницы генерируются по этому списку, `hreflang` строится по нему же,
 * поэтому добавление языка — это одна строка здесь плюс файл словаря, и ничего больше.
 *
 * Английский живёт в корне (`/`, `/support/`), остальные под префиксом (`/ru/`).
 * Существующие URL проиндексированы и меняться не должны.
 */
import { en } from './en';
import { ru } from './ru';
import { de } from './de';
import { pl } from './pl';
import { fr } from './fr';
import { es } from './es';
import { it } from './it';
import { nl } from './nl';
import { ja } from './ja';
import { ko } from './ko';
import { pt } from './pt';
import { sv } from './sv';
import { uk } from './uk';
import { tr } from './tr';
import { da } from './da';
import { nb } from './nb';
import { cs } from './cs';
import { ro } from './ro';
import { el } from './el';
import { fi } from './fi';
import { hu } from './hu';
import { th } from './th';
import { zh } from './zh';
import type { Dictionary } from './en';

export type { Dictionary };

export const DEFAULT_LOCALE = 'en';

export const LOCALES = {
  en,
  ru,
  de,
  pl,
  fr,
  es,
  it,
  nl,
  ja,
  ko,
  pt,
  sv,
  uk,
  tr,
  da,
  no: nb,
  cs,
  ro,
  el,
  fi,
  hu,
  th,
  zh,
} satisfies Record<string, Dictionary>;

export type LocaleCode = keyof typeof LOCALES;

export const LOCALE_CODES = Object.keys(LOCALES) as LocaleCode[];

export function dictionary(locale: LocaleCode): Dictionary {
  return LOCALES[locale];
}

/**
 * Путь страницы в заданной локали. `page` — путь без локали, всегда со слэшами
 * по краям: '/', '/support/'. Английский не получает префикса.
 */
export function localePath(locale: LocaleCode, page = '/'): string {
  return locale === DEFAULT_LOCALE ? page : `/${locale}${page}`;
}

/**
 * Альтернативы для hreflang: каждая локаль плюс x-default на английскую.
 * Симметрия обеспечивается тем, что список один и тот же на всех страницах группы —
 * несимметричная группа Google просто игнорирует целиком.
 */
export function alternates(page = '/'): { hreflang: string; path: string }[] {
  const links = LOCALE_CODES.map((code) => ({
    hreflang: LOCALES[code].hreflang,
    path: localePath(code, page),
  }));
  return [...links, { hreflang: 'x-default', path: localePath(DEFAULT_LOCALE, page) }];
}

/**
 * Языковые теги браузера, которые должны считаться этой локалью.
 *
 * `navigator.languages` присылает то, что выставлено в системе, и это не всегда
 * совпадает с нашим ключом: норвежская macOS шлёт `nb-NO`, а локаль у нас лежит
 * под `no` (макроязыковой код выбран ради более широкого совпадения в выдаче).
 * Без этой таблицы норвежец не получает подсказку вовсе.
 */
const BROWSER_ALIASES: Partial<Record<LocaleCode, string[]>> = {
  no: ['nb', 'nn'],
};

/** Базовые теги (без региона), по которым локаль опознаётся у клиента. */
export function browserTags(locale: LocaleCode): string[] {
  const base = (value: string) => value.toLowerCase().split('-')[0];
  return [
    ...new Set([locale, base(LOCALES[locale].hreflang), ...(BROWSER_ALIASES[locale] ?? [])]),
  ];
}

/**
 * JSON для вставки через `set:html`.
 *
 * `set:html` не экранирует ничего, а `JSON.stringify` не трогает `<`. Строка,
 * содержащая `</script>`, закрыла бы тег и превратила остаток JSON в разметку —
 * то есть текст словаря стал бы исполняемым. Экранируем `<` в юникод-escape:
 * JSON от этого не меняется, а разорвать тег больше нечем.
 */
export function embeddedJson(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
