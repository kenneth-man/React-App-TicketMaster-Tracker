/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { Context } from '../../context/index';
import { Navbar } from '../../components';

const NavbarContainer = (): JSX.Element => {
	const { isUserSignedIn, location }: any = useContext(Context);

	const calcShouldShowNavbar = (): boolean => {
		if (!isUserSignedIn && (location.pathname === '/' || location.pathname === '/Register')) {
			return false;
		}

		return true;
	};

	return (
		(location && calcShouldShowNavbar())
        && <Navbar />
	);
};

export default NavbarContainer;
