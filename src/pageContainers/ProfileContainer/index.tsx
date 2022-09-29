/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { Context } from '../../context';
import { Page404, Profile } from '../../pages';

const ProfileContainer = (): JSX.Element => {
	const { logOut, auth, location }: any = useContext(Context);

	const formatPathToDisplayName = (path: string): string => {
		const pathArray: string[] = path.split('/');

		return pathArray[pathArray.length - 1];
	};

	return (
		auth
		&& auth.currentUser
		&& location
		&& auth.currentUser.displayName === formatPathToDisplayName(location.pathname)
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
