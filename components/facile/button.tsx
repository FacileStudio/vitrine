import {usePathname, useRouter} from "next/navigation";
import { TransitionOut } from "@/components/facile/pageTransition";
import React, { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    icon: string;
    variant?: "light" | "dark";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ text, icon, variant = "dark", className = "", ...props }, ref) => {
        const isDark = variant === "dark";

        return (
            <button
                ref={ref}
                className={clsx(
                    "flex items-center gap-2 rounded-md px-4 py-3",
                    "transition-colors duration-300 cursor-pointer group",
                    isDark
                        ? "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                        : "bg-black/5 text-black/60 hover:bg-black/10 hover:text-black",
                    className
                )}
                {...props}
            >
                <div
                    className={clsx(
                        "w-5 h-5 transition-colors duration-300",
                        isDark ? "bg-white/60 group-hover:bg-white" : "bg-black/60 group-hover:bg-black"
                    )}
                    style={{
                        WebkitMaskImage: `url(/icons/${icon}.svg)`,
                        maskImage: `url(/icons/${icon}.svg)`,
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat'
                    }}
                />
                <span>{text}</span>
            </button>
        );
    }
);

Button.displayName = "Button";

type LogoButtonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export const LogoButton = forwardRef<HTMLAnchorElement, LogoButtonProps>(
    ({ className = "", ...props }, ref) => {
        const router = useRouter();
        const pathName = usePathname();
        const href = "/";

        return (
        <Link
            href={href}
            className={clsx(
                'cursor-pointer',
                className
            )}
            onClick={(event) => {
                if (pathName === href) {
                    event.preventDefault();
                    return;
                }

                event.preventDefault();
                TransitionOut({href, router});
            }}
            ref={ref}
            {...props}
        >
            <Image src={"/icons/F..svg"} alt={"Home logo"} width={28} height={28} />
        </Link>
        );
    }
);

LogoButton.displayName = "LogoButton";

type TransitionButtonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    text: string;
};

export const TransitionButton = ({href, text, className = "", ...props}: TransitionButtonProps) => {
    const router = useRouter();
    const pathName = usePathname();
    if (!href)
        return null;
    return (
        <Link
            href={href}
            onClick={(event) => {
                if (pathName === href) {
                    event.preventDefault();
                    return;
                }

                event.preventDefault();
                TransitionOut({href, router});
            }}
            className={clsx(`
                relative
                bg-[#CAE6D8]
                py-0.5 px-2
                justify-start
                items-start
                text-[#1E1E1E]
                flex
                cursor-pointer
                group
                text-lg
                gap-0
            `, className)}
            {...props}
        >
            <div
                className="relative m-0 p-0 flex items-end gap font-manrope text-2xl"
            >
                <div className="font-dirtyline capitalize">
                    {text[0]}
                </div>
                <div className="flex items-end gap-1">
                    <div className="font-semibold tracking-[-2px]">{text.slice(1)}</div>
                    <span className="inline-block w-[4px] h-[4px] mb-[6px] bg-[#1E1E1E]" />
                </div>
            </div>
            <span className="m-0 absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#1E1E1E]/80 group-hover:w-full transition-all duration-300 ease-out" />
        </Link>
    );
}
