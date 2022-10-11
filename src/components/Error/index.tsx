/* eslint-disable import/no-cycle */
import { Column, CommonButton } from '..';
import { IErrorProps } from './IErrorProps';
import { commonButtonType } from '../../utils/enums';
import { ReactComponent as ErrorIcon } from '../../res/icons/error.svg';

const Error = ({ message, code, setError }: IErrorProps): JSX.Element => (
	<Column
		alignItems="items-center"
		extraClasses="m-auto space-y-2 p-4 dialog"
	>
		<ErrorIcon
			fill="white"
		/>
		<Column
			alignItems="items-start"
			extraClasses="w-full space-y-2"
		>
			<h1>
				<strong>
					Login Error:
				</strong>
				&nbsp;
				{message}
			</h1>
			<h1>
				<strong>
					Error Code:
				</strong>
				&nbsp;
				{code}
			</h1>
		</Column>
		<CommonButton
			type="button"
			buttonType={commonButtonType.STANDARD}
			onClick={() => setError(undefined)}
		>
			<h3
				className="text-sm"
			>
				Close
			</h3>
		</CommonButton>
	</Column>
);

export default Error;
