/* eslint-disable import/no-cycle */
import { Column } from '../../components';
import { IMainPageContainerProps } from './IMainPageContainerProps';

const MainPageContainer = ({
	Component
}: IMainPageContainerProps): JSX.Element => {
	// eslint-disable-next-line no-console
	console.log('logic goes here');

	return (
		<Column
			extraClasses="w-full h-full"
		>
			{Component && <Component />}
		</Column>
	);
};

export default MainPageContainer;
