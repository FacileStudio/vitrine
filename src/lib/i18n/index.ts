import { getContext, setContext } from "svelte";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr, type Messages } from "./fr";

export type { Messages };

export const LOCALES = ["fr", "en", "de", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

export const PREFIXED_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

export const INTL_LOCALES: Record<Locale, string> = { fr: "fr-FR", en: "en-US", de: "de-DE", es: "es-ES" };

export const OG_LOCALES: Record<Locale, string> = { fr: "fr_FR", en: "en_US", de: "de_DE", es: "es_ES" };

const CATALOGS: Record<Locale, Messages> = { fr, en, de, es };

const PREFIX = new RegExp(`^/(${PREFIXED_LOCALES.join("|")})(?=/|$)`);

/**
 * Narrows a route parameter to a locale, French when it is missing or unknown.
 */
export function toLocale(value: string | undefined): Locale {
  return LOCALES.find((locale) => locale === value) ?? DEFAULT_LOCALE;
}

/**
 * The copy catalog of a locale.
 */
export function getMessages(locale: Locale): Messages {
  return CATALOGS[locale];
}

/**
 * Prefixes an internal path such as `/projects` or `/#suite` with the locale. French keeps no prefix.
 */
export function localizeHref(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  const [pathname, hash] = path.split("#");
  const prefixed = `/${locale}${pathname === "/" ? "" : pathname}`;
  return hash === undefined ? prefixed : `${prefixed}#${hash}`;
}

/**
 * Removes the locale prefix from a pathname: `/en/projects` becomes `/projects`, `/en` becomes `/`.
 */
export function stripLocale(pathname: string): string {
  return pathname.replace(PREFIX, "") || "/";
}

/**
 * Fills `{name}` placeholders in a catalog message.
 */
export function format(message: string, params: Record<string, string | number>): string {
  return message.replace(/\{(\w+)\}/g, (match, name: string) => (name in params ? String(params[name]) : match));
}

export interface SiteI18n {
  readonly locale: Locale;
  readonly t: Messages;
  href(path: string): string;
}

const KEY = Symbol("vitrine.i18n");

/**
 * Shares the current locale and its catalog with every component below the root layout.
 */
export function provideI18n(locale: () => Locale): SiteI18n {
  const i18n: SiteI18n = {
    get locale() {
      return locale();
    },
    get t() {
      return getMessages(locale());
    },
    href: (path) => localizeHref(path, locale()),
  };
  setContext(KEY, i18n);
  return i18n;
}

/**
 * The locale, catalog and link helper set by the root layout.
 */
export function useI18n(): SiteI18n {
  return getContext<SiteI18n>(KEY);
}
