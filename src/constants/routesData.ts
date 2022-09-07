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

export const routesData: IRoutesDataProps[] = [
	{
		path: '/',
		Container: NavBarPageContainer,
		Component: Home,
		ContainerAlt: LoginContainer
	},
	{
		path: '/Attractions',
		Container: NavBarPageContainer,
		Component: Attractions
	},
	{
		path: '/Classifications',
		Container: NavBarPageContainer,
		Component: Classifications
	},
	{
		path: '/Events',
		Container: NavBarPageContainer,
		Component: Events
	},
	{
		path: '/Register',
		Container: NavBarPageContainer,
		Component: Home,
		ContainerAlt: RegisterContainer
	},
	{
		path: '/Suggestions',
		Container: NavBarPageContainer,
		Component: Suggestions
	},
	{
		path: '/Venues',
		Container: NavBarPageContainer,
		Component: Venues
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
