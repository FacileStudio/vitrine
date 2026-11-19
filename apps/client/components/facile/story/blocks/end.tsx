import { useTranslations } from "next-intl";
import Line from "@/components/facile/textReveal";
import AppMark from "@/components/facile/appMark";
import ArrowLink from "@/components/facile/arrowLink";
import type { BlockProps } from "../types";
import { Block, Cell, Media } from "../bento";
import Emphasis from "../../emphasis";

export default function End({ block, onClose }: BlockProps) {
    const t = useTranslations("story");
    const framed = block.media?.[0] ? String(block.media[0]) : undefined;

    return (
        // phones get one screen-wide block: track's px-6 gutter on both sides
        <Block cols={block.cols} className={framed ? "max-md:w-[calc(100vw-3rem)]" : ""}>
            <Cell col="1 / -1" row="1 / -1">
                {/* an image frames the block at 16:10 on its full height, so a wide screenshot trims top and bottom, never the sides; phones give the image all the height the copy leaves */}
                <div className={`relative h-full ${framed ? "mx-auto flex max-w-full flex-col gap-[2vh] pt-[4vh] md:block md:aspect-16/10 md:pt-0" : "w-full"}`}>
                    {/* the card clips its overflow, so the 4vh top padding is the half of the icon that sits above the image */}
                    {framed && block.icon ? (
                        <div className="absolute inset-x-0 top-[4vh] z-10 flex -translate-y-1/2 justify-center md:hidden">
                            <AppMark icon={block.icon} className="text-[8vh] text-accent" fileClassName="h-[8vh] w-[8vh] object-contain" />
                        </div>
                    ) : null}

                    {framed ? (
                        <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-fc md:absolute md:inset-0">
                            <Media src={framed} className="absolute inset-0" />
                            {/* a dark corner behind the copy sets it apart from the screenshot, gone by the centre */}
                            <div aria-hidden className="absolute inset-0 hidden bg-linear-to-tr from-foreground/50 to-transparent to-50% md:block" />
                        </div>
                    ) : null}

                    <div className={`relative flex w-full flex-col justify-between gap-[2.5vh] ${framed ? "shrink-0 md:h-full md:p-[5vh]" : "h-full p-[5vh]"}`}>
                        {onClose ? (
                            <Line>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="group flex items-center gap-[1vh] text-[clamp(0.8rem,1.9vh,1.35rem)] text-current opacity-50 transition-opacity duration-200 hover:opacity-100"
                                >
                                    <span className="transition-transform duration-200 font-goga tracking-tight group-hover:-translate-x-1">←</span>
                                    {t("endBack")}
                                </button>
                            </Line>
                        ) : null}

                        {block.icon ? (
                            <Line className={framed ? "max-md:hidden" : undefined}>
                                <AppMark icon={block.icon} className="text-[10vh] text-accent" fileClassName="h-[10vh] w-[10vh] object-contain" />
                            </Line>
                        ) : null}

                        <div className="mt-auto flex flex-col gap-[2.5vh]">
                            {block.eyebrow ? (
                                <Line as="p" className="subtext text-current">
                                    {block.eyebrow}
                                </Line>
                            ) : null}

                            <Line as="h2" className="whitespace-pre-line">
                                <Emphasis text={block.title ?? t("thanks")} />
                            </Line>

                            {block.link ? (
                                <Line>
                                    <ArrowLink
                                        href={block.link}
                                        className="group flex w-fit items-center font-goga gap-[1vh] text-[clamp(0.8rem,1.9vh,1.35rem)] text-current transition-colors duration-200 hover:text-accent-ink"
                                    >
                                        {block.linkLabel ?? t("visitSite")}
                                    </ArrowLink>
                                </Line>
                            ) : null}
                        </div>
                    </div>
                </div>
            </Cell>
        </Block>
    );
}
