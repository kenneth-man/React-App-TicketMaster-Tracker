import { navBarPageContainerType } from './enums';

export interface IRoutesDataProps {
	path: string;
	Container: Function;
	Component?: Function;
	ContainerAlt? : Function;
	pageContainerType?: navBarPageContainerType;
}
