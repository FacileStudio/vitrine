import { ComponentType } from "react";
import LightPillar from "./LightPillar";
import { MarcelCover } from "./MarcelCover";
import { CustomCoverProps } from "./types";
import { isVideoFile } from "../../lib/types";

const mediaClass = "pointer-events-none absolute top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-md object-cover will-change-[clip-path] [clip-path:inset(100%_0_0_0)]";

const ProjectZeroPillar = ({ refs, index }: CustomCoverProps) => {
    return (
        <div className="relative shrink-0">
            <div
                ref={refs.entry(index)}
                className="relative 3xl:w-5xl w-[50vw] aspect-16/10 shrink-0 overflow-hidden rounded-md"
            >
                <div ref={refs.img(index)} className="absolute inset-0 will-change-transform">
                    <LightPillar className="object-cover brightness-100 transition-all duration-300 ease-out group-hover/card:brightness-[0.6] group-hover/card:scale-110" />
                </div>
            </div>
        </div>
    )
};

const DefaultCoverRender = ({ coverClass, project, refs, index }: CustomCoverProps) => (
    <div className="relative shrink-0">
        <div
            ref={refs.entry(index)}
            className="relative 3xl:w-5xl w-[50vw] aspect-16/10 shrink-0 overflow-hidden rounded-md"
        >
            <div ref={refs.img(index)} className="absolute inset-0 will-change-transform">
                <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className={`${coverClass} group-hover/card:brightness-[0.6] group-hover/card:scale-110`}
                />
            </div>

            {project.video && (
                isVideoFile(project.video) ? (
                    <video
                        data-media
                        src={project.video}
                        loop muted playsInline preload="none"
                        className={mediaClass}
                    />
                ) : (
                    <img
                        data-media
                        src={project.video}
                        alt={project.name}
                        className={mediaClass}
                    />
                )
            )}
        </div>
    </div>
);


const customCovers = {
    "marcel": MarcelCover,
    "projet-zero-pillar": ProjectZeroPillar
} as const;

export type CustomCoverId = keyof typeof customCovers;
export type CustomCoverComponent = typeof customCovers[CustomCoverId];

export const CustomCoverRender = ({customCoverId, ...rest} : CustomCoverProps & { customCoverId?: CustomCoverId }) => {
    if (!customCoverId) {
        return <DefaultCoverRender {...rest} />;
    }
    const Component = customCovers[customCoverId] as ComponentType<CustomCoverProps>;
    return <Component {...rest} />;  
};

