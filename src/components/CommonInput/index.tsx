import { ChangeEvent } from 'react';
import { ICommonInputProps } from './ICommonInputProps';

const CommonInput = ({
	state, setState, onChange, type, placeHolder, disabled, name, extraClasses
}: ICommonInputProps): JSX.Element => (
	<input
		value={state}
		onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, setState)}
		className={`
			border border-black
			${extraClasses}
		`}
		type={type}
		placeholder={placeHolder}
		disabled={disabled}
		name={name}
	/>
);

export default CommonInput;
