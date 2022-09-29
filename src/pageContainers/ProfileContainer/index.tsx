/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from 'react';
import { useLocation, Location } from 'react-router-dom';
import { Context } from '../../context';
import { Page404, Profile } from '../../pages';

const ProfileContainer = (): JSX.Element => {
	const { logOut, auth }: any = useContext(Context);
	const location: Location = useLocation();

	const formatPathToDisplayName = (path: string): string => {
		const pathArray: string[] = path.split('/');

		return pathArray[pathArray.length - 1];
	};

	useEffect(() => {
		console.log(location, auth);
	});

	return (
		auth && auth.currentUser && auth.currentUser.displayName === formatPathToDisplayName(location.pathname)
			? (
				<Profile
					logOut={logOut}
				/>
			) : (
				<Page404 />
			)
	);
};

export default ProfileContainer;
