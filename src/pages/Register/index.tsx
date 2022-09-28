/* eslint-disable jsx-a11y/label-has-associated-control */
import { IRegisterProps } from './IRegisterProps';
import {
	Page, CommonInput, CommonButton, Column
} from '../../components';
import ticketMasterBackground2 from '../../res/images/ticketmaster-background-2.jpg';
import ticketMasterLogo from '../../res/images/ticketmaster-logo.png';

const Register = ({
	registerEmail,
	registerPassword,
	registerPasswordConfirm,
	setRegisterEmail,
	setRegisterPassword,
	setRegisterPasswordConfirm,
	handleOnChange,
	registerWithEmailAndPassword,
	isLoading
}: IRegisterProps): JSX.Element => (
	<Page
		justifyContent="justify-start"
		backgroundImage={ticketMasterBackground2}
		isLoading={isLoading}
		extraClasses="space-y-14"
	>
		<img
			src={ticketMasterLogo}
			alt="ticket master logo"
			className="w-96 h-20 object-cover"
		/>
		<form
			className="flex flex-col items-center col-space-4"
		>
			<h1>Register with Email and Password</h1>
			<Column
				extraClasses="col-space-1"
			>
				<label
					htmlFor="registerEmail"
				>
					Email
				</label>
				<CommonInput
					state={registerEmail}
					setState={setRegisterEmail}
					onChange={handleOnChange}
					type="text"
					placeHolder="Input your email address..."
					name="registerEmail"
				/>
			</Column>
			<Column
				extraClasses="col-space-1"
			>
				<label
					htmlFor="registerPassword"
				>
					Password
				</label>
				<CommonInput
					state={registerPassword}
					setState={setRegisterPassword}
					onChange={handleOnChange}
					type="password"
					placeHolder="Input your password..."
					name="registerPassword"
				/>
			</Column>
			<Column
				extraClasses="col-space-1"
			>
				<label
					htmlFor="registerPasswordConfirm"
				>
					Confirm Password
				</label>
				<CommonInput
					state={registerPasswordConfirm}
					setState={setRegisterPasswordConfirm}
					onChange={handleOnChange}
					type="password"
					placeHolder="Re-type your password..."
					name="registerPasswordConfirm"
				/>
			</Column>
			<CommonButton
				onClick={registerWithEmailAndPassword}
				type="button"
			>
				Register
			</CommonButton>
		</form>
	</Page>
);

export default Register;
