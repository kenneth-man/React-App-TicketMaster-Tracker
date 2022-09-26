import { ChangeEvent } from 'react';
import { ICommonInputProps } from './ICommonInputProps';

const CommonInput = ({
	state, setState, onChange, type, placeHolder, disabled, name, extraClasses
}: ICommonInputProps): JSX.Element => (
	<input
		value={state}
		onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, setState)}
		className={`
			w-full sm:w-96 px-4 py-2 border border-black/50 rounded-full text-pri text-center
			ring-0 ring-offset-0 ring-current outline-none
			placeholder:text-slate-300
			hover:ring-4 hover:placeholder:text-slate-400
			focus:ring-4 focus:placeholder:text-slate-400
			${extraClasses}
		`}
		type={type}
		placeholder={placeHolder}
		disabled={disabled}
		name={name}
	/>
);

export default CommonInput;
