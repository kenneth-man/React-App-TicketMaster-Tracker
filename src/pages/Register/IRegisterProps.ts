import { ChangeEvent, FormEventHandler } from 'react';

export interface IRegisterProps {
    registerEmail: string;
    registerPassword: string;
    registerPasswordConfirm: string;
    setRegisterEmail: Function;
    setRegisterPassword: Function;
    setRegisterPasswordConfirm: Function;
    handleOnChange: (event: ChangeEvent<HTMLInputElement>, setState: Function) => void;
    registerWithEmailAndPassword: FormEventHandler<HTMLFormElement>;
}
