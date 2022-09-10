/* eslint-disable import/no-cycle */
import { IRoutesDataProps } from '../utils/interfaces';
import {
	DetailsContainer,
	LoginContainer,
	MainPageContainer,
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
		Container: MainPageContainer,
		Component: Home,
		ContainerAlt: LoginContainer
	},
	{
		path: '/Attractions',
		Container: MainPageContainer,
		Component: Attractions
	},
	{
		path: '/Classifications',
		Container: MainPageContainer,
		Component: Classifications
	},
	{
		path: '/Events',
		Container: MainPageContainer,
		Component: Events
	},
	{
		path: '/Register',
		Container: MainPageContainer,
		Component: Home,
		ContainerAlt: RegisterContainer
	},
	{
		path: '/Suggestions',
		Container: MainPageContainer,
		Component: Suggestions
	},
	{
		path: '/Venues',
		Container: MainPageContainer,
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
