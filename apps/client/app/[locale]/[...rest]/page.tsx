import { notFound } from "next/navigation";

// throw rather than render the page: rendering it directly answers 200, not 404
export default function LocaleRestPage() {
    notFound();
}
