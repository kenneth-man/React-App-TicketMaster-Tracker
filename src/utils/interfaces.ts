import { ReactNode } from 'react';

export interface IRoutesDataProps {
	path: string;
	Container: Function;
	Component?: Function;
	ContainerAlt? : Function;
}

export interface INavbarRoutesDataProps {
	path: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Icon: any;
	Component?: Function;
	Container?: Function;
}

export interface IFlexComponentProps {
	children: ReactNode;
	fullWidth?: boolean;
	fullHeight?: boolean;
	fullPageSection?: boolean;
	alignItems?: 'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch';
	justifyContent?: 'justify-start' | 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around'
	| 'justify-evenly';
	extraClasses?: string;
	inlineStyle?: Object;
}

export interface IErrorProps {
	message: string;
	code: string;
	inputSetStates: Function[];
}
