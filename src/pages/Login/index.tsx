/* eslint-disable no-unused-vars */
import { ILoginProps } from './ILoginProps';
import { CommonInput } from '../../components';

const Login = ({
	loginEmail,
	loginPassword,
	setLoginEmail,
	setLoginPassword,
	handleOnChange,
	isLoading
}: ILoginProps): JSX.Element => (
	<div>
		<h1>HELLO</h1>
		<form>
			<CommonInput
				state={loginEmail}
				setState={setLoginEmail}
				onChange={handleOnChange}
				type="text"
				placeHolder="Input your email address..."
				disabled={isLoading}
			/>
			<CommonInput
				state={loginPassword}
				setState={setLoginPassword}
				onChange={handleOnChange}
				type="password"
				placeHolder="Input your password..."
				disabled={isLoading}
			/>
		</form>
	</div>
);

export default Login;
