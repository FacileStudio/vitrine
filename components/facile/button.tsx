import {usePathname, useRouter} from "next/navigation";
import { TransitionOut } from "@/components/facile/pageTransition";
import React, { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Image from "next/image";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    icon: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ text, icon, className = "", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(`
                    bg-[#CAE6D8] hover:bg-[#1E1E1E]
                    text-[#1E1E1E] hover:text-[#CAE6D8]
                    border-2 border-[#1E1E1E]/33 rounded-full
                    px-4 py-3
                    duration-150 transition-colors
                    flex gap-2 items-center
                    cursor-pointer
                    group
                `, className)}
                {...props}
            >
                <div 
                    className="w-6 h-6 bg-[#1E1E1E] group-hover:bg-[#CAE6D8] transition-colors duration-150"
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

export const LogoButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'text' | 'icon'>>(
    ({ className = "", ...props }, ref) => {
        const router = useRouter();
        const pathName = usePathname();
        const href = "/";

        return (
        <button
            className={clsx(
                'cursor-pointer',
                className
            )}
            onClick={() => {
                if (pathName !== href)
                    TransitionOut({href, router})
            }}
            ref={ref}
            {...props}
        >
            <Image src={"/icons/F..svg"} alt={"Home logo"} width={28} height={28} />
        </button>
        );
    }
);


export const TransitionButton = ({href, text}: Omit<ButtonProps, 'icon'> & {href: string} ) => {
    const router = useRouter();
    const pathName = usePathname();
    if (!href)
        return null;
    return (
        <div
            onClick={() => {
                if (pathName !== href)
                    TransitionOut({href, router})
            }}
            className="
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
            "
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
        </div>
    );
}
