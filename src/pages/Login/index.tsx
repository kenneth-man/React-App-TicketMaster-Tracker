/* eslint-disable jsx-a11y/label-has-associated-control */
import { ILoginProps } from './ILoginProps';
import {
	Column, CommonInput, CommonButton, CommonLink
} from '../../components';
import { PageContainer } from '../../componentContainers';
import { ReactComponent as GoogleIcon } from '../../res/icons/google3.svg';
import { ReactComponent as LoginIcon } from '../../res/icons/enter.svg';
import ticketMasterBackground from '../../res/images/ticketmaster-background.jpeg';
import ticketMasterLogo from '../../res/images/ticketmaster-logo.png';
import { commonLinkType } from '../../utils/enums';
import { logoStylesData } from '../../constants/logoStylesData';

const Login = ({
	loginEmail,
	loginPassword,
	setLoginEmail,
	setLoginPassword,
	handleOnChange,
	loginWithEmailAndPassword,
	loginWithGoogle
}: ILoginProps): JSX.Element => (
	<PageContainer
		justifyContent="justify-start"
		backgroundImage={ticketMasterBackground}
		extraClasses="space-y-14"
	>
		<img
			src={ticketMasterLogo}
			alt="ticket master logo"
			className={logoStylesData}
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
			onSubmit={loginWithEmailAndPassword}
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
				type="submit"
			>
				<h2>Login</h2>
				<LoginIcon />
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
				<h2>Google Login</h2>
				<GoogleIcon />
			</CommonButton>
		</Column>
		<CommonLink
			type={commonLinkType.LINK}
			href="/Register"
			extraClasses="text-white text-center decoration-white"
		>
			Don&apos;t have an account? Click here to Register!
		</CommonLink>
	</PageContainer>
);

export default Login;
