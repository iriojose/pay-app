import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = HTMLAttributes<HTMLDivElement>

export const Loading: FC<Props> = ({className}) => {
    const classes = "relative w-6 h-6 border-t-4 border-blue-600 border-solid rounded-full animate-spin"
    return (
        <div className={twMerge(classes, className)}></div>
    );
};