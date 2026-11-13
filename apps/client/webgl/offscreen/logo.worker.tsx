import { GRID, LOGO, LogoScene, MODEL_SCALE } from "./logoScene";
import { follow, ready, serve } from "./serve";

export type LogoMessage = { type: "grid"; value: number } | { type: "scale"; value: number };

const grid = { current: GRID.from };
const scale = { current: MODEL_SCALE.from };

serve<null, LogoMessage>(
    LOGO,
    ({ nativeDpr }) => <LogoScene grid={grid} scale={scale} follow={follow} nativeDpr={nativeDpr} onReady={ready} />,
    (message) => {
        if (message.type === "grid")
            grid.current = message.value;
        else
            scale.current = message.value;
    },
);
