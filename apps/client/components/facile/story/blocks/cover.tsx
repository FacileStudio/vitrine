import LightPillar from "@/components/LightPillar";
import { MarcelEyes, MarcelSpheres, useMarcelEyes } from "@/components/facile/marcelEyes";
import type { BlockProps } from "../types";
import { Block, Cell, Media } from "../bento";

export default function Cover({ block }: BlockProps) {
    const { frame, eyes, spheres, start, stop } = useMarcelEyes("cover");

    const marcel = block.effect === "marcel";

    // projet-zero's cover trades the static hero shot for the alien-energy light pillar
    const pillar = block.effect === "projet-zero-pillar";

    return (
        <Block cols={block.cols} className="relative">
            {marcel ? <MarcelSpheres variant="cover" ref={spheres} /> : null}

            <Cell col="1 / -1" row="1 / -1">
                <div
                    className="rounded-md overflow-hidden relative h-full w-full"
                    onPointerEnter={marcel ? start : undefined}
                    onPointerLeave={marcel ? stop : undefined}
                >
                    {pillar ? <LightPillar /> : <Media src={block.media[0]} />}

                    {marcel ? <MarcelEyes variant="cover" frameRef={frame} ref={eyes} /> : null}
                </div>
            </Cell>
        </Block>
    );
}
