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
	fullWidth: boolean;
	fullHeight: boolean;
	alignItems?: string;
	justifyContent?: string;
}
