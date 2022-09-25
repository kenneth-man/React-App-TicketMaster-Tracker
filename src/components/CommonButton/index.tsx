/* eslint-disable react/button-has-type */
import { Children } from 'react';
import { ICommonButtonProps } from './ICommonButtonProps';

const CommonButton = ({
	children, onClick, type, disabled, extraClasses
}: ICommonButtonProps): JSX.Element => (
	<button
		onClick={onClick}
		type={type}
		className={`
			bg-pri
			${Children.count(children) > 1 && 'space-x-2'}
			${extraClasses}
		`}
		disabled={disabled}
	>
		{children}
	</button>
);

export default CommonButton;
