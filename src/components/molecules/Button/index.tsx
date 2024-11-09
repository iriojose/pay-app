import { FC, ButtonHTMLAttributes } from "react";
import { twMerge } from 'tailwind-merge';

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({children, className, ...props}) => {
    const classes = "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 flex justify-center rounded shadow-md transition duration-300 ease-in-out"
    return (
        <button 
            className={twMerge(classes, className)} 
            {...props}
        >
            {children}
        </button>
    )
}