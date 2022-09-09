/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Context } from '../../context';
import { Login } from '../../pages';

const LoginContainer = (): JSX.Element => {
	const {
		auth, LoginWithGoogle, scrollToTop, isLoading, setIsLoading
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}: any = useContext(Context);

	const [loginEmail, setLoginEmail]: [string, Function] = useState<string>('');
	const [loginPassword, setLoginPassword]: [string, Function] = useState<string>('');
	const [loginPasswordConfirm, setLoginPasswordConfirm]: [string, Function] = useState<string>('');

	return (
		<Login
			loginEmail={loginEmail}
			loginPassword={loginPassword}
			loginPasswordConfirm={loginPasswordConfirm}
		/>
	);
};

export default LoginContainer;
