import React from "react";

export const Trigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
    <button
        ref={ref}
        {...props}
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
            <div className="font-dirtyline capitalize leading-[1]">
                M
            </div>
            <div className="flex items-end gap-1">
                <div className="font-semibold tracking-[-2px]">enu</div>
                <span className="inline-block w-[4px] h-[4px] mb-[6px] bg-[#1E1E1E]" />
            </div>
        </div>
        <span className="m-0 absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#1E1E1E]/80 group-hover:w-full transition-all duration-300 ease-out" />
    </button>
));

Trigger.displayName = "Trigger";
