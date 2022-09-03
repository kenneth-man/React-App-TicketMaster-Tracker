/* eslint-disable import/no-cycle */
import { IRoutesDataProps } from '../utils/interfaces';
import {
	DetailsContainer,
	LoginContainer,
	NavBarPageContainer,
	ProfileContainer,
	RegisterContainer
} from '../pageContainers';
import {
	Attractions,
	Classifications,
	Events,
	Home,
	Page404,
	Suggestions,
	Venues
} from '../pages';
import { navBarPageContainerType } from '../utils/enums';

export const routesData: IRoutesDataProps[] = [
	{
		path: '/',
		Container: NavBarPageContainer,
		Component: Home,
		ContainerAlt: LoginContainer,
		pageContainerType: navBarPageContainerType.Home
	},
	{
		path: '/Attractions',
		Container: NavBarPageContainer,
		Component: Attractions,
		pageContainerType: navBarPageContainerType.Attractions
	},
	{
		path: '/Classifications',
		Container: NavBarPageContainer,
		Component: Classifications,
		pageContainerType: navBarPageContainerType.Classifications
	},
	{
		path: '/Events',
		Container: NavBarPageContainer,
		Component: Events,
		pageContainerType: navBarPageContainerType.Events
	},
	{
		path: '/Register',
		Container: RegisterContainer
	},
	{
		path: '/Suggestions',
		Container: NavBarPageContainer,
		Component: Suggestions,
		pageContainerType: navBarPageContainerType.Suggestions
	},
	{
		path: '/Venues',
		Container: NavBarPageContainer,
		Component: Venues,
		pageContainerType: navBarPageContainerType.Venues
	},
	{
		path: '/Details:resultName',
		Container: DetailsContainer
	},
	{
		path: '/Profile:userName',
		Container: ProfileContainer
	},
	{
		path: '*',
		Container: Page404
	}
];
