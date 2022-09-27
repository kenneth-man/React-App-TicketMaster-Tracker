/* eslint-disable no-unused-vars */
import {
	useContext, useEffect, useState
} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Context } from '../../context';
import { Register } from '../../pages';

const RegisterContainer = (): JSX.Element => {
	const {
		auth, clearInputs, scrollToTop, isLoading, setIsLoading, handleOnChange
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}: any = useContext(Context);

	const registerWithEmailAndPassword = async (): Promise<void> => {
		console.log('test');
	};

	const [registerEmail, setRegisterEmail]: [string, Function] = useState<string>('');
	const [registerPassword, setRegisterPassword]: [string, Function] = useState<string>('');
	const [registerPasswordConfirm, setRegisterPasswordConfirm]: [string, Function] = useState<string>('');

	return (
		<Register
			registerEmail={registerEmail}
			registerPassword={registerPassword}
			registerPasswordConfirm={registerPasswordConfirm}
			setRegisterEmail={setRegisterEmail}
			setRegisterPassword={setRegisterPassword}
			setRegisterPasswordConfirm={setRegisterPasswordConfirm}
			handleOnChange={handleOnChange}
			registerWithEmailAndPassword={registerWithEmailAndPassword}
			isLoading={isLoading}
		/>
	);
};

export default RegisterContainer;
