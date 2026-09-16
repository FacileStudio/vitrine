'use client';

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";
import { useNarrow } from "@/hooks/use-narrow";
import PageCurtain, { CURTAIN_MS } from "./pageTransition";
import { useScenesReady } from "@/webgl/sceneReady";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

export default function NotFound() {
    const t = useTranslations("common.notFound");
    const narrow = useNarrow();
    const [resolved, setResolved] = useState(false);
    const ready = useScenesReady();

    // the grid lands coarse and sharpens once the curtain, which waits on the same
    // ready signal, has swept all the way off
    useEffect(() => {
        if (!ready) return;
        const timer = setTimeout(() => setResolved(true), CURTAIN_MS);
        return () => clearTimeout(timer);
    }, [ready]);

    return (
        <main className="relative isolate flex h-screen w-full flex-col items-center justify-end bg-foreground p-6 pb-[2vh] text-background">
            <PageCurtain enter="dark" leave="dark" />
            

            <DitherView
                file="/models/404.glb"
                className="absolute inset-0 -z-10 opacity-80 h-full w-full"
                gridSize={resolved ? 2 : 16}
                position={[0, -0.5, 0]}
                rotation={[0, 0, 0]}
                background={null}
                highlight="#24E27A"
                parallax={0.35}
                intensity={1.8}
                scale={narrow ? 5.5 : 20}
                fov={45}
            />

            <div className="flex gap-24">
                <div className="flex flex-col gap-2">
                    <h1 className="subtitle">{t("title")}</h1>
                    <p className="mt-2 max-w-[32ch]">{t("message")}</p>
                </div>
                <Link href="/" className="button button-dark uppercase mt-4 h-fit">{t("goHome")}</Link>
            </div>

        </main>
    );
}
