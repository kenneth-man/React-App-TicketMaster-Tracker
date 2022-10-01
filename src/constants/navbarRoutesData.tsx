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
		icon: <HomeIcon />
	},
	{
		path: '/Attractions',
		Component: Attractions,
		icon: <AttractionsIcon />
	},
	{
		path: '/Classifications',
		Component: Classifications,
		icon: <ClassificationsIcon />
	},
	{
		path: '/Events',
		Component: Events,
		icon: <EventsIcon />
	},
	{
		path: '/Suggestions',
		Component: Suggestions,
		icon: <SuggestionsIcon />
	},
	{
		path: '/Venues',
		Component: Venues,
		icon: <VenuesIcon />
	},
	{
		path: '/Profile/:userName',
		Container: ProfileContainer,
		icon: <ProfileIcon />
	}
];
