/* eslint-disable import/no-cycle */
import { Column } from '..';
import { IErrorProps } from './IErrorProps';
import { ReactComponent as ErrorIcon } from '../../res/icons/error.svg';

const Error = ({ message, code }: IErrorProps): JSX.Element => (
	<Column
		alignItems="items-center"
		extraClasses="m-auto space-y-2 dialog"
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
	</Column>
);

export default Error;
