import { INavBarPageContainerProps } from './INavBarPageContainerProps';
import { navBarPageContainerType } from '../../utils/enums';
import {
	Home,
	Attractions,
	Classifications,
	Events,
	Suggestions,
	Venues
} from '../../pages';

const NavBarPageContainer = ({
	pageContainerType
}: INavBarPageContainerProps) => (
	<div
		className="w-full h-full"
		data-testid="NavBarPageContainer"
	>
		{ pageContainerType === navBarPageContainerType.Home && <Home /> }
		{ pageContainerType === navBarPageContainerType.Attractions && <Attractions /> }
		{ pageContainerType === navBarPageContainerType.Classifications && <Classifications /> }
		{ pageContainerType === navBarPageContainerType.Events && <Events /> }
		{ pageContainerType === navBarPageContainerType.Suggestions && <Suggestions /> }
		{ pageContainerType === navBarPageContainerType.Venues && <Venues /> }
	</div>
);

export default NavBarPageContainer;
