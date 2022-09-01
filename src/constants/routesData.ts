import { IRoutesDataProps } from '../utils/interfaces';
import {
	Attractions, Classifications, Details, Events, Home, Login, Page404, Profile, Register, Suggestions, Venues
} from '../pages';

export const routesData: IRoutesDataProps[] = [
	{
		path: '/',
		Component: Home
	},
	{
		path: '/Attractions',
		Component: Attractions
	},
	{
		path: '/Classifications',
		Component: Classifications
	},
	{
		path: '/Events',
		Component: Events
	},
	{
		path: '/Login',
		Component: Login
	},
	{
		path: '/Register',
		Component: Register
	},
	{
		path: '/Suggestions',
		Component: Suggestions
	},
	{
		path: '/Venues',
		Component: Venues
	},
	{
		path: '/Details:resultName',
		Component: Details
	},
	{
		path: '/Profile:userName',
		Component: Profile
	},
	{
		path: '*',
		Component: Page404
	}
];
