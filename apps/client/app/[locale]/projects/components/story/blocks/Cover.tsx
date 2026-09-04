import LightPillar from "@/app/[locale]/projects/components/CustomCoverFactory/LightPillar";
import type { BlockProps } from "../../../lib/story";
import { MarcelEyes, MarcelHands, useMarcelEyes } from "../../CustomCoverFactory/MarcelCover";
import { Block, Cell, Media } from "./Bento";

export default function Cover({ block, project, imgRef, ref }: BlockProps) {
    const { frame, eyes, spheres, start, stop } = useMarcelEyes("cover");

    const isCoverSlot = block.media[0] === project.image;

    // only the opening cover wears the eyes — the mid-story ones are other frames
    const marcel = project.customCover === "marcel" && isCoverSlot;

    // projet-zero's cover trades the static hero shot for the alien-energy light pillar
    const projetZero = project.customCover === "projet-zero-pillar" && isCoverSlot;

    return (
        <Block ref={ref} cols={block.cols} className="relative">
            {marcel ? <MarcelHands variant="cover" ref={spheres} /> : null}

            <Cell col="1 / -1" row="1 / -1">
                <div
                    ref={imgRef}
                    className="rounded-md overflow-hidden relative h-full w-full"
                    onPointerEnter={marcel ? start : undefined}
                    onPointerLeave={marcel ? stop : undefined}
                >
                    {projetZero ? (
                        <LightPillar />
                    ) : (
                        <Media src={block.media[0]} pop={!imgRef} />
                    )}

                    {marcel ? <MarcelEyes variant="cover" frameRef={frame} ref={eyes} /> : null}
                </div>
            </Cell>
        </Block>
    );
}
