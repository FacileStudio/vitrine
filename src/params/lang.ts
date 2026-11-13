import type { ParamMatcher } from "@sveltejs/kit";
import { PREFIXED_LOCALES } from "$lib/i18n";

export const match: ParamMatcher = (param) => PREFIXED_LOCALES.some((locale) => locale === param);
