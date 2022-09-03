import { IRoutesDataProps } from '../utils/interfaces';
import {
	DetailsContainer,
	LoginContainer,
	NavBarPageContainer,
	ProfileContainer,
	RegisterContainer
} from '../pageContainers';
import { Page404 } from '../pages';
import { navBarPageContainerType } from '../utils/enums';

export const routesData: IRoutesDataProps[] = [
	{
		path: '/',
		Element: NavBarPageContainer,
		pageContainerType: navBarPageContainerType.Home
	},
	{
		path: '/Attractions',
		Element: NavBarPageContainer,
		pageContainerType: navBarPageContainerType.Attractions
	},
	{
		path: '/Classifications',
		Element: NavBarPageContainer,
		pageContainerType: navBarPageContainerType.Classifications
	},
	{
		path: '/Events',
		Element: NavBarPageContainer,
		pageContainerType: navBarPageContainerType.Events
	},
	{
		path: '/Login',
		Element: LoginContainer
	},
	{
		path: '/Register',
		Element: RegisterContainer
	},
	{
		path: '/Suggestions',
		Element: NavBarPageContainer,
		pageContainerType: navBarPageContainerType.Suggestions
	},
	{
		path: '/Venues',
		Element: NavBarPageContainer,
		pageContainerType: navBarPageContainerType.Venues
	},
	{
		path: '/Details:resultName',
		Element: DetailsContainer
	},
	{
		path: '/Profile:userName',
		Element: ProfileContainer
	},
	{
		path: '*',
		Element: Page404
	}
];
