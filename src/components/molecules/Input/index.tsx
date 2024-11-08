import { InputHTMLAttributes, forwardRef, Ref, ReactNode } from "react";
import { FieldError } from "react-hook-form";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError;
  label?: string;
  icon?: ReactNode;
};

function Input({ error, label, icon, ...props }: Props, ref: Ref<HTMLInputElement>) {
    return (
        <div className="w-96">
            {label && (
                <label htmlFor={props.id} className="block text-gray-700 text-sm font-bold mb-2">
                    {label}
                </label>
            )}

            <div className="relative">
                <input
                    ref={ref}
                    className={`shadow appearance-none border rounded h-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : 'border-gray-300'}`}
                    {...props}
                />
                {icon && <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">{icon}</div>}
            </div>

            {error && (
                <span className="text-red-500 text-sm mt-1">{error.message}</span>
            )}
        </div>
    );
}

export default forwardRef(Input);