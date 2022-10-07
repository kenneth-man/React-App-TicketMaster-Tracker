import { ReactNode } from 'react';
import { commonLinkType } from '../../utils/enums';

export interface ICommonLinkProps {
    children: ReactNode;
	type: commonLinkType;
    href: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    extraClasses?: string;
}
