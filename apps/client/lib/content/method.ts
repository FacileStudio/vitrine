import { cache } from "react";
import type { RouterOutputs } from "@repo/trpc";
import type { Resolved } from "@/lib/i18n/localize";
import { locales } from "@/lib/i18n/locales";
import { trpc } from "@/lib/trpc";

export type AuthoredStep = RouterOutputs["process"]["list"][number];

export type ProcessStep = Resolved<AuthoredStep>;

// a step just created in the backoffice stays off the site until every language has its text
const complete = (s: AuthoredStep) => locales.every((l) => s.title[l]?.trim() && s.text[l]?.trim());

export const fetchProcess = cache(async () => (await trpc.process.list.query()).filter(complete));
