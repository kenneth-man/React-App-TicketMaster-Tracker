import { ReactNode, MouseEventHandler } from 'react';
import { commonButtonType } from '../../utils/enums';

export interface ICommonButtonProps {
    children: ReactNode;
    type: 'button' | 'submit' | 'reset' | undefined;
	buttonType: commonButtonType;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    extraClasses?: string;
}
