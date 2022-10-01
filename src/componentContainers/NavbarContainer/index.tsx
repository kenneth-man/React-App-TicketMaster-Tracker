/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useMemo } from 'react';
import { Context } from '../../context/index';
import { Navbar } from '../../components';
import { INavbarRoutesDataProps } from '../../utils/interfaces';
import { navbarRoutesData } from '../../constants/navbarRoutesData';

const NavbarContainer = (): JSX.Element => {
	const { isUserLoggedIn, location }: any = useContext(Context);
	const navbarData: INavbarRoutesDataProps[] = useMemo(() => {
		if (!isUserLoggedIn) {
			return navbarRoutesData.filter((curr: INavbarRoutesDataProps) => (
				curr.path !== '/' || curr.path !== '/Profile/:userName'
			));
		}

		return navbarRoutesData;
	}, [isUserLoggedIn]);

	const calcShouldShowNavbar = (): boolean => {
		if (!isUserLoggedIn && (location.pathname === '/' || location.pathname === '/Register')) {
			return false;
		}

		return true;
	};

	return (
		(location && calcShouldShowNavbar())
        && (
        	<Navbar
        		navbarData={}
        		isUserLoggedIn={isUserLoggedIn}
        	/>
        )
	);
};

export default NavbarContainer;
