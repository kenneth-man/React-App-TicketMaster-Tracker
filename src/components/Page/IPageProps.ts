import { ReactNode } from 'react';

export interface IPageProps {
    children: ReactNode;
    isLoading: boolean;
    alignItems?: 'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch';
    justifyContent?: 'justify-start' | 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around'
    | 'justify-evenly';
    backgroundImage?: string;
    backgroundGradient?: string;
	backgroundSize?: string;
    backgroundPosition?: string;
    backgroundAttachment?: string;
    backgroundRepeat?: string;
    extraClasses?: string;
}
