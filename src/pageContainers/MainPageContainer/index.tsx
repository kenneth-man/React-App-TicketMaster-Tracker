/* eslint-disable import/no-cycle */
import { Column } from '../../components';
import { IMainPageContainerProps } from './IMainPageContainerProps';

const MainPageContainer = ({
	Component
// eslint-disable-next-line arrow-body-style
}: IMainPageContainerProps): JSX.Element => {
	// logic goes here

	return (
		<Column
			extraClasses="w-full h-full"
		>
			{Component && <Component />}
		</Column>
	);
};

export default MainPageContainer;
