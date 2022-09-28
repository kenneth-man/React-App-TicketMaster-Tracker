/* eslint-disable jsx-a11y/label-has-associated-control */
import { ILoginProps } from './ILoginProps';
import {
	Page, Column, CommonInput, CommonButton, CommonLink
} from '../../components';
import ticketMasterBackground from '../../res/images/ticketmaster-background.jpeg';
import ticketMasterLogo from '../../res/images/ticketmaster-logo.png';

const Login = ({
	loginEmail,
	loginPassword,
	setLoginEmail,
	setLoginPassword,
	handleOnChange,
	loginWithEmailAndPassword,
	loginWithGoogle,
	isLoading
}: ILoginProps): JSX.Element => (
	<Page
		justifyContent="justify-start"
		backgroundImage={ticketMasterBackground}
		isLoading={isLoading}
		extraClasses="space-y-14"
	>
		<img
			src={ticketMasterLogo}
			alt="ticket master logo"
			className="w-96 h-20 object-cover"
		/>
		<Column
			fullWidth
			extraClasses="space-y-4 sm:px-20 lg:px-80"
		>
			<h1>TicketMaster Tracker</h1>
			<p
				className="line-clamp line-clamp-4"
			>
				Ticketmaster is the world&apos;s largest ticket distribution company in the United States,
				completely dominating its market niche. The company distributes tickets for more than 10,000
				clients whose events range from professional wrestling matches and rock concerts to Broadway
				shows and operas.
			</p>
		</Column>
		<form
			className="flex flex-col items-center col-space-4"
		>
			<h1>Login with Email and Password</h1>
			<Column
				extraClasses="col-space-1"
			>
				<label
					htmlFor="loginEmail"
				>
					Email
				</label>
				<CommonInput
					state={loginEmail}
					setState={setLoginEmail}
					onChange={handleOnChange}
					type="text"
					placeHolder="Input your account email address..."
					name="loginEmail"
				/>
			</Column>
			<Column
				extraClasses="col-space-1"
			>
				<label
					htmlFor="loginPassword"
				>
					Password
				</label>
				<CommonInput
					state={loginPassword}
					setState={setLoginPassword}
					onChange={handleOnChange}
					type="password"
					placeHolder="Input your account password..."
					name="loginPassword"
				/>
			</Column>
			<CommonButton
				onClick={loginWithEmailAndPassword}
				type="button"
			>
				Login
			</CommonButton>
		</form>
		<Column
			extraClasses="col-space-4"
		>
			<h1>...Or login with your Google account</h1>
			<CommonButton
				onClick={loginWithGoogle}
				type="button"
			>
				Google Login
			</CommonButton>
		</Column>
		<CommonLink
			isRouterLink
			href="/Register"
			extraClasses="text-white text-center decoration-white"
		>
			Don&apos;t have an account? Click here to Register!
		</CommonLink>
	</Page>
);

export default Login;
