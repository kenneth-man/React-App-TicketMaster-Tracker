/* eslint-disable no-unused-vars */
import { ILoginProps } from './ILoginProps';
import { Page, CommonInput } from '../../components';
import ticketMasterLogo from '../../res/images/ticketmaster-logo.png';

const Login = ({
	loginEmail,
	loginPassword,
	setLoginEmail,
	setLoginPassword,
	handleOnChange,
	isLoading
}: ILoginProps): JSX.Element => (
	<Page>
		<img src={ticketMasterLogo} alt="ticket master logo" />
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
	</Page>
);

export default Login;
