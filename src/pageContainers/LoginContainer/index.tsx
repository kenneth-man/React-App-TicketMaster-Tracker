/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Context } from '../../context';
import { Login } from '../../pages';

const LoginContainer = (): JSX.Element => {
	const {
		auth, LoginWithGoogle, scrollToTop, isLoading, setIsLoading
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}: any = useContext(Context);

	return (
		<Login />
	);
};

export default LoginContainer;
