/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../context/index';
import { Navbar } from '../../components';
import { INavbarRoutesDataProps } from '../../utils/interfaces';
import { navbarRoutesData } from '../../constants/navbarRoutesData';

const NavbarContainer = (): JSX.Element => {
	const { auth, isUserLoggedIn, location }: any = useContext(Context);
	const [navbarData, setNavbarData]: [INavbarRoutesDataProps[], Function] = useState<INavbarRoutesDataProps[]>([]);

	const calcShouldShowNavbar = (): boolean => {
		if (!isUserLoggedIn && (location.pathname === '/' || location.pathname === '/Register')) {
			return false;
		}

		return true;
	};

	const calcNonLoggedInNavbarElements = (): INavbarRoutesDataProps[] => navbarRoutesData.filter(
		(curr: INavbarRoutesDataProps) => curr.path !== '/' && curr.path !== '/Profile/:userName'
	);

	useEffect(() => {
		if (!isUserLoggedIn) {
			setNavbarData(calcNonLoggedInNavbarElements());

			return;
		}

		setNavbarData(navbarRoutesData);
	}, [isUserLoggedIn]);

	return (
		location && calcShouldShowNavbar()
		&& (
			<Navbar
				navbarData={navbarData}
				auth={auth}
			/>
		)
	);
};

export default NavbarContainer;
