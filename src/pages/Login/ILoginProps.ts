import { ChangeEvent, MouseEventHandler } from 'react';

export interface ILoginProps {
    loginEmail: string;
	loginPassword: string;
	setLoginEmail: Function;
	setLoginPassword: Function;
	handleOnChange: (event: ChangeEvent<HTMLInputElement>, setState: Function) => void;
	// or handleOnChange: ChangeEventHandler<HTMLInputElement>;
	loginWithEmailAndPassword: MouseEventHandler<HTMLButtonElement>
	loginWithGoogle: MouseEventHandler<HTMLButtonElement>;
	isLoading: boolean;
}
