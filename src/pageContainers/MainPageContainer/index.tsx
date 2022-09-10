/* eslint-disable import/no-cycle */
import { IMainPageContainerProps } from './IMainPageContainerProps';

const MainPageContainer = ({
	Component
// eslint-disable-next-line arrow-body-style
}: IMainPageContainerProps): JSX.Element => {
	// logic goes here

	return (
		<div
			className="w-full h-full"
			data-testid="MainPageContainer"
		>
			{Component && <Component />}
		</div>
	);
};

export default MainPageContainer;
