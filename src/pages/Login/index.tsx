/* eslint-disable no-unused-vars */
import { ILoginProps } from './ILoginProps';
import { CommonInput } from '../../components';

const Login = ({
	loginEmail,
	loginPassword,
	loginPasswordConfirm
}: ILoginProps): JSX.Element => (
	<div>
		<form>
			<CommonInput />
			<CommonInput />
			<CommonInput />
		</form>
	</div>
);

export default Login;
