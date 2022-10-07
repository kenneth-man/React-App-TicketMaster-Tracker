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
		icon: <HomeIcon />,
		text: 'Home'
	},
	{
		path: '/Attractions',
		icon: <AttractionsIcon />,
		text: 'Attractions'
	},
	{
		path: '/Classifications',
		icon: <ClassificationsIcon />,
		text: 'Classifications'
	},
	{
		path: '/Events',
		icon: <EventsIcon />,
		text: 'Events'
	},
	{
		path: '/Suggestions',
		icon: <SuggestionsIcon />,
		text: 'Suggestions'
	},
	{
		path: '/Venues',
		icon: <VenuesIcon />,
		text: 'Venues'
	},
	{
		path: '/Profile/:userName',
		icon: <ProfileIcon />,
		text: 'Profile'
	}
];
