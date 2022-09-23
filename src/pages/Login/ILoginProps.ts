import { ChangeEventHandler } from 'react';

export interface ILoginProps {
    loginEmail: string;
	loginPassword: string;
	setLoginEmail: Function;
	setLoginPassword: Function;
	handleOnChange: ChangeEventHandler<HTMLInputElement>;
	isLoading: boolean;
}
