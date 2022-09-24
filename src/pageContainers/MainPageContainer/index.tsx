/* eslint-disable import/no-cycle */
import { IMainPageContainerProps } from './IMainPageContainerProps';

const MainPageContainer = ({
	Component
}: IMainPageContainerProps): JSX.Element => {
	console.log('logic goes here');

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
