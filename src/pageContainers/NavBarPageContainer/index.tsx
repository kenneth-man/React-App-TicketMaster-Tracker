/* eslint-disable import/no-cycle */
import { INavBarPageContainerProps } from './INavBarPageContainerProps';

const NavBarPageContainer = ({
	Component
// eslint-disable-next-line arrow-body-style
}: INavBarPageContainerProps): JSX.Element => {
	// logic goes here

	return (
		<div
			className="w-full h-full"
			data-testid="NavBarPageContainer"
		>
			{Component && <Component />}
		</div>
	);
};

export default NavBarPageContainer;
