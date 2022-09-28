/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	useContext, useState, MouseEvent
} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Context } from '../../context';
import { Login } from '../../pages';

const LoginContainer = (): JSX.Element => {
	const {
		auth, loginWithGoogle, setLoading, setError, handleOnChange
	}: any = useContext(Context);

	const [loginEmail, setLoginEmail]: [string, Function] = useState<string>('');
	const [loginPassword, setLoginPassword]: [string, Function] = useState<string>('');

	const loginWithEmailAndPassword = async (event: MouseEvent<HTMLFormElement>): Promise<void> => {
		try {
			event.preventDefault();
			setLoading(true);

			await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
		} catch (error: any) {
			setError({
				message: error.message,
				code: error.code,
				inputSetStates: [
					setLoginEmail,
					setLoginPassword
				]
			});
		}
	};

	return (
		<Login
			loginEmail={loginEmail}
			loginPassword={loginPassword}
			setLoginEmail={setLoginEmail}
			setLoginPassword={setLoginPassword}
			handleOnChange={handleOnChange}
			loginWithEmailAndPassword={loginWithEmailAndPassword}
			loginWithGoogle={loginWithGoogle}
		/>
	);
};

export default LoginContainer;
