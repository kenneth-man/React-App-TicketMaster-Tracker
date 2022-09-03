/* eslint-disable import/no-cycle */
import { useEffect, useState, useMemo } from 'react';
import { INavBarPageContainerProps } from './INavBarPageContainerProps';
import { routesData } from '../../constants/routesData';
import { IRoutesDataProps } from '../../utils/interfaces';

const NavBarPageContainer = ({
	pageContainerType
}: INavBarPageContainerProps): JSX.Element => {
	const [navBarPageData, setNavBarPageData]:[
		IRoutesDataProps | undefined, Function
	] = useState<IRoutesDataProps | undefined>(undefined);

	const NavBarPageComponent: Function | undefined = useMemo(() => {
		if (navBarPageData) {
			const { Component }: IRoutesDataProps = navBarPageData;

			return Component;
		}

		return undefined;
	}, [navBarPageData]);

	useEffect(() => setNavBarPageData(
		routesData.find((curr: IRoutesDataProps) => curr.pageContainerType === pageContainerType)
	), [pageContainerType]);

	return (
		<div
			className="w-full h-full"
			data-testid="NavBarPageContainer"
		>
			{NavBarPageComponent && <NavBarPageComponent />}
		</div>
	);
};

export default NavBarPageContainer;
