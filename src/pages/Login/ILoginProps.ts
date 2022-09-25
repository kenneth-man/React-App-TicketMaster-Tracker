import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface ILoginProps {
    loginEmail: string;
	loginPassword: string;
	setLoginEmail: Function;
	setLoginPassword: Function;
	handleOnChange: ChangeEventHandler<HTMLInputElement>;
	loginWithEmailAndPassword: MouseEventHandler<HTMLButtonElement>
	loginWithGoogle: MouseEventHandler<HTMLButtonElement>;
	isLoading: boolean;
}
