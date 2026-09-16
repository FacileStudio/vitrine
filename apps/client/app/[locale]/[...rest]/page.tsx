import { notFound } from "next/navigation";

// throwing notFound() answers 404 and renders app/[locale]/not-found.tsx in the
// visitor's locale; rendering the component here directly would answer 200
export default function LocaleRestPage() {
    notFound();
}
