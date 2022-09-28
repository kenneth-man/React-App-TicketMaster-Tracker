/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	useContext, useState, MouseEvent
} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Context } from '../../context';
import { Register } from '../../pages';

const RegisterContainer = (): JSX.Element => {
	const {
		auth, setLoading, setError, handleOnChange, checkValidEmail, checkValidPassword
	}: any = useContext(Context);

	const [registerEmail, setRegisterEmail]: [string, Function] = useState<string>('');
	const [registerPassword, setRegisterPassword]: [string, Function] = useState<string>('');
	const [registerPasswordConfirm, setRegisterPasswordConfirm]: [string, Function] = useState<string>('');

	const registerWithEmailAndPassword = async (event: MouseEvent<HTMLFormElement>): Promise<void> => {
		try {
			event.preventDefault();
			setLoading(true);

			if (checkValidEmail(registerEmail) && checkValidPassword(registerPassword, registerPasswordConfirm)) {
				await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
			} else {
				const message: string = 'Invalid Email or Password (passwords must be 8 or more characters long)';

				throw Object.assign(
					new Error(message),
					{ code: 403 }
				);
			}
		} catch (error: any) {
			setError({
				message: error.message,
				code: error.code,
				inputSetStates: [
					setRegisterEmail,
					setRegisterPassword,
					setRegisterPasswordConfirm
				]
			});
		}
	};

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
		/>
	);
};

export default RegisterContainer;
