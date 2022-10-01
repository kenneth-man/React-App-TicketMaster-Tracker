/* eslint-disable import/no-cycle */
import {
	Attractions,
	Classifications,
	Events,
	Home,
	Suggestions,
	Venues
} from '../pages';
import { ProfileContainer } from '../pageContainers';
import {
	HomeIcon,
	AttractionsIcon,
	ClassificationsIcon,
	EventsIcon,
	SuggestionsIcon,
	VenuesIcon,
	ProfileIcon
} from './navbarIconsData';
import { INavbarRoutesDataProps } from '../utils/interfaces';

export const navbarRoutesData: INavbarRoutesDataProps[] = [
	{
		path: '/',
		Component: Home,
		Icon: HomeIcon
	},
	{
		path: '/Attractions',
		Component: Attractions,
		Icon: AttractionsIcon
	},
	{
		path: '/Classifications',
		Component: Classifications,
		Icon: ClassificationsIcon
	},
	{
		path: '/Events',
		Component: Events,
		Icon: EventsIcon
	},
	{
		path: '/Suggestions',
		Component: Suggestions,
		Icon: SuggestionsIcon
	},
	{
		path: '/Venues',
		Component: Venues,
		Icon: VenuesIcon
	},
	{
		path: '/Profile/:userName',
		Container: ProfileContainer,
		Icon: ProfileIcon
	}
];
