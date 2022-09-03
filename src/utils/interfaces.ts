import { navBarPageContainerType } from './enums';

export interface IRoutesDataProps {
	path: string;
	Element: Function;
	pageContainerType?: navBarPageContainerType;
}
