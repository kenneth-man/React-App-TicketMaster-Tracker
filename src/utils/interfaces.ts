import { ReactNode } from 'react';

export interface IRoutesDataProps {
	path: string;
	Container: Function;
	Component?: Function;
	ContainerAlt? : Function;
}

// put actual types later
export interface IFlexComponentProps {
	children: ReactNode;
	fullWidth?: boolean;
	fullHeight?: boolean;
	fullPageSection?: boolean;
	alignItems?: 'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch';
	justifyContent?: 'justify-start'
	| 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around' | 'justify-evenly';
	extraClasses?: string;
}
