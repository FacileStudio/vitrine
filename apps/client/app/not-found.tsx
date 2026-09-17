import NotFound from "@/components/facile/notFound";
import { defaultLocale } from "@/lib/i18n/locales";
import Shell from "./shell";

export default function RootNotFound() {
    return (
        <Shell locale={defaultLocale}>
            <NotFound />
        </Shell>
    );
}
