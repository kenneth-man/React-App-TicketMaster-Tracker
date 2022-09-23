import { ChangeEvent } from 'react';

export interface ICommonInputProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    state: any;
    setState: Function;
    onChange: (event: ChangeEvent<HTMLInputElement>, setState: Function) => void;
    type: string;
    placeHolder: string;
    disabled: boolean;
    extraClasses?: string;
}
