import { ReactNode, MouseEventHandler } from 'react';

export interface ICommonButtonProps {
    children: ReactNode;
    type: 'button' | 'submit' | 'reset' | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    extraClasses?: string;
}
