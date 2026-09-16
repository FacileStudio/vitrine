import { useLocale } from "next-intl";
import { locales, type Locale } from "./locales";

/** A piece of authored copy, written once for every locale. */
export type Localized<T = string> = { [L in Locale]: T };

/** `T` with every `Localized` leaf collapsed to its value for a single locale. */
export type Resolved<T> =
    T extends Localized<infer V> ? Resolved<V>
    : T extends readonly (infer U)[] ? Resolved<U>[]
    : T extends object ? { [K in keyof T]: Resolved<T[K]> }
    : T;

// an object whose keys are exactly the locales is a translation; anything else is structure
const isLocalized = (value: object): value is Localized<unknown> => {
    const keys = Object.keys(value);
    return keys.length === locales.length && locales.every((l) => keys.includes(l));
};

const resolve = (value: unknown, locale: Locale): unknown => {
    if (Array.isArray(value))
        return value.map((v) => resolve(v, locale));

    if (value && typeof value === "object") {
        if (isLocalized(value))
            return resolve(value[locale], locale);

        return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolve(v, locale)]));
    }

    return value;
};

// data files are module singletons, so each one is walked once per locale, not per render
const cache = new WeakMap<object, Map<Locale, unknown>>();

/**
 * Resolves authored data to one locale. Every `{ en, fr, es, de }` leaf becomes its value
 * for `locale`, at any depth, and everything else is copied through untouched. Data files
 * therefore keep one structure (slugs, media, colours) with the copy translated in place.
 *
 * Results for object inputs are cached per locale, so calling it in a render is cheap.
 */
export function localize<T>(value: T, locale: Locale): Resolved<T> {
    if (!value || typeof value !== "object")
        return value as Resolved<T>;

    let perLocale = cache.get(value);
    if (!perLocale) {
        perLocale = new Map();
        cache.set(value, perLocale);
    }

    if (!perLocale.has(locale))
        perLocale.set(locale, resolve(value, locale));

    return perLocale.get(locale) as Resolved<T>;
}

/** `localize` bound to the locale of the page being rendered. */
export function useLocalized<T>(value: T): Resolved<T> {
    return localize(value, useLocale() as Locale);
}
