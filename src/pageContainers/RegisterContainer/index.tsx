/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	useContext, useState, MouseEvent
} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Context } from '../../context';
import { Register } from '../../pages';
import { registerErrorMessage } from '../../utils/enums';

const RegisterContainer = (): JSX.Element => {
	const {
		auth, setLoading, setError, handleOnChange, checkValidEmail, checkValidPassword, navigate
	}: any = useContext(Context);

	const [registerEmail, setRegisterEmail]: [string, Function] = useState<string>('');
	const [registerPassword, setRegisterPassword]: [string, Function] = useState<string>('');
	const [registerPasswordConfirm, setRegisterPasswordConfirm]: [string, Function] = useState<string>('');

	const throwErrorMessage = (errorMessageText: string): Error => (
		Object.assign(
			new Error(errorMessageText),
			{ code: 403 }
		)
	);

	const registerWithEmailAndPassword = async (event: MouseEvent<HTMLFormElement>): Promise<void> => {
		try {
			event.preventDefault();
			setLoading(true);

			if (!registerEmail || !registerPassword || !registerPasswordConfirm) {
				throw throwErrorMessage(registerErrorMessage.EMPTYINPUT);
			}

			if (registerPassword !== registerPasswordConfirm) {
				throw throwErrorMessage(registerErrorMessage.MISMATCHPASSWORDS);
			}

			if (!checkValidEmail(registerEmail)) {
				throw throwErrorMessage(registerErrorMessage.INVALIDEMAIL);
			}

			if (!checkValidPassword(registerPassword, registerPasswordConfirm)) {
				throw throwErrorMessage(registerErrorMessage.INVALIDPASSWORD);
			}

			await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

			navigate('/');
		} catch (error: any) {
			setError({
				message: error.message,
				code: error.code || '403',
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
