/* eslint-disable react/button-has-type */
import { Children } from 'react';
import { ICommonButtonProps } from './ICommonButtonProps';
import { commonButtonType } from '../../utils/enums';

const CommonButton = ({
	children, onClick, type, buttonType, disabled, extraClasses
}: ICommonButtonProps): JSX.Element => (
	<button
		onClick={onClick}
		type={type}
		className={`
			${buttonType === commonButtonType.STANDARD
				&& (
					`bg-pri text-white fill-white font-thin px-6 py-2 rounded-full uppercase border border-black/5
					hover:shadow-white hover:shadow-md hover:-translate-y-0.5 hover:brightness-110
					active:shadow-none active:translate-y-0`
				)}
			${Children.count(children) > 1 && 'flex items-center space-x-2'}
			${extraClasses}
		`}
		disabled={disabled}
	>
		{children}
	</button>
);

export default CommonButton;
