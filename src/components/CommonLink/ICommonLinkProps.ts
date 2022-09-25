import { ReactNode } from 'react';

export interface ICommonLinkProps {
    children: ReactNode;
    isRouterLink: boolean;
    href: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    extraClasses?: string;
}
