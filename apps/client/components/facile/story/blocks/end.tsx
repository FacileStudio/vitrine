import { useTranslations } from "next-intl";
import Line from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import AppMark from "@/components/facile/appMark";
import ArrowLink from "@/components/facile/arrowLink";
import type { BlockProps } from "../types";
import { Block, Cell, Media } from "../bento";
import Emphasis from "../../emphasis";

export default function End({ block, onClose }: BlockProps) {
    const t = useTranslations("story");
    const framed = block.media?.[0] ? String(block.media[0]) : undefined;

    return (
        <Block cols={block.cols}>
            <Cell col="1 / -1" row="1 / -1">
                {/* an image frames the block at 16:10 on its full height, so a wide screenshot trims top and bottom, never the sides */}
                <div className={`relative h-full ${framed ? "mx-auto aspect-16/10 max-w-full overflow-hidden rounded-fc" : "w-full"}`}>
                    {framed ? (
                        <Media src={framed} className="absolute inset-0" />
                    ) : null}

                    <div className="relative flex h-full w-full flex-col justify-between gap-[2.5vh] p-[5vh]">
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

                        <div className="flex flex-col gap-[2.5vh]">
                            {block.icon ? (
                                <Line>
                                    <AppMark icon={block.icon} className="text-[10vh] text-accent" fileClassName="h-[10vh] w-[10vh] object-contain" />
                                </Line>
                            ) : null}

                            {block.eyebrow ? (
                                <Line as="p" className="subtext text-current">
                                    {block.eyebrow}
                                </Line>
                            ) : null}

                            <Line as="h2" className="whitespace-pre-line">
                                <Emphasis text={block.title ?? t("thanks")} />
                            </Line>

                            {block.text ? (
                                <SplitLines as="p" text={block.text} className="lead max-w-[48ch] text-current opacity-70" />
                            ) : null}

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
