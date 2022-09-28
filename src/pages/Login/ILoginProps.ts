import { ChangeEvent, MouseEventHandler, FormEventHandler } from 'react';

export interface ILoginProps {
    loginEmail: string;
	loginPassword: string;
	setLoginEmail: Function;
	setLoginPassword: Function;
	handleOnChange: (event: ChangeEvent<HTMLInputElement>, setState: Function) => void;
	// or handleOnChange: ChangeEventHandler<HTMLInputElement>;
	loginWithEmailAndPassword: FormEventHandler<HTMLFormElement>
	loginWithGoogle: MouseEventHandler<HTMLButtonElement>;
}
