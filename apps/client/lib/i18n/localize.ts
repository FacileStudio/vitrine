import { useLocale } from "next-intl";
import { locales, type Locale } from "./locales";

export type Localized<T = string> = { [L in Locale]: T };

export type Resolved<T> =
    T extends Localized<infer V> ? Resolved<V>
    : T extends readonly (infer U)[] ? Resolved<U>[]
    : T extends object ? { [K in keyof T]: Resolved<T[K]> }
    : T;

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

const cache = new WeakMap<object, Map<Locale, unknown>>();

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

export function useLocalized<T>(value: T): Resolved<T> {
    return localize(value, useLocale() as Locale);
}
