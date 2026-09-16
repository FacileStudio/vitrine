import NotFound from "@/components/facile/notFound";
import { defaultLocale } from "@/lib/i18n/locales";
import Shell from "./shell";

// outside the locale segment there is no layout drawing the document, so this page does
export default function RootNotFound() {
    return (
        <Shell locale={defaultLocale}>
            <NotFound />
        </Shell>
    );
}
