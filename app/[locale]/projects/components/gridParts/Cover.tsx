import type { PartProps } from "../../lib/story";
import { MarcelEyes, MarcelSpheres, useMarcelEyes } from "../marcelEyes";
import { Block, Cell, Media } from "./bento";

export default function Cover({ block, project, imgRef, ref }: PartProps) {
    const { frame, eyes, spheres, start, stop } = useMarcelEyes();

    // only the opening cover wears the eyes — the mid-story ones are other frames
    const marcel = project.slug === "marcel" && block.media[0] === project.image;

    return (
        <Block ref={ref} cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                <div
                    ref={imgRef}
                    className="relative h-full w-full"
                    onPointerEnter={marcel ? start : undefined}
                    onPointerLeave={marcel ? stop : undefined}
                >
                    <Media src={block.media[0]} />

                    {marcel ? (
                        <>
                            <MarcelSpheres variant="cover" ref={spheres} />
                            <MarcelEyes variant="cover" frameRef={frame} ref={eyes} />
                        </>
                    ) : null}
                </div>
            </Cell>
        </Block>
    );
}
