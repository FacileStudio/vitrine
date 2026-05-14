import clsx from "clsx";
import { forwardRef, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

type FloatingInputProps = {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textarea?: boolean;
};


export const Input = forwardRef<HTMLInputElement,InputProps>(({ className, ...props }, ref) => ( 
    <div className="relative w-full">
        <label className="absolute bg-[#CAE6D8] px-4 left-5 top-0 -translate-y-1/2">{props.label}</label>
        <input
                ref={ref}
                className={clsx(
                    "p-4 text-center w-full rounded-full overflow-hidden border border-[#1E1E1E]/20 focus:outline-none",
                    className)}
                {...props}
            /> 
    </div>));

export const FloatingInput = ({ label, name, type = "text", required = false, value, onChange, textarea = false }: FloatingInputProps) => {
    const [focused, setFocused] = useState(false);
    const isActive = focused || value.length > 0;

    return (
        <fieldset
            className={`border relative h-20 z-20 !border-[#1E1E1E]/20 transition-colors duration-150 w-full p-0 m-0 rounded-full`}
        >
            <legend
                className={`px-4 transition-all duration-150`}
            >
                {label}{required && " *"}
            </legend>
            {textarea ? (
                <textarea
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="absolute w-full bg-transparent text-[#1E1E1E] outline-none text-sm resize-none min-h-[80px]"
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="absolute top-[-10px] z-10 w-full bg-transparent px-4 h-full text-[#1E1E1E] outline-none"
                />
            )}
        </fieldset>
    );
};
