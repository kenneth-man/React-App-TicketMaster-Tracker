import { ReactNode, MouseEventHandler } from 'react';

export interface ICommonButtonProps {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    type: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
    extraClasses?: string;
}
