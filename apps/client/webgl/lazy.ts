import dynamic from "next/dynamic";

export const DitherView = dynamic(() => import("./DitherView").then((m) => m.DitherView), { ssr: false });

export const LightPillar = dynamic(() => import("@/components/LightPillar"), { ssr: false });
