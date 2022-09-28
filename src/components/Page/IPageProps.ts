import { ReactNode } from 'react';
import { IErrorProps } from '../../utils/interfaces';

export interface IPageProps {
    children: ReactNode;
    loading: boolean;
    error: IErrorProps | undefined;
    setError: Function;
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
